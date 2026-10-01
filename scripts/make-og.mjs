/**
 * Genera public/og.png (1200x630) para las previews de link.
 *
 *   npm run og
 *
 * Nota: libvips no trae fonts en Windows, así que el texto se rasteriza a partir
 * de los glifos con opentype.js en vez de usar <text> de SVG.
 */
import { readFile, writeFile } from 'node:fs/promises';
import opentype from 'opentype.js';
import sharp from 'sharp';

const W = 1200;
const H = 630;

const DISPLAY = 'C:/Windows/Fonts/georgiab.ttf';
const BOLD = 'C:/Windows/Fonts/arialbd.ttf';
const REGULAR = 'C:/Windows/Fonts/arial.ttf';

const COLORS = {
  sand: '#FBF8F3',
  clay: '#A55A36',
  espresso: '#2E2419',
  mocha: '#6B4F3A',
  white: '#FFFFFF',
};

async function loadFont(file) {
  const buf = await readFile(file);
  return opentype.parse(buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength));
}

function text(font, value, x, y, size, fill, { anchor = 'start' } = {}) {
  const path = font.getPath(value, x, y, size, { features: { kern: true } });
  if (anchor === 'middle') {
    const w = font.getAdvanceWidth(value, size);
    return `<path d="${path.toPathData(2)}" fill="${fill}" transform="translate(${-w / 2} 0)"/>`;
  }
  return `<path d="${path.toPathData(2)}" fill="${fill}"/>`;
}

async function main() {
  const [display, bold, regular] = await Promise.all([
    loadFont(DISPLAY),
    loadFont(BOLD),
    loadFont(REGULAR),
  ]);

  const name = 'Valentino Villella';
  const role = 'Full Stack Developer Jr';
  const stack = 'React · TypeScript · Node.js · Docker · IA';
  const url = 'valentino-villella.netlify.app';

  const nameSize = 84;
  const nameWidth = display.getAdvanceWidth(name, nameSize);
  const urlSize = 26;
  const urlWidth = regular.getAdvanceWidth(url, urlSize);
  const pillW = urlWidth + 72;
  const pillX = 80;
  const pillY = 470;
  const pillH = 62;

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <defs>
    <radialGradient id="a" cx="18%" cy="12%" r="62%">
      <stop offset="0%" stop-color="#D4A574" stop-opacity="0.8"/>
      <stop offset="100%" stop-color="#D4A574" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="b" cx="88%" cy="72%" r="55%">
      <stop offset="0%" stop-color="#7C8471" stop-opacity="0.5"/>
      <stop offset="100%" stop-color="#7C8471" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="c" cx="52%" cy="108%" r="68%">
      <stop offset="0%" stop-color="#C08552" stop-opacity="0.55"/>
      <stop offset="100%" stop-color="#C08552" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="${COLORS.sand}"/>
  <rect width="${W}" height="${H}" fill="url(#a)"/>
  <rect width="${W}" height="${H}" fill="url(#b)"/>
  <rect width="${W}" height="${H}" fill="url(#c)"/>

  <rect x="80" y="150" width="72" height="6" rx="3" fill="${COLORS.clay}"/>

  ${text(display, name, 80, 282, nameSize, COLORS.espresso)}
  ${text(bold, role, 80, 352, 40, COLORS.clay)}
  ${text(regular, stack, 80, 414, 27, COLORS.mocha)}

  <rect x="${pillX}" y="${pillY}" width="${pillW}" height="${pillH}" rx="${pillH / 2}" fill="${COLORS.clay}"/>
  ${text(regular, url, pillX + pillW / 2, pillY + pillH / 2 + 9, urlSize, COLORS.white, { anchor: 'middle' })}

  <rect x="${W - 80 - nameWidth * 0.34}" y="${H - 96}" width="${nameWidth * 0.34}" height="6" rx="3" fill="${COLORS.espresso}" opacity="0.25"/>
</svg>`;

  const png = await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toBuffer();
  await writeFile('public/og.png', png);
  console.log(`public/og.png — ${(png.length / 1024).toFixed(0)} KB`);
}

await main();
