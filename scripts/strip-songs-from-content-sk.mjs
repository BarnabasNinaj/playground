/**
 * Remove fabricated type:'song' entries from contentSK.js baseContentSK.
 * songsExtraSK becomes the sole SK song source.
 */
import { readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const FILE = join(ROOT, 'src', 'data', 'contentSK.js')

let src = readFileSync(FILE, 'utf8')

// Remove each object that starts with id: 'song-...' inside baseContentSK
// Match from `{` that has `id: 'song-` through the closing `},` before next item.
const re =
  /\n  \{\n    id: 'song-[^']+',\n    type: 'song',[\s\S]*?\n    duration: '[^']*',\n  \},/g

const before = (src.match(re) || []).length
src = src.replace(re, '')
// Clean leftover song section comments
src = src.replace(/\n  \/\/ ——— Songs ———\n/g, '\n')

writeFileSync(FILE, src, 'utf8')
console.log('removed song blocks:', before)
