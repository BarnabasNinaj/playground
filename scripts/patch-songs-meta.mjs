/**
 * Songs: description = first 2 lyric lines; drop duration; keep all stages for filtering.
 */
import { readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const FILE = join(ROOT, 'src', 'data', 'songs.js')

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

// Evaluate rawSongs by extracting array text is fragile — import via dynamic eval of module
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

const body = songs
  .map((s) => {
    const desc = firstTwoLines(s.lyrics)
    const tags = (s.tags || []).filter((t) => t !== 'indoor')
    return `  {
    id: '${escStr(s.id)}',
    type: 'song',
    category: 'songs',
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

writeFileSync(FILE, file, 'utf8')
console.log('patched', songs.length, 'songs')
