/**
 * Convierte los assets a WebP y elimina el original.
 *   npm run optimize          (omite los ya convertidos)
 *   npm run optimize -- --force   (regenera todos)
 */
import { access, readdir, stat, unlink } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import sharp from 'sharp';

const ROOT = path.resolve('src/assets');
const FORCE = process.argv.includes('--force');
const IMAGE_RE = /\.(png|jpe?g)$/i;

const TARGETS = [
  { dir: 'photo', width: 900, quality: 84 },
  { dir: 'projects', width: 1280, quality: 78 },
];

async function exists(file) {
  try {
    await access(file);
    return true;
  } catch {
    return false;
  }
}

async function convert(filePath, { width, quality }) {
  const out = filePath.replace(IMAGE_RE, '.webp');
  if (out === filePath) return out;

  if (!FORCE && (await exists(out))) return out;

  await sharp(filePath)
    .resize({ width, height: width, fit: 'inside', withoutEnlargement: true })
    .webp({ quality, effort: 6 })
    .toFile(out);

  await unlink(filePath);
  return out;
}

async function run() {
  for (const target of TARGETS) {
    const dir = path.join(ROOT, target.dir);

    let entries;
    try {
      entries = await readdir(dir);
    } catch {
      console.warn(`  ${target.dir}: carpeta inexistente, la salto`);
      continue;
    }

    const images = entries.filter((name) => IMAGE_RE.test(name));
    if (images.length === 0) {
      console.log(`  ${target.dir}: nada que convertir`);
      continue;
    }

    for (const name of images) {
      const file = path.join(dir, name);
      try {
        const out = await convert(file, target);
        const { size } = await stat(out);
        console.log(`  ${target.dir}/${path.basename(out)}  ${(size / 1024).toFixed(0)} KB`);
      } catch (error) {
        console.error(`  ERROR ${target.dir}/${name}:`, error.message);
        process.exitCode = 1;
      }
    }
  }
}

await run();
