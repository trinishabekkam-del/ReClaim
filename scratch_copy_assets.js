import fs from 'fs';
import path from 'path';

const brainDir = `C:\\Users\\trini\\.gemini\\antigravity\\brain\\d14e29ec-ff75-4a90-a724-37a93ee0c8ce`;
const publicImagesDir = path.join(process.cwd(), 'public', 'images');

if (!fs.existsSync(publicImagesDir)) {
  fs.mkdirSync(publicImagesDir, { recursive: true });
}

const copyMap = [
  { srcName: 'black_keychain_1791658624294.png', destName: 'black-keychain.jpg' },
  { srcName: 'blue_water_bottle_1791658656773.png', destName: 'blue-water-bottle.jpg' },
  { srcName: 'grey_backpack_1791658690969.png', destName: 'grey-backpack.jpg' },
  { srcName: 'engineering_notebook_1791658727364.png', destName: 'engineering-notebook.jpg' },
  { srcName: 'wired_earphones_1791658764239.png', destName: 'wired-earphones.jpg' },
  { srcName: 'black_umbrella_1791658806823.png', destName: 'black-umbrella.jpg' }
];

for (const item of copyMap) {
  const srcPath = path.join(brainDir, item.srcName);
  const destPath = path.join(publicImagesDir, item.destName);
  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, destPath);
    console.log(`COPIED ${item.srcName} -> ${item.destName} (${fs.statSync(destPath).size} bytes)`);
  } else {
    console.error(`MISSING SRC: ${srcPath}`);
  }
}
