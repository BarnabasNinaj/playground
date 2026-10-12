import { writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const FILE = join(dirname(fileURLToPath(import.meta.url)), '..', 'src', 'data', 'songs.js')
const mod = await import(`file://${FILE.replace(/\\/g, '/')}?t=${Date.now()}`)
const songs = mod.songs.filter((s) => s.lang !== 'EN')

const PLACE = new Set(['car', 'indoor', 'outdoors'])

function escTemplate(s) {
  return s.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${')
}
function escStr(s) {
  return s.replace(/\\/g, '\\\\').replace(/'/g, "\\'")
}

const body = songs
  .map((s) => {
    const tags = (s.tags || []).filter((t) => !PLACE.has(t))
    return `  {
    id: '${escStr(s.id)}',
    type: 'song',
    category: 'songs',
    lang: '${s.lang}',
    stages: ${JSON.stringify(s.stages)},
    tags: ${JSON.stringify(tags)},
    title: '${escStr(s.title)}',
    description: '${escStr(s.description || '')}',
    materials: [],
    steps: [],
    lyrics: \`${escTemplate(s.lyrics)}\`,
    notes: '${escStr(s.notes || '')}',
  }`
  })
  .join(',\n')

const file = `/** Shared children's songs — lang: SK | CZ (from lyrics) */
const PLACE = new Set(['car', 'indoor', 'outdoors'])

function cleanSongTags(items) {
  return items.map((item) => ({
    ...item,
    tags: (item.tags || []).filter((t) => !PLACE.has(t)),
  }))
}

const rawSongs = [
${body},
]

export const songs = cleanSongTags(rawSongs)
`

writeFileSync(FILE, file, 'utf8')
console.log('kept', songs.length, 'SK', songs.filter((s) => s.lang === 'SK').length, 'CZ', songs.filter((s) => s.lang === 'CZ').length)
