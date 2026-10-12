/**
 * Classify shared songs into SK / CZ / EN from title+lyrics.
 * Then rewrite songs.js with lang field + regenerate LanguageContext filter.
 */
import { readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const FILE = join(ROOT, 'src', 'data', 'songs.js')
const OUT_JSON = join(ROOT, 'src', 'data', '_song_langs.json')

const mod = await import(`file://${FILE.replace(/\\/g, '/')}?t=${Date.now()}`)
const songs = mod.songs

const ALL_STAGES = [
  '6-9m',
  '9-12m',
  '12-15m',
  '15-18m',
  '18-21m',
  '21-24m',
  '24-27m',
  '27-30m',
  '30-33m',
  '33-36m',
]

function firstTwoLines(lyrics) {
  return lyrics
    .split('\n')
    .map((l) => l.trim())
    .filter(Boolean)
    .slice(0, 2)
    .join(' ')
}

function escTemplate(s) {
  return s.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${')
}

function escStr(s) {
  return s.replace(/\\/g, '\\\\').replace(/'/g, "\\'")
}

/** Manual overrides where heuristics are weak */
const OVERRIDES = {
  '10 green bottles': 'EN',
  'All I want for Christmas\u00a0 is you': 'EN',
  'All I want for Christmas is you': 'EN',
  'Happy Christmas': 'EN',
  'Jingle Bells': 'EN',
  'Last Christmas': 'EN',
  'Old MacDonald': 'EN',
  Teletubbies: 'EN',
  'We Wish You a Merry Christmas': 'EN',
  'Whait a minute': 'EN',
  'Wonderful Dream (Holidays Are Coming)': 'EN',
  'Káčerovo - český text': 'CZ',
  'Rychlá rota - čeký text': 'CZ',
  'Skákal pes,přes oves': 'CZ',
  'Šmoulové': 'CZ',
  'Prší prší trosku jinak': 'CZ',
  'Trosku moderní Nanynka': 'CZ',
}

function classify(title, lyrics) {
  const titleKey = title.replace(/\s+/g, ' ').trim()
  if (OVERRIDES[titleKey]) return OVERRIDES[titleKey]
  // normalize nbsp
  for (const [k, v] of Object.entries(OVERRIDES)) {
    if (k.replace(/\u00a0/g, ' ') === titleKey.replace(/\u00a0/g, ' ')) return v
  }

  if (/český text|čeký text/i.test(title)) return 'CZ'

  const text = `${title}\n${lyrics}`
  const lower = text.toLowerCase()

  // Unique letters
  const czLetterHits = (text.match(/[ěĚřŘůŮ]/g) || []).length
  const skLetterHits = (text.match(/[äÄôÔĺĹŕŔľĽ]/g) || []).length

  const czWordRe =
    /\b(když|jsem|jsi|přes|dírou|holka|kočka|štěpáne|oves|sestřenice|loučení|šmoulové|nanynka|marnivá|kotě|botě|nepojedu|půjdu|půjč|třeba|větou|hněvá|nevím|modrooká|vraný|koně|sekeru|topůrko|dětské|řekni|záleží|bydlím|vyklubal|řeka|šátečku|kolem se toč|tatíček|oral-li|doma-li|gašpar(?!))\b/gi
  const skWordRe =
    /\b(keď|som|dieťa|dieťatko|spíže|búvaj|hajaj|vláčik|mucha|slíže|jabĺčko|nožičky|ručičky|mamka|synku|anjeličku|choďte|spať|kričať|halušky|rúčky|topánok|očká|slniečko|hviezdička|pesničk|ľudov|šťastia|ďateľ|mäkk|väčš|vôňa|pôjde|pôjdem|ďakuj|mať|deti|večer|mesiačik)\b/gi

  const czWords = (lower.match(czWordRe) || []).length
  const skWords = (lower.match(skWordRe) || []).length

  const enWordRe =
    /\b(the|and|you|your|christmas|merry|wish|bottles|jingle|bells|macdonald|wonderful|holidays|teletubbies|hanging|wall|accidentally)\b/gi
  const enWords = (lower.match(enWordRe) || []).length
  const hasSlavicDiacritics = /[áäčďéěíĺľňóôŕšťúůýžř]/i.test(text)

  let sk = skLetterHits * 4 + skWords * 3
  let cz = czLetterHits * 5 + czWords * 3
  let en = enWords * 3

  if (/[ěřů]/i.test(text)) cz += 10
  if (/[äôĺŕľ]/i.test(text)) sk += 10

  if (!hasSlavicDiacritics && enWords >= 2) en += 12
  if (
    /jingle bells|green bottles|old macdonald|teletubbies|wonderful dream|merry christmas|last christmas|all i want for christmas|happy christmas|wait a minute|whait a minute/i.test(
      lower,
    )
  ) {
    en += 20
  }

  // Known traditional sets
  if (
    /kočka leze|skákal pes|holka modrooká|pec nám spadla|já mám koně|když se zamiluje|malé kotě|marnivá sestřenice|koleda,? koleda štěpáne|já do lesa/i.test(
      lower,
    )
  ) {
    cz += 15
  }
  if (
    /sedí mucha|búvaj dieťa|spi dieťatko|skáče žaba|zlatá brána|ťap.?ťap|varila myšička|čierne oči choďte|pásli ovce valasi/i.test(
      lower,
    )
  ) {
    sk += 15
  }

  if (en >= sk && en >= cz && en > 0) return 'EN'
  if (cz === 0 && sk === 0) {
    // Slavic orthography without unique letters → default SK (catalog host)
    return hasSlavicDiacritics ? 'SK' : enWords > 0 ? 'EN' : 'SK'
  }
  if (cz === sk) return czLetterHits > 0 ? 'CZ' : 'SK'
  return cz > sk ? 'CZ' : 'SK'
}

const classified = songs.map((s) => {
  const lang = classify(s.title, s.lyrics)
  return {
    id: s.id,
    title: s.title,
    lang,
    preview: (s.lyrics.split('\n').find((l) => l.trim()) || '').slice(0, 80),
  }
})

const counts = classified.reduce((a, x) => {
  a[x.lang] = (a[x.lang] || 0) + 1
  return a
}, {})

writeFileSync(OUT_JSON, JSON.stringify({ counts, songs: classified }, null, 2), 'utf8')
console.log('counts', counts)

// Rewrite songs.js with lang
const byId = Object.fromEntries(classified.map((x) => [x.id, x.lang]))

const body = songs
  .map((s) => {
    const lang = byId[s.id]
    const desc = firstTwoLines(s.lyrics)
    const tags = (s.tags || []).filter((t) => t !== 'indoor')
    return `  {
    id: '${escStr(s.id)}',
    type: 'song',
    category: 'songs',
    lang: '${lang}',
    stages: ${JSON.stringify(ALL_STAGES)},
    tags: ${JSON.stringify(tags)},
    title: '${escStr(s.title)}',
    description: '${escStr(desc)}',
    materials: [],
    steps: [],
    lyrics: \`${escTemplate(s.lyrics)}\`,
    notes: '${escStr(s.notes || '')}',
  }`
  })
  .join(',\n')

const file = `/** Shared children's songs — lang: SK | CZ | EN (from lyrics) */
function withPlaceTags(items) {
  return items.map((item) => {
    const tags = new Set(item.tags || [])
    if (tags.has('car') || tags.has('outdoors')) tags.delete('indoor')
    else tags.add('indoor')
    return { ...item, tags: [...tags] }
  })
}

const rawSongs = [
${body},
]

export const songs = withPlaceTags(rawSongs)
`

writeFileSync(FILE, file, 'utf8')
console.log('wrote songs.js with lang')
console.log(
  'CZ titles:',
  classified
    .filter((x) => x.lang === 'CZ')
    .map((x) => x.title)
    .join(' | '),
)
console.log(
  'EN titles:',
  classified
    .filter((x) => x.lang === 'EN')
    .map((x) => x.title)
    .join(' | '),
)
