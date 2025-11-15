// scripts/convert-one.mjs
import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

/**
 * Usage:
 *   node scripts/convert-one.mjs /absolute/path/to/image.png
 * Example:
 *   node scripts/convert-one.mjs /home/giuseppe/saltaire-dogs/public/saltaire-dog-walk-salts-mill-canal-golden-hour-hero.png
 */

const inputPath = process.argv[2];
if (!inputPath) {
  console.error("❌ Please provide an input image path.");
  process.exit(1);
}

const exists = await fs
  .access(inputPath)
  .then(() => true)
  .catch(() => false);

if (!exists) {
  console.error(`❌ File not found: ${inputPath}`);
  process.exit(1);
}

const { dir, name } = path.parse(inputPath);
const base = path.join(dir, name); // without extension

// Choose the widths you want for responsive variants.
// You can add/remove sizes as needed.
const widths = [2560, 1920, 1280];

const src = sharp(inputPath).rotate(); // respect EXIF if present

// 1) Create master AVIF & WebP at original size
await src
  .clone()
  .avif({ quality: 45, speed: 4 })
  .toFile(`${base}.avif`);

await src
  .clone()
  .webp({ quality: 72 })
  .toFile(`${base}.webp`);

// 2) Create responsive variants for both formats
for (const w of widths) {
  await src
    .clone()
    .resize({ width: w, withoutEnlargement: true })
    .avif({ quality: 45, speed: 4 })
    .toFile(`${base}-${w}w.avif`);

  await src
    .clone()
    .resize({ width: w, withoutEnlargement: true })
    .webp({ quality: 72 })
    .toFile(`${base}-${w}w.webp`);
}

// 3) Tiny blur placeholder (Data URL you can paste into next/image)
const blurBuf = await src
  .clone()
  .resize({ width: 24 }) // tiny
  .jpeg({ quality: 40 })
  .toBuffer();

const dataUrl = `data:image/jpeg;base64,${blurBuf.toString("base64")}`;
await fs.writeFile(`${base}-blur.txt`, dataUrl, "utf8");

console.log("✅ Done!");
console.log(`AVIF:   ${base}.avif and -{${widths.join(",")}}w.avif`);
console.log(`WebP:   ${base}.webp and -{${widths.join(",")}}w.webp`);
console.log(`Blur:   ${base}-blur.txt  (paste into placeholder="blur" blurDataURL="...")`);
