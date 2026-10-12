/**
 * Remove type:'song' entries from contentCZ.js baseContentCZ.
 */
import { readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const FILE = join(ROOT, 'src', 'data', 'contentCZ.js')

let src = readFileSync(FILE, 'utf8')
const re =
  /\n  \{\n    id: 'song-[^']+',\n    type: 'song',[\s\S]*?\n    duration: '[^']*',\n  \},/g
const before = (src.match(re) || []).length
src = src.replace(re, '')
src = src.replace(/\n  \/\/ ——— Songs ———\n/g, '\n')
src = src.replace(
  /import \{ songsExtraCZ \} from '\.\/songsExtraCZ\.js'\n/,
  '',
)
src = src.replace(/\n  \.\.\.songsExtraCZ,/, '')
src = src.replace(
  /\*\* Czech content — Montessori activities, songs, tips \*\*/,
  '** Czech content — Montessori activities, tips **',
)
writeFileSync(FILE, src, 'utf8')
console.log('removed song blocks:', before)
