/**
 * Create shared songs.js from songsExtraSK.js and wire content files.
 */
import { readFileSync, writeFileSync, unlinkSync, existsSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const SK = join(ROOT, 'src', 'data', 'songsExtraSK.js')
const OUT = join(ROOT, 'src', 'data', 'songs.js')
const CONTENT_SK = join(ROOT, 'src', 'data', 'contentSK.js')
const CONTENT_CZ = join(ROOT, 'src', 'data', 'contentCZ.js')
const LANG = join(ROOT, 'src', 'context', 'LanguageContext.jsx')

let src = readFileSync(SK, 'utf8')
src = src.replace(
  /^\/\*\*[\s\S]*?\*\/\s*export const songsExtraSK = \[/,
  `/** Shared children's songs (SK/CZ mixed catalog) — lyrics from hudba.zoznam.sk */
function withPlaceTags(items) {
  return items.map((item) => {
    const tags = new Set(item.tags || [])
    if (tags.has('car') || tags.has('outdoors')) tags.delete('indoor')
    else tags.add('indoor')
    return { ...item, tags: [...tags] }
  })
}

const rawSongs = [`,
)
if (!src.trimEnd().endsWith(']')) {
  throw new Error('unexpected songsExtraSK ending')
}
src = src.replace(/\n\]\s*$/, '\n]\n\nexport const songs = withPlaceTags(rawSongs)\n')
writeFileSync(OUT, src, 'utf8')
console.log('wrote', OUT)

// contentSK: drop songsExtraSK
let sk = readFileSync(CONTENT_SK, 'utf8')
sk = sk.replace(/import \{ songsExtraSK \} from '\.\/songsExtraSK\.js'\n/, '')
sk = sk.replace(/\n  \.\.\.songsExtraSK,/, '')
sk = sk.replace(
  /\*\* Slovak content — Montessori activities, songs, tips \*\*/,
  '** Slovak content — Montessori activities, tips **',
)
writeFileSync(CONTENT_SK, sk, 'utf8')
console.log('updated contentSK')

// contentCZ: drop songsExtraCZ import + spread (song objects stripped separately)
let cz = readFileSync(CONTENT_CZ, 'utf8')
cz = cz.replace(/import \{ songsExtraCZ \} from '\.\/songsExtraCZ\.js'\n/, '')
cz = cz.replace(/\n  \.\.\.songsExtraCZ,/, '')
cz = cz.replace(
  /\*\* Czech content — Montessori activities, songs, tips \*\*/,
  '** Czech content — Montessori activities, tips **',
)
writeFileSync(CONTENT_CZ, cz, 'utf8')
console.log('updated contentCZ')

// LanguageContext: always append shared songs
let lang = readFileSync(LANG, 'utf8')
if (!lang.includes("from '../data/songs'")) {
  lang = lang.replace(
    "import { contentCZ } from '../data/contentCZ'\n",
    "import { contentCZ } from '../data/contentCZ'\nimport { songs } from '../data/songs'\n",
  )
}
lang = lang.replace(
  /content: language === 'CZ' \? contentCZ : contentSK,/,
  `content: [
        ...(language === 'CZ' ? contentCZ : contentSK),
        ...songs,
      ],`,
)
writeFileSync(LANG, lang, 'utf8')
console.log('updated LanguageContext')

for (const f of [
  join(ROOT, 'src', 'data', 'songsExtraSK.js'),
  join(ROOT, 'src', 'data', 'songsExtraCZ.js'),
]) {
  if (existsSync(f)) {
    unlinkSync(f)
    console.log('deleted', f)
  }
}
