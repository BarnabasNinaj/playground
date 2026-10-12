/**
 * Build songsExtraSK.js from scraped JSON (real lyrics only).
 */
import { readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const IN = join(ROOT, 'src', 'data', '_scraped_sk_songs.json')
const OUT = join(ROOT, 'src', 'data', 'songs.js')

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

function slugify(title) {
  return title
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 48)
}

function cleanLyrics(text) {
  return text
    .replace(/\u00a0/g, ' ')
    .replace(/[ \t]+$/gm, '')
    .replace(/\n{3,}/g, '\n\n')
    .trim()
}

function inferMeta(title, lyrics) {
  const t = `${title}\n${lyrics}`.toLowerCase()
  const tags = new Set(['no-prep', 'under-10'])
  let stages = ALL_STAGES.slice(2) // 12m+

  if (
    /spi|búvaj|buvaj|hajaj|uspáv|dobrú noc|na dobrú noc|usni|spinkaj|spiže|spiže mi/.test(
      t,
    )
  ) {
    tags.add('car')
    stages = ALL_STAGES.slice(0, 6) // 6–24m
  }
  if (/auto|vláčik|vlacik|vlak|cest/.test(t)) tags.add('car')
  if (/vonku|trávič|trava|les|hora|záhrad|zahrad|prší|prsi/.test(t))
    tags.add('outdoors')
  if (/kašič|kasic|varil|kuchyn|jedl|ovoc/.test(t)) tags.add('kitchen')
  if (/skáče|skace|skákal|skakal|tanec|tancuj|dupk|hlava.?ramen/.test(t)) {
    tags.add('outdoors')
    stages = ALL_STAGES.slice(3) // 15m+
  }

  return {
    stages,
    tags: [...tags],
  }
}

function escTemplate(s) {
  return s.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${')
}

function escStr(s) {
  return s.replace(/\\/g, '\\\\').replace(/'/g, "\\'")
}

const scraped = JSON.parse(readFileSync(IN, 'utf8'))
const usedIds = new Set()

const songs = scraped.map((s, i) => {
  const lyrics = cleanLyrics(s.lyrics)
  let id = `song-sk-${slugify(s.title)}`
  if (usedIds.has(id)) id = `${id}-${i}`
  usedIds.add(id)
  const { stages, tags } = inferMeta(s.title, lyrics)
  return {
    id,
    title: s.title.trim(),
    href: s.href,
    lyrics,
    stages,
    tags,
  }
})

const body = songs
  .map((s) => {
    const desc = firstTwoLines(s.lyrics)
    return `  {
    id: '${escStr(s.id)}',
    type: 'song',
    category: 'songs',
    stages: ${JSON.stringify(ALL_STAGES)},
    tags: ${JSON.stringify(s.tags)},
    title: '${escStr(s.title)}',
    description: '${escStr(desc)}',
    materials: [],
    steps: [],
    lyrics: \`${escTemplate(s.lyrics)}\`,
    notes: 'Zdroj: ${escStr(s.href)}',
  }`
  })
  .join(',\n')

const file = `/** Shared children's songs (SK/CZ mixed catalog) — lyrics from hudba.zoznam.sk */
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

writeFileSync(OUT, file, 'utf8')
console.log('wrote', OUT, 'songs=', songs.length)
