const sharp = require('c:\\Users\\user\\Downloads\\web\\Bete Abrham Portfolio\\node_modules\\sharp');
const path = require('path');
const fs = require('fs');

function createIco(images) {
  const count = images.length;
  const headerSize = 6;
  const entrySize = 16;
  let currentOffset = headerSize + count * entrySize;

  const headerBuf = Buffer.alloc(headerSize);
  headerBuf.writeUInt16LE(0, 0); // reserved
  headerBuf.writeUInt16LE(1, 2); // icon type
  headerBuf.writeUInt16LE(count, 4); // count

  const entries = [];
  for (const img of images) {
    const entryBuf = Buffer.alloc(entrySize);
    entryBuf.writeUInt8(img.width >= 256 ? 0 : img.width, 0);
    entryBuf.writeUInt8(img.height >= 256 ? 0 : img.height, 1);
    entryBuf.writeUInt8(0, 2); // colors
    entryBuf.writeUInt8(0, 3); // reserved
    entryBuf.writeUInt16LE(1, 4); // planes
    entryBuf.writeUInt16LE(32, 6); // bpp
    entryBuf.writeUInt32LE(img.buffer.length, 8); // size
    entryBuf.writeUInt32LE(currentOffset, 12); // offset
    entries.push(entryBuf);
    currentOffset += img.buffer.length;
  }

  return Buffer.concat([headerBuf, ...entries, ...images.map(img => img.buffer)]);
}

async function generateAllIcons() {
  const projectRoot = 'c:\\Users\\user\\Downloads\\web\\Bete Abrham Portfolio';
  const publicDir = path.join(projectRoot, 'public');
  const appDir = path.join(projectRoot, 'app');
  const srcImage = 'C:\\Users\\user\\.gemini\\antigravity-ide\\brain\\fa1ff29b-3ba7-4367-9808-8be5a90d3b99\\.user_uploaded\\media_1789429945061.png';

  console.log('Extracting B monogram from source image...');
  // Extract B mark exactly
  const bExtract = await sharp(srcImage)
    .extract({ left: 251, top: 175, width: 238, height: 304 })
    .toBuffer();

  const { data, info } = await sharp(bExtract).raw().toBuffer({ resolveWithObject: true });
  const { width: bw, height: bh } = info;

  // Build clean alpha-isolated black logo
  const blackLogoBuf = Buffer.alloc(bw * bh * 4);
  for (let i = 0; i < bw * bh; i++) {
    const r = data[i * 4];
    const g = data[i * 4 + 1];
    const b = data[i * 4 + 2];
    const brightness = 0.299 * r + 0.587 * g + 0.114 * b;
    let a = Math.max(0, Math.min(255, (247 - brightness) / (247 - 35) * 255));
    a = Math.round(a);

    blackLogoBuf[i * 4] = 16;
    blackLogoBuf[i * 4 + 1] = 16;
    blackLogoBuf[i * 4 + 2] = 18;
    blackLogoBuf[i * 4 + 3] = a;
  }

  const blackLogoPng = await sharp(blackLogoBuf, { raw: { width: bw, height: bh, channels: 4 } }).png().toBuffer();

  // 1024x1024 Master Circular Icon
  const MASTER_SIZE = 1024;
  const CX = MASTER_SIZE / 2;
  const CY = MASTER_SIZE / 2;
  const RADIUS = 504; // 8px transparent margin from bounds

  // Logo height at 1024: 670px
  const targetH = 670;
  const targetW = Math.round(bw * (targetH / bh));

  const scaledLogo = await sharp(blackLogoPng)
    .resize(targetW, targetH, { kernel: 'lanczos3' })
    .toBuffer();

  const left = Math.round(CX - targetW / 2);
  const top = Math.round(CY - targetH / 2);

  // High-res SVG circular background with subtle perimeter border
  const circleSvg = Buffer.from(`
    <svg width="${MASTER_SIZE}" height="${MASTER_SIZE}" viewBox="0 0 ${MASTER_SIZE} ${MASTER_SIZE}" xmlns="http://www.w3.org/2000/svg">
      <circle cx="${CX}" cy="${CY}" r="${RADIUS}" fill="#ffffff" stroke="#e4e4e7" stroke-width="12"/>
    </svg>
  `);

  const masterCircleBuf = await sharp(circleSvg)
    .composite([{ input: scaledLogo, left, top }])
    .png()
    .toBuffer();

  console.log('Writing master and sized PNG icons...');
  // 1. icon-master.png (1024x1024)
  await sharp(masterCircleBuf).toFile(path.join(publicDir, 'icon-master.png'));

  // 2. icon-512.png (512x512)
  const icon512Buf = await sharp(masterCircleBuf).resize(512, 512, { kernel: 'lanczos3' }).png().toBuffer();
  await sharp(icon512Buf).toFile(path.join(publicDir, 'icon-512.png'));

  // 3. icon-192.png (192x192)
  const icon192Buf = await sharp(masterCircleBuf).resize(192, 192, { kernel: 'lanczos3' }).png().toBuffer();
  await sharp(icon192Buf).toFile(path.join(publicDir, 'icon-192.png'));

  // 4. apple-touch-icon.png (180x180)
  const appleIconBuf = await sharp(masterCircleBuf).resize(180, 180, { kernel: 'lanczos3' }).png().toBuffer();
  await sharp(appleIconBuf).toFile(path.join(publicDir, 'apple-touch-icon.png'));
  await sharp(appleIconBuf).toFile(path.join(appDir, 'apple-icon.png'));

  // 5. icon.png (32x32)
  const icon32Buf = await sharp(masterCircleBuf).resize(32, 32, { kernel: 'lanczos3' }).png().toBuffer();
  await sharp(icon32Buf).toFile(path.join(publicDir, 'icon.png'));
  await sharp(icon32Buf).toFile(path.join(appDir, 'icon.png'));

  // 6. 16x16 and 48x48 for favicon.ico
  const icon16Buf = await sharp(masterCircleBuf).resize(16, 16, { kernel: 'lanczos3' }).png().toBuffer();
  const icon48Buf = await sharp(masterCircleBuf).resize(48, 48, { kernel: 'lanczos3' }).png().toBuffer();

  // Create favicon.ico with 16, 32, 48 resolutions
  const icoBuf = createIco([
    { width: 16, height: 16, buffer: icon16Buf },
    { width: 32, height: 32, buffer: icon32Buf },
    { width: 48, height: 48, buffer: icon48Buf }
  ]);

  await fs.promises.writeFile(path.join(publicDir, 'favicon.ico'), icoBuf);
  await fs.promises.writeFile(path.join(appDir, 'favicon.ico'), icoBuf);
  console.log('favicon.ico generated in public/ and app/');

  // 7. Generate icon.svg for modern browsers
  const b64Logo = scaledLogo.toString('base64');
  const svgContent = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="256" cy="256" r="252" fill="#ffffff" stroke="#e4e4e7" stroke-width="6"/>
  <image href="data:image/png;base64,${b64Logo}" x="${Math.round(left / 2)}" y="${Math.round(top / 2)}" width="${Math.round(targetW / 2)}" height="${Math.round(targetH / 2)}" />
</svg>`;

  await fs.promises.writeFile(path.join(publicDir, 'icon.svg'), svgContent, 'utf8');
  console.log('icon.svg generated in public/');

  console.log('ALL FAVICONS SUCCESSFULLY GENERATED!');
}

generateAllIcons().catch(err => {
  console.error('Failed to generate icons:', err);
  process.exit(1);
});
