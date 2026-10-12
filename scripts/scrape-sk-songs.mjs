/**
 * Scrape Slovak children's songs from hudba.zoznam.sk
 * Usage: node scripts/scrape-sk-songs.mjs
 */
import { writeFileSync, mkdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const OUT = join(ROOT, 'src', 'data', '_scraped_sk_songs.json')
const BASE = 'https://hudba.zoznam.sk'

const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

async function fetchHtml(url) {
  const res = await fetch(url, {
    headers: {
      'User-Agent':
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
      Accept: 'text/html,application/xhtml+xml',
      'Accept-Language': 'sk-SK,sk;q=0.9,en;q=0.8',
    },
  })
  if (!res.ok) throw new Error(`${res.status} ${url}`)
  return res.text()
}

function decodeEntities(s) {
  return s
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)))
    .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCharCode(parseInt(n, 16)))
}

function stripTags(html) {
  return decodeEntities(
    html
      .replace(/<br\s*\/?>/gi, '\n')
      .replace(/<\/p>/gi, '\n')
      .replace(/<\/div>/gi, '\n')
      .replace(/<[^>]+>/g, '')
      .replace(/\r/g, ''),
  )
    .replace(/[ \t]+\n/g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim()
}

function extractListingLinks(html) {
  const links = []
  const re = /href="(\/akordy\/piesen\/[^"#]+)"[^>]*>([^<]+)</gi
  let m
  while ((m = re.exec(html))) {
    const href = BASE + m[1].replace(/\/$/, '') + '/'
    const title = decodeEntities(m[2]).trim()
    if (!title || title.length < 2) continue
    links.push({ href, title })
  }
  const seen = new Set()
  return links.filter((l) => {
    if (seen.has(l.href)) return false
    seen.add(l.href)
    return true
  })
}

function extractLyrics(html) {
  const m =
    html.match(
      /<div[^>]*class="[^"]*song-content[^"]*print[^"]*"[^>]*>([\s\S]*?)<\/div>/i,
    ) ||
    html.match(
      /<div[^>]*class="[^"]*song-content[^"]*"[^>]*>([\s\S]*?)<\/div>/i,
    )
  if (!m) return null
  let text = stripTags(m[1])
  // Drop chord-only lines: C  Am  G etc.
  text = text
    .split('\n')
    .filter((line) => {
      const t = line.trim()
      if (!t) return true
      if (/^(Transpozícia|Gitara|Vytlačiť)/i.test(t)) return false
      // line made only of chord tokens
      if (/^([A-H][#b]?(?:m|maj|min|dim|aug|sus\d?|add\d?|\d|\/[A-H][#b]?)?\s*)+$/i.test(t))
        return false
      return true
    })
    .join('\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim()
  return text.length > 20 ? text : null
}

function extractTitle(html, fallback) {
  const m = html.match(/<h1[^>]*>([^<]+)<\/h1>/i)
  return m ? decodeEntities(m[1]).trim() : fallback
}

async function collectAllLinks() {
  const all = []
  for (let page = 1; page <= 15; page++) {
    const url =
      page === 1
        ? `${BASE}/akordy/detske-pesnicky/`
        : `${BASE}/akordy/detske-pesnicky/?stranka=${page}`
    console.log('listing', url)
    let html
    try {
      html = await fetchHtml(url)
    } catch (e) {
      console.warn('fail listing', page, e.message)
      break
    }
    const links = extractListingLinks(html)
    console.log('  found', links.length)
    if (links.length === 0) break
    all.push(...links)
    await sleep(300)
  }
  const seen = new Set()
  return all.filter((l) => {
    if (seen.has(l.href)) return false
    seen.add(l.href)
    return true
  })
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

async function main() {
  const links = await collectAllLinks()
  console.log('total links', links.length)
  const songs = []
  for (let i = 0; i < links.length; i++) {
    const { href, title: listTitle } = links[i]
    process.stdout.write(`[${i + 1}/${links.length}] ${listTitle}\n`)
    try {
      const html = await fetchHtml(href)
      const title = extractTitle(html, listTitle)
      const lyrics = extractLyrics(html)
      if (!lyrics) {
        console.warn('  NO LYRICS')
        continue
      }
      songs.push({
        id: `song-sk-${slugify(title)}-${i}`,
        title,
        href,
        lyrics,
      })
    } catch (e) {
      console.warn('  ERR', e.message)
    }
    await sleep(250)
  }
  mkdirSync(dirname(OUT), { recursive: true })
  writeFileSync(OUT, JSON.stringify(songs, null, 2), 'utf8')
  console.log('wrote', OUT, 'songs=', songs.length)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
