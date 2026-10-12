import { readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const FILE = join(dirname(fileURLToPath(import.meta.url)), '..', 'src', 'data', 'songs.js')
let src = readFileSync(FILE, 'utf8')

src = src.replace(
  /function withPlaceTags\(items\) \{[\s\S]*?\n\}\n\nconst rawSongs = \[/,
  `const PLACE = new Set(['car', 'indoor', 'outdoors'])

function cleanSongTags(items) {
  return items.map((item) => ({
    ...item,
    tags: (item.tags || []).filter((t) => !PLACE.has(t)),
  }))
}

const rawSongs = [`,
)

src = src.replace(
  'export const songs = withPlaceTags(rawSongs)',
  'export const songs = cleanSongTags(rawSongs)',
)

src = src.replace(/tags: \[([^\]]*)\]/g, (_m, inner) => {
  const tags = inner.match(/"[^"]+"/g) || []
  const kept = tags.filter((t) => !['"car"', '"indoor"', '"outdoors"'].includes(t))
  return `tags: [${kept.join(',')}]`
})

writeFileSync(FILE, src, 'utf8')
console.log('stripped place tags from songs.js')
