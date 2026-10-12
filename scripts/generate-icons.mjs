/**
 * Generate PNG PWA icons (Android/iOS install requires PNG, not SVG).
 * Inspired by consifit/scripts/generate-icons.mjs
 */
import { mkdirSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { Resvg } from '@resvg/resvg-js'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')

function markSvg(scale = 1) {
  const g =
    scale === 1
      ? ''
      : ` transform="translate(256 256) scale(${scale}) translate(-256 -256)"`
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="none">
  <rect width="512" height="512" fill="#1f3f36"/>
  <g${g}>
    <circle cx="256" cy="190" r="72" fill="#c4784a"/>
    <path d="M128 396c22-86 86-128 128-128s106 42 128 128" stroke="#fffcf8" stroke-width="24" stroke-linecap="round"/>
    <circle cx="188" cy="180" r="10" fill="#1f3f36"/>
    <circle cx="324" cy="180" r="10" fill="#1f3f36"/>
    <path d="M224 218c16 22 48 22 64 0" stroke="#1f3f36" stroke-width="8" stroke-linecap="round"/>
  </g>
</svg>`
}

const anySvg = markSvg(1)
const maskableSvg = markSvg(0.66)

function render(svgSource, size) {
  const resvg = new Resvg(svgSource, {
    fitTo: { mode: 'width', value: size },
  })
  return resvg.render().asPng()
}

mkdirSync(join(root, 'public', 'icons'), { recursive: true })
writeFileSync(join(root, 'public', 'favicon.svg'), anySvg)

const jobs = [
  [join(root, 'public', 'icons', 'icon-192.png'), anySvg, 192],
  [join(root, 'public', 'icons', 'icon-512.png'), anySvg, 512],
  [join(root, 'public', 'icons', 'icon-192-maskable.png'), maskableSvg, 192],
  [join(root, 'public', 'icons', 'icon-512-maskable.png'), maskableSvg, 512],
  [join(root, 'public', 'apple-touch-icon.png'), anySvg, 180],
]

for (const [path, source, size] of jobs) {
  writeFileSync(path, render(source, size))
  console.log(`wrote ${path} (${size}x${size})`)
}
