/**
 * Generate countriesSK.js + countriesCZ.js from world country datasets.
 * Structure mirrors animal encyclopedia: about, facts (+numbers), record, notes.
 */
import { readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { HISTORY_RECORDS } from './country-history-records.mjs'
import { COUNTRY_CULTURE } from './country-culture.mjs'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const raw = JSON.parse(readFileSync(join(ROOT, 'scripts', '_countries_raw.json'), 'utf8'))
const pops = JSON.parse(readFileSync(join(ROOT, 'scripts', '_populations_raw.json'), 'utf8'))

const POP_ALIAS = {
  'DR Congo': 'Congo, Democratic Republic of the',
  'Democratic Republic of the Congo': 'Congo, Democratic Republic of the',
  'Cape Verde': 'Cabo Verde',
  'Micronesia': 'Micronesia, Federated States of',
  'São Tomé and Príncipe': 'Sao Tome and Principe',
  'Timor-Leste': 'East Timor',
  Türkiye: 'Turkey',
  'Vatican City': 'Vatican City',
  'United States': 'United States of America',
  'United Kingdom': 'United Kingdom',
  Czechia: 'Czech Republic',
  'North Macedonia': 'Macedonia',
  Eswatini: 'Swaziland',
  Myanmar: 'Burma',
  'Ivory Coast': "Cote d'Ivoire",
  "Côte d'Ivoire": "Cote d'Ivoire",
}

const popByName = Object.fromEntries(
  pops.map((p) => [p.country, Number(p.population)]).filter(([, n]) => Number.isFinite(n)),
)

function populationOf(c) {
  const names = [
    c.name.common,
    c.name.official,
    POP_ALIAS[c.name.common],
    POP_ALIAS[c.name.official],
  ].filter(Boolean)
  for (const n of names) {
    if (popByName[n] != null) return popByName[n]
  }
  // fallbacks for stubborn mismatches
  const manual = {
    FJ: 924_610,
    FM: 115_224,
    TL: 1_340_513,
    VA: 825,
    CD: 102_262_808,
    CV: 593_149,
    ST: 223_364,
    TR: 84_680_273,
  }
  return manual[c.cca2] ?? null
}

const CONTINENT = {
  Europe: { sk: 'Európa', cz: 'Evropa', tag: 'europe' },
  Asia: { sk: 'Ázia', cz: 'Asie', tag: 'asia' },
  Africa: { sk: 'Afrika', cz: 'Afrika', tag: 'africa' },
  Oceania: { sk: 'Oceánia', cz: 'Oceánie', tag: 'oceania' },
  Antarctic: { sk: 'Antarktída', cz: 'Antarktida', tag: 'antarctica' },
}

function continentOf(c) {
  if (c.region === 'Americas') {
    const sub = c.subregion || ''
    if (sub.includes('South')) return { sk: 'Južná Amerika', cz: 'Jižní Amerika', tag: 'south-america' }
    return { sk: 'Severná Amerika', cz: 'Severní Amerika', tag: 'north-america' }
  }
  return CONTINENT[c.region] || { sk: c.region, cz: c.region, tag: 'world' }
}

function fmtNum(n, lang) {
  if (n == null || !Number.isFinite(n)) return lang === 'SK' ? 'neznáme' : 'neznámé'
  return new Intl.NumberFormat(lang === 'SK' ? 'sk-SK' : 'cs-CZ').format(Math.round(n))
}

function fmtArea(km2, lang) {
  if (km2 >= 1_000_000) {
    const m = (km2 / 1_000_000).toFixed(1).replace(/\.0$/, '')
    return lang === 'SK' ? `${m} mil. km²` : `${m} mil. km²`
  }
  return `${fmtNum(km2, lang)} km²`
}

function fmtPop(n, lang) {
  if (n == null) return lang === 'SK' ? 'počet obyvateľov sa mení' : 'počet obyvatel se mění'
  if (n >= 1_000_000_000) {
    const b = (n / 1_000_000_000).toFixed(2).replace(/\.?0+$/, '')
    return lang === 'SK' ? `približne ${b} miliardy` : `přibližně ${b} miliardy`
  }
  if (n >= 1_000_000) {
    const m = (n / 1_000_000).toFixed(1).replace(/\.0$/, '')
    return lang === 'SK' ? `približne ${m} miliónov` : `přibližně ${m} milionů`
  }
  return lang === 'SK' ? `približne ${fmtNum(n, lang)}` : `přibližně ${fmtNum(n, lang)}`
}


function nameOf(c, lang) {
  if (lang === 'SK') {
    return c.translations?.slk?.common || c.name?.native?.slk?.common || c.name.common
  }
  return c.translations?.ces?.common || c.name.common
}

function capitalOf(c, lang) {
  const cap = c.capital?.[0]
  if (!cap) return lang === 'SK' ? 'bez uvedeného hlavného mesta' : 'bez uvedeného hlavního města'
  // keep international/local capital names as in dataset (Bratislava, Praha via translation if we had it)
  const CAP = {
    Prague: { sk: 'Praha', cz: 'Praha' },
    Vienna: { sk: 'Viedeň', cz: 'Vídeň' },
    Warsaw: { sk: 'Varšava', cz: 'Varšava' },
    Rome: { sk: 'Rím', cz: 'Řím' },
    Moscow: { sk: 'Moskva', cz: 'Moskva' },
    Brussels: { sk: 'Brusel', cz: 'Brusel' },
    Copenhagen: { sk: 'Kodaň', cz: 'Kodaň' },
    Athens: { sk: 'Atény', cz: 'Athény' },
    Lisbon: { sk: 'Lisabon', cz: 'Lisabon' },
    Bucharest: { sk: 'Bukurešť', cz: 'Bukurešť' },
    Budapest: { sk: 'Budapešť', cz: 'Budapešť' },
    Cairo: { sk: 'Káhira', cz: 'Káhira' },
    'Mexico City': { sk: 'Mexiko City', cz: 'Mexico City' },
    'Washington, D.C.': { sk: 'Washington, D.C.', cz: 'Washington, D.C.' },
  }
  const hit = CAP[cap]
  if (hit) return lang === 'SK' ? hit.sk : hit.cz
  return cap
}

const LANG_NAMES = {
  Slovak: { sk: 'slovenčina', cz: 'slovenština' },
  Czech: { sk: 'čeština', cz: 'čeština' },
  English: { sk: 'angličtina', cz: 'angličtina' },
  French: { sk: 'francúzština', cz: 'francouzština' },
  Spanish: { sk: 'španielčina', cz: 'španělština' },
  Portuguese: { sk: 'portugalčina', cz: 'portugalština' },
  German: { sk: 'nemčina', cz: 'němčina' },
  Italian: { sk: 'taliančina', cz: 'italština' },
  Polish: { sk: 'poľština', cz: 'polština' },
  Hungarian: { sk: 'maďarčina', cz: 'maďarština' },
  Russian: { sk: 'ruština', cz: 'ruština' },
  Ukrainian: { sk: 'ukrajinčina', cz: 'ukrajinština' },
  Arabic: { sk: 'arabčina', cz: 'arabština' },
  Chinese: { sk: 'čínština', cz: 'čínština' },
  Japanese: { sk: 'japončina', cz: 'japonština' },
  Korean: { sk: 'kórejčina', cz: 'korejština' },
  Hindi: { sk: 'hindčina', cz: 'hindština' },
  Turkish: { sk: 'turečtina', cz: 'turečtina' },
  Dutch: { sk: 'holandčina', cz: 'nizozemština' },
  Swedish: { sk: 'švédčina', cz: 'švédština' },
  Norwegian: { sk: 'nórčina', cz: 'norština' },
  Danish: { sk: 'dánčina', cz: 'dánština' },
  Finnish: { sk: 'fínčina', cz: 'finština' },
  Greek: { sk: 'gréčtina', cz: 'řečtina' },
  Romanian: { sk: 'rumunčina', cz: 'rumunština' },
  Bulgarian: { sk: 'bulharčina', cz: 'bulharština' },
  Croatian: { sk: 'chorvátčina', cz: 'chorvatština' },
  Serbian: { sk: 'srbčina', cz: 'srbština' },
  Albanian: { sk: 'albánčina', cz: 'albánština' },
  Hebrew: { sk: 'hebrejčina', cz: 'hebrejština' },
  Persian: { sk: 'perzština', cz: 'perština' },
  Thai: { sk: 'thajčina', cz: 'thajština' },
  Vietnamese: { sk: 'vietnamčina', cz: 'vietnamština' },
  Indonesian: { sk: 'indonézština', cz: 'indonéština' },
  Swahili: { sk: 'swahilčina', cz: 'svahilština' },
  Amharic: { sk: 'amharčina', cz: 'amharština' },
  Georgian: { sk: 'gruzínčina', cz: 'gruzínština' },
  Armenian: { sk: 'arménčina', cz: 'arménština' },
  Azerbaijani: { sk: 'azerbajdžančina', cz: 'ázerbájdžánština' },
  Kazakh: { sk: 'kazaština', cz: 'kazaština' },
  Uzbek: { sk: 'uzbečtina', cz: 'uzbečtina' },
  Mongolian: { sk: 'mongolčina', cz: 'mongolština' },
  Nepali: { sk: 'nepálčina', cz: 'nepálština' },
  Bengali: { sk: 'bengálčina', cz: 'bengálština' },
  Urdu: { sk: 'urdčina', cz: 'urdština' },
  Tamil: { sk: 'tamilčina', cz: 'tamilština' },
  Malay: { sk: 'malajčina', cz: 'malajština' },
  Tagalog: { sk: 'tagalčina', cz: 'tagalština' },
  Filipino: { sk: 'filipínčina', cz: 'filipínština' },
  Irish: { sk: 'írčina', cz: 'irština' },
  Icelandic: { sk: 'islandčina', cz: 'islandština' },
  Lithuanian: { sk: 'litovčina', cz: 'litevština' },
  Latvian: { sk: 'lotyština', cz: 'lotyština' },
  Estonian: { sk: 'estónčina', cz: 'estonština' },
  Slovenian: { sk: 'slovinčina', cz: 'slovinština' },
  Macedonian: { sk: 'macedónčina', cz: 'makedonština' },
  Bosnian: { sk: 'bosniačtina', cz: 'bosenština' },
  Montenegrin: { sk: 'čiernohorčina', cz: 'černohorština' },
  Catalan: { sk: 'katalánčina', cz: 'katalánština' },
  Basque: { sk: 'baskičtina', cz: 'baskičtina' },
  Galician: { sk: 'galícijčina', cz: 'galicijština' },
  Quechua: { sk: 'kečuánčina', cz: 'kečuánština' },
  Aymara: { sk: 'aymarčina', cz: 'ajmarština' },
  Guarani: { sk: 'guaraní', cz: 'guaraní' },
  Dari: { sk: 'darí', cz: 'darí' },
  Pashto: { sk: 'paštčina', cz: 'paštština' },
  Kurdish: { sk: 'kurdčina', cz: 'kurdština' },
  Somali: { sk: 'somálčina', cz: 'somálština' },
  Zulu: { sk: 'zuluština', cz: 'zuluština' },
  Afrikaans: { sk: 'afrikánčina', cz: 'afrikánština' },
  Latin: { sk: 'latina', cz: 'latina' },
  Luxembourgish: { sk: 'luxemburčina', cz: 'lucemburština' },
  Maltese: { sk: 'maltčina', cz: 'maltština' },
  Welsh: { sk: 'waleština', cz: 'velština' },
  Sinhala: { sk: 'sinhálčina', cz: 'sinhálština' },
  Khmer: { sk: 'khmérčina', cz: 'khmérština' },
  Lao: { sk: 'laoština', cz: 'laoština' },
  Burmese: { sk: 'barmčina', cz: 'barmština' },
  Dzongkha: { sk: 'dzongkha', cz: 'dzongkha' },
  Fijian: { sk: 'fidžijčina', cz: 'fidžijština' },
  Samoan: { sk: 'samojčina', cz: 'samojština' },
  Tongan: { sk: 'tongčina', cz: 'tongánština' },
  Maori: { sk: 'maorčina', cz: 'maorština' },
  Turkmen: { sk: 'turkménčina', cz: 'turkmenština' },
  Kyrgyz: { sk: 'kirgizština', cz: 'kyrgyzština' },
  Tajik: { sk: 'tadžičtina', cz: 'tádžičtina' },
  Belarusian: { sk: 'bieloruština', cz: 'běloruština' },
  Moldovan: { sk: 'moldavčina', cz: 'moldavština' },
}

function langList(c, lang) {
  const vals = Object.values(c.languages || {})
  if (!vals.length) return lang === 'SK' ? 'jazyky nie sú uvedené' : 'jazyky nejsou uvedeny'
  const named = vals.map((v) => {
    const hit = LANG_NAMES[v]
    return hit ? (lang === 'SK' ? hit.sk : hit.cz) : v
  })
  const shown = named.slice(0, 4).join(', ')
  return named.length > 4 ? `${shown}…` : shown
}

function esc(s) {
  return String(s ?? '').replace(/\\/g, '\\\\').replace(/'/g, "\\'")
}

const countries = raw
  .filter((c) => c.unMember)
  .map((c) => {
    const pop = populationOf(c)
    const cont = continentOf(c)
    return { ...c, _pop: pop, _cont: cont }
  })
  .sort((a, b) => a._cont.sk.localeCompare(b._cont.sk, 'sk') || nameOf(a, 'SK').localeCompare(nameOf(b, 'SK'), 'sk'))

const byCca3 = Object.fromEntries(raw.map((c) => [c.cca3, c]))

/** Non-UN / dependent territories sometimes appear as borders. */
const BORDER_ALIAS = {
  GUF: { sk: 'Francúzska Guayana', cz: 'Francouzská Guyana' },
  SUR: { sk: 'Surinam', cz: 'Surinam' },
  PRK: { sk: 'Severná Kórea', cz: 'Severní Korea' },
  XKX: { sk: 'Kosovo', cz: 'Kosovo' },
}

function neighborNames(c, lang) {
  const codes = c.borders || []
  if (!codes.length) {
    return lang === 'SK'
      ? 'nemá suchozemských susedov (ostrovný alebo izolovaný štát)'
      : 'nemá pozemní sousedy (ostrovní nebo izolovaný stát)'
  }
  const names = codes
    .map((code) => {
      const alias = BORDER_ALIAS[code]
      if (alias) return lang === 'SK' ? alias.sk : alias.cz
      const n = byCca3[code]
      return n ? nameOf(n, lang) : null
    })
    .filter(Boolean)
  if (!names.length) {
    return lang === 'SK' ? `${codes.length} susedných území` : `${codes.length} sousedních území`
  }
  return names.join(', ')
}

function locationLine(c, lang) {
  const cont = lang === 'SK' ? c._cont.sk : c._cont.cz
  const sub = c.subregion
  if (!sub) return cont
  // keep EN subregion lightly — better than inventing all translations
  const SUB = {
    'Central Europe': { sk: 'stredná Európa', cz: 'střední Evropa' },
    'Eastern Europe': { sk: 'východná Európa', cz: 'východní Evropa' },
    'Northern Europe': { sk: 'severná Európa', cz: 'severní Evropa' },
    'Southern Europe': { sk: 'južná Európa', cz: 'jižní Evropa' },
    'Western Europe': { sk: 'západná Európa', cz: 'západní Evropa' },
    'South-Eastern Asia': { sk: 'juhovýchodná Ázia', cz: 'jihovýchodní Asie' },
    'Eastern Asia': { sk: 'východná Ázia', cz: 'východní Asie' },
    'Southern Asia': { sk: 'južná Ázia', cz: 'jižní Asie' },
    'Western Asia': { sk: 'západná Ázia', cz: 'západní Asie' },
    'Central Asia': { sk: 'stredná Ázia', cz: 'střední Asie' },
    'Northern Africa': { sk: 'severná Afrika', cz: 'severní Afrika' },
    'Western Africa': { sk: 'západná Afrika', cz: 'západní Afrika' },
    'Eastern Africa': { sk: 'východná Afrika', cz: 'východní Afrika' },
    'Middle Africa': { sk: 'stredná Afrika', cz: 'střední Afrika' },
    'Southern Africa': { sk: 'južná Afrika', cz: 'jižní Afrika' },
    'Northern America': { sk: 'Severná Amerika', cz: 'Severní Amerika' },
    Caribbean: { sk: 'Karibik', cz: 'Karibik' },
    'Central America': { sk: 'Stredná Amerika', cz: 'Střední Amerika' },
    'South America': { sk: 'Južná Amerika', cz: 'Jižní Amerika' },
    'Australia and New Zealand': { sk: 'Austrália a Nový Zéland', cz: 'Austrálie a Nový Zéland' },
    Melanesia: { sk: 'Melanézia', cz: 'Melanésie' },
    Micronesia: { sk: 'Mikronézia', cz: 'Mikronésie' },
    Polynesia: { sk: 'Polynézia', cz: 'Polynésie' },
  }
  const hit = SUB[sub]
  const subLabel = hit ? (lang === 'SK' ? hit.sk : hit.cz) : sub
  return `${cont} · ${subLabel}`
}

function historyRecord(c, lang) {
  const curated = HISTORY_RECORDS[c.cca2]
  if (!curated) {
    throw new Error(`Missing HISTORY_RECORDS for ${c.cca2} (${c.name?.common})`)
  }
  return lang === 'SK' ? curated.sk : curated.cz
}

function cultureOf(c) {
  const curated = COUNTRY_CULTURE[c.cca2]
  if (!curated) {
    throw new Error(`Missing COUNTRY_CULTURE for ${c.cca2} (${c.name?.common})`)
  }
  return curated
}

function build(c, lang) {
  const name = nameOf(c, lang)
  const cap = capitalOf(c, lang)
  const cont = c._cont
  const area = c.area || 0
  const pop = c._pop
  const cult = cultureOf(c)
  const loc = locationLine(c, lang)
  const neighbors = neighborNames(c, lang)
  const langs = langList(c, lang)

  const description =
    lang === 'SK'
      ? `${name} leží v oblasti ${loc}. Hlavné mesto je ${cap}. Nižšie nájdeš prehľad krajiny a zaujímavosti — jedlo, šport a kúsok histórie na čítanie nahlas.`
      : `${name} leží v oblasti ${loc}. Hlavní město je ${cap}. Níže najdeš přehled země a zajímavosti — jídlo, sport a kousek historie ke čtení nahlas.`

  const materials =
    lang === 'SK'
      ? [
          `Poloha: ${loc}${c.landlocked ? ' (vnútrozemská krajina)' : ''}`,
          `Hlavné mesto: ${cap}`,
          `Rozloha: ${fmtArea(area, 'SK')} · obyvatelia: ${fmtPop(pop, 'SK')}`,
          `Susedia: ${neighbors}`,
          `Jazyky: ${langs}`,
        ]
      : [
          `Poloha: ${loc}${c.landlocked ? ' (vnitrozemská země)' : ''}`,
          `Hlavní město: ${cap}`,
          `Rozloha: ${fmtArea(area, 'CZ')} · obyvatelé: ${fmtPop(pop, 'CZ')}`,
          `Sousedé: ${neighbors}`,
          `Jazyky: ${langs}`,
        ]

  const facts =
    lang === 'SK'
      ? [
          cult.fun.sk,
          `Obľúbené jedlo: ${cult.food.sk}`,
          `Obľúbený šport: ${cult.sport.sk}`,
          `História: ${cult.history.sk}`,
        ]
      : [
          cult.fun.cz,
          `Oblíbené jídlo: ${cult.food.cz}`,
          `Oblíbený sport: ${cult.sport.cz}`,
          `Historie: ${cult.history.cz}`,
        ]

  const notes =
    lang === 'SK'
      ? `Pri čítaní ukážte ${name} na mape. Čísla (obyvatelia, rozloha) sú približné a menia sa.`
      : `Při čtení ukažte ${name} na mapě. Čísla (obyvatelé, rozloha) jsou přibližná a mění se.`

  return {
    id: `country-${c.cca2.toLowerCase()}`,
    type: 'country',
    category: 'countries',
    stages: [],
    tags: [c._cont.tag],
    title: name,
    description,
    materials,
    steps: facts,
    record: historyRecord(c, lang),
    notes,
    duration: lang === 'SK' ? cont.sk : cont.cz,
  }
}

function toJs(item) {
  const mat = item.materials.map((m) => `'${esc(m)}'`).join(', ')
  const st = item.steps.map((m) => `'${esc(m)}'`).join(',\n      ')
  return `  {
    id: '${esc(item.id)}',
    type: 'country',
    category: 'countries',
    stages: [],
    tags: ${JSON.stringify(item.tags)},
    title: '${esc(item.title)}',
    description: '${esc(item.description)}',
    materials: [${mat}],
    steps: [
      ${st}
    ],
    record: '${esc(item.record)}',
    notes: '${esc(item.notes)}',
    duration: '${esc(item.duration)}',
  }`
}

function writeLang(lang) {
  const items = countries.map((c) => build(c, lang))
  // sort alpha in that language
  items.sort((a, b) => a.title.localeCompare(b.title, lang === 'SK' ? 'sk' : 'cs'))
  const name = lang === 'SK' ? 'countriesSK' : 'countriesCZ'
  const body = items.map(toJs).join(',\n')
  writeFileSync(
    join(ROOT, 'src', 'data', `${name}.js`),
    `/** World countries (${lang}) — about, facts, record */\nexport const ${name} = [\n${body},\n]\n`,
    'utf8',
  )
  console.log('wrote', name, items.length)
}

console.log('countries', countries.length)
writeLang('SK')
writeLang('CZ')
