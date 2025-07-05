const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const sizes = [16, 32, 48, 64, 128, 192, 512];

async function generateFavicons() {
  const svgBuffer = fs.readFileSync(path.join(__dirname, "../public/favicon.svg"));

  // Generate regular favicon.png
  await sharp(svgBuffer).resize(32, 32).png().toFile(path.join(__dirname, "../public/favicon.png"));

  // Generate apple-touch-icon.png
  await sharp(svgBuffer).resize(180, 180).png().toFile(path.join(__dirname, "../public/apple-touch-icon.png"));

  // Generate favicon-{size}.png for different sizes
  for (const size of sizes) {
    await sharp(svgBuffer)
      .resize(size, size)
      .png()
      .toFile(path.join(__dirname, `../public/favicon-${size}.png`));
  }
}

generateFavicons().catch(console.error);
