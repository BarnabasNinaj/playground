import { readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { tipsCatalog } from './tips-catalog.mjs'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')

function esc(s) {
  return String(s ?? '').replace(/\\/g, '\\\\').replace(/'/g, "\\'")
}

function tipToJs(t, lang) {
  const title = lang === 'SK' ? t.titleSK : t.titleCZ
  const description = lang === 'SK' ? t.descriptionSK : t.descriptionCZ
  const materials = lang === 'SK' ? t.materialsSK : t.materialsCZ
  const steps = lang === 'SK' ? t.stepsSK : t.stepsCZ
  const notes = lang === 'SK' ? t.notesSK : t.notesCZ
  const mat = (materials || []).map((m) => `'${esc(m)}'`).join(', ')
  const st = (steps || []).map((m) => `'${esc(m)}'`).join(',\n      ')
  return `  {
    id: '${esc(t.id)}',
    type: 'tip',
    category: 'practices',
    stages: [],
    tags: ${JSON.stringify(t.tags || ['indoor'])},
    title: '${esc(title)}',
    description: '${esc(description)}',
    materials: [${mat}],
    steps: [
      ${st}
    ],
    notes: '${esc(notes)}',
    duration: '${esc(t.duration || 'priebežne')}',
  }`
}

function writeLang(lang, tips) {
  const body = tips.map((t) => tipToJs(t, lang)).join(',\n')
  const name = lang === 'SK' ? 'tipsSK' : 'tipsCZ'
  const file = `/** Montessori tips (${lang}) — prepared environment, practical life, observation, limits */
export const ${name} = [
${body},
]
`
  writeFileSync(join(ROOT, 'src', 'data', `${name}.js`), file, 'utf8')
  console.log('wrote', name, tips.length)
}

if (tipsCatalog.length < 50) throw new Error(`need ≥50 tips, got ${tipsCatalog.length}`)
writeLang('SK', tipsCatalog)
writeLang('CZ', tipsCatalog)

for (const [file, importLine, spread] of [
  ['contentSK.js', "import { tipsSK } from './tipsSK.js'\n", '  ...tipsSK,'],
  ['contentCZ.js', "import { tipsCZ } from './tipsCZ.js'\n", '  ...tipsCZ,'],
]) {
  const path = join(ROOT, 'src', 'data', file)
  let src = readFileSync(path, 'utf8')
  const re =
    /\n  \{\n    id: 'tip-[^']+',\n    type: 'tip',[\s\S]*?\n    duration: '[^']*',\n  \},?/g
  const n = (src.match(re) || []).length
  src = src.replace(re, '')
  src = src.replace(/\n  \/\/ ——— Montessori Best Practices \(Tips\) ———\n/g, '\n')
  // clean double blank lines from removals
  src = src.replace(/\n{3,}/g, '\n\n')
  if (!src.includes("from './tips")) {
    src = src.replace(
      /(import \{ activitiesPlace\w+ \} from '\.\/activitiesPlace\w+\.js'\n)/,
      `$1${importLine}`,
    )
  }
  if (!src.includes(spread.trim())) {
    src = src.replace(
      /(export const content\w+ = withPlaceTags\(\[\n  \.\.\.baseContent\w+,)/,
      `$1\n${spread}`,
    )
  }
  writeFileSync(path, src, 'utf8')
  console.log(file, 'removed tips', n)
}
