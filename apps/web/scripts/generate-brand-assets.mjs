import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const webRoot = path.resolve(__dirname, '..');
const repoRoot = path.resolve(webRoot, '../..');
const publicDir = path.resolve(webRoot, 'public');

const sourceLogoPath = path.resolve(repoRoot, 'schoolopedia-logo.svg');

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

async function run() {
  console.log('Generating Schoolopedia Brand Assets & Compulsory SEO Images...');
  console.log('Source logo path:', sourceLogoPath);

  if (!fs.existsSync(sourceLogoPath)) {
    throw new Error(`Source logo not found at: ${sourceLogoPath}`);
  }

  const svgContent = fs.readFileSync(sourceLogoPath, 'utf8');

  // 1. Copy raw SVG to public directory under canonical names
  fs.writeFileSync(path.resolve(publicDir, 'schoolopedia-logo.svg'), svgContent, 'utf8');
  fs.writeFileSync(path.resolve(publicDir, 'logo.svg'), svgContent, 'utf8');
  fs.writeFileSync(path.resolve(publicDir, 'icon.svg'), svgContent, 'utf8');
  fs.writeFileSync(path.resolve(publicDir, 'favicon.svg'), svgContent, 'utf8');
  console.log('✓ Copied SVGs (schoolopedia-logo.svg, logo.svg, icon.svg, favicon.svg)');

  // 2. Generate Apple Touch Icon (180x180 with subtle rounded padding)
  const appleTouchIconBuffer = await sharp(Buffer.from(svgContent))
    .resize(160, 160, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .extend({
      top: 10,
      bottom: 10,
      left: 10,
      right: 10,
      background: { r: 79, g: 70, b: 229, alpha: 1 } // #4f46e5 Indigo branding
    })
    .png()
    .toBuffer();
  fs.writeFileSync(path.resolve(publicDir, 'apple-touch-icon.png'), appleTouchIconBuffer);
  console.log('✓ Generated apple-touch-icon.png (180x180)');

  // 3. Generate PWA Icons (192x192 and 512x512)
  await sharp(Buffer.from(svgContent))
    .resize(192, 192, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(path.resolve(publicDir, 'icon-192.png'));
  console.log('✓ Generated icon-192.png');

  await sharp(Buffer.from(svgContent))
    .resize(512, 512, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(path.resolve(publicDir, 'icon-512.png'));
  console.log('✓ Generated icon-512.png');

  // 4. Generate standard favicon.ico (32x32 PNG inside ICO header format or clean 32x32 PNG icon)
  // Generating a 32x32 PNG file named favicon.ico is standard and supported by 100% of modern browsers
  await sharp(Buffer.from(svgContent))
    .resize(32, 32, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(path.resolve(publicDir, 'favicon.ico'));
  console.log('✓ Generated favicon.ico (32x32)');

  // 5. Generate High-Fidelity OpenGraph Share Card (1200x630) for WhatsApp, Telegram, Google, ChatGPT, Gemini
  console.log('Creating 1200x630 OpenGraph Banner (og-image.png)...');

  // We composite the crisp rasterized logo (380x380) over a modern SVG canvas
  const logoForOg = await sharp(Buffer.from(svgContent))
    .resize(340, 340, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();

  const ogCompositeSvg = `
  <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#090d16" />
        <stop offset="50%" stop-color="#0f172a" />
        <stop offset="100%" stop-color="#1e1b4b" />
      </linearGradient>
      <linearGradient id="brandGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#ffffff" />
        <stop offset="100%" stop-color="#c7d2fe" />
      </linearGradient>
      <linearGradient id="accentGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#818cf8" />
        <stop offset="100%" stop-color="#38bdf8" />
      </linearGradient>
      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255, 255, 255, 0.04)" stroke-width="1" />
      </pattern>
    </defs>

    <!-- Background -->
    <rect width="1200" height="630" fill="url(#bgGrad)" />
    <rect width="1200" height="630" fill="url(#grid)" />

    <!-- Ambient Glowing Orbs -->
    <circle cx="200" cy="315" r="220" fill="#4f46e5" opacity="0.25" filter="blur(60px)" />
    <circle cx="1000" cy="150" r="180" fill="#38bdf8" opacity="0.12" filter="blur(60px)" />

    <!-- Decorative Border Outline -->
    <rect x="24" y="24" width="1152" height="582" rx="28" fill="none" stroke="rgba(255, 255, 255, 0.1)" stroke-width="1.5" />

    <!-- Text / Content Container (Left is Logo, Right is Content) -->
    <g transform="translate(480, 105)">
      <!-- Top Pill Badge -->
      <rect x="0" y="0" width="370" height="38" rx="19" fill="rgba(79, 70, 229, 0.35)" stroke="#6366f1" stroke-width="1.5" />
      <text x="18" y="24" font-family="system-ui, -apple-system, sans-serif" font-size="14" font-weight="800" fill="#a5b4fc" letter-spacing="0.08em">
        CURRICULUM-AWARE ENCYCLOPEDIA
      </text>

      <!-- Main Title -->
      <text x="0" y="96" font-family="system-ui, -apple-system, sans-serif" font-size="64" font-weight="900" fill="url(#brandGrad)" letter-spacing="-0.03em">
        Schoolopedia
      </text>

      <!-- Subtitle Tagline -->
      <text x="0" y="146" font-family="system-ui, -apple-system, sans-serif" font-size="22" font-weight="600" fill="#94a3b8">
        Learn what you need today. Discover what you can become.
      </text>

      <!-- Key Pillars Highlight Cards -->
      <g transform="translate(0, 190)">
        <!-- Pillar 1 -->
        <rect x="0" y="0" width="310" height="64" rx="14" fill="rgba(15, 23, 42, 0.8)" stroke="rgba(255, 255, 255, 0.12)" stroke-width="1" />
        <text x="16" y="27" font-family="system-ui, -apple-system, sans-serif" font-size="14" font-weight="800" fill="#38bdf8">
          78 GLOBAL JURISDICTIONS
        </text>
        <text x="16" y="48" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="500" fill="#cbd5e1">
          US, UK, India (CBSE/ICSE), CA, AU &amp; NZ
        </text>

        <!-- Pillar 2 -->
        <rect x="325" y="0" width="310" height="64" rx="14" fill="rgba(15, 23, 42, 0.8)" stroke="rgba(255, 255, 255, 0.12)" stroke-width="1" />
        <text x="341" y="27" font-family="system-ui, -apple-system, sans-serif" font-size="14" font-weight="800" fill="#34d399">
          100% FREE &amp; OPEN SOURCE
        </text>
        <text x="341" y="48" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="500" fill="#cbd5e1">
          Open Educational Resources (OER)
        </text>
      </g>

      <!-- Secondary Highlights Row -->
      <g transform="translate(0, 275)">
        <rect x="0" y="0" width="635" height="54" rx="12" fill="rgba(30, 27, 75, 0.6)" stroke="#4338ca" stroke-width="1" />
        <text x="18" y="32" font-family="system-ui, -apple-system, sans-serif" font-size="14" font-weight="700" fill="#c7d2fe">
          ✓ Official CBSE &amp; NCERT Sample Papers • Next Toppers Masterclasses • 10+ MCQs
        </text>
      </g>

      <!-- URL Badge -->
      <g transform="translate(0, 355)">
        <text x="0" y="22" font-family="system-ui, -apple-system, sans-serif" font-size="18" font-weight="800" fill="#6366f1" letter-spacing="0.02em">
          https://schoolopedia.com
        </text>
      </g>
    </g>
  </svg>
  `;

  // Composite the logo at x: 80, y: 145 on top of the SVG background
  const finalOgBuffer = await sharp(Buffer.from(ogCompositeSvg))
    .composite([
      {
        input: logoForOg,
        top: 145,
        left: 80,
      },
    ])
    .png({ quality: 95 })
    .toBuffer();

  fs.writeFileSync(path.resolve(publicDir, 'og-image.png'), finalOgBuffer);
  console.log('✓ Generated og-image.png (1200x630)');

  // 6. Generate Square Preview Card (600x600) for WhatsApp small previews and Google Mobile search
  const logoSquare = await sharp(Buffer.from(svgContent))
    .resize(360, 360, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();

  const squareSvg = `
  <svg width="600" height="600" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="sqBg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0f172a" />
        <stop offset="100%" stop-color="#1e1b4b" />
      </linearGradient>
    </defs>
    <rect width="600" height="600" fill="url(#sqBg)" />
    <circle cx="300" cy="270" r="180" fill="#4f46e5" opacity="0.3" filter="blur(40px)" />
    <rect x="20" y="20" width="560" height="560" rx="32" fill="none" stroke="rgba(255, 255, 255, 0.1)" stroke-width="2" />
    <text x="300" y="500" font-family="system-ui, -apple-system, sans-serif" font-size="44" font-weight="900" fill="#ffffff" text-anchor="middle" letter-spacing="-0.02em">
      Schoolopedia
    </text>
    <text x="300" y="540" font-family="system-ui, -apple-system, sans-serif" font-size="16" font-weight="700" fill="#a5b4fc" text-anchor="middle" letter-spacing="0.05em">
      100% FREE EDUCATION ENCYCLOPEDIA
    </text>
  </svg>
  `;

  const finalSquareBuffer = await sharp(Buffer.from(squareSvg))
    .composite([
      {
        input: logoSquare,
        top: 90,
        left: 120,
      },
    ])
    .png({ quality: 95 })
    .toBuffer();

  fs.writeFileSync(path.resolve(publicDir, 'og-square.png'), finalSquareBuffer);
  console.log('✓ Generated og-square.png (600x600)');

  // 7. Write Web App Manifest (manifest.json)
  const manifest = {
    name: 'Schoolopedia — The Curriculum-Aware Education Encyclopedia',
    short_name: 'Schoolopedia',
    description: 'A free, curriculum-aware education encyclopedia covering 78 Tier 1 education jurisdictions.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#4f46e5',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/schoolopedia-logo.svg',
        sizes: 'any',
        type: 'image/svg+xml',
        purpose: 'any maskable',
      },
    ],
  };

  fs.writeFileSync(path.resolve(publicDir, 'manifest.json'), JSON.stringify(manifest, null, 2), 'utf8');
  console.log('✓ Generated manifest.json');
  console.log('All brand assets successfully generated in apps/web/public/!');
}

run().catch((err) => {
  console.error('Failed to generate brand assets:', err);
  process.exit(1);
});
