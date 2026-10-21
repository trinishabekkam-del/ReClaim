import fs from 'fs';
import path from 'path';
import https from 'https';

const imagesDir = path.join(process.cwd(), 'public', 'images');

const keyUrls = [
  'https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1582142407894-ec85a1260aee?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&w=800&q=80'
];

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    const request = (targetUrl) => {
      https.get(targetUrl, (response) => {
        if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
          return request(response.headers.location);
        }
        if (response.statusCode !== 200) {
          reject(new Error(`Failed ${targetUrl}: Status ${response.statusCode}`));
          return;
        }
        response.pipe(file);
        file.on('finish', () => {
          file.close(() => resolve(dest));
        });
      }).on('error', (err) => {
        fs.unlink(dest, () => reject(err));
      });
    };
    request(url);
  });
}

async function run() {
  const dest = path.join(imagesDir, 'black-keychain.jpg');
  for (const url of keyUrls) {
    try {
      await download(url, dest);
      const stat = fs.statSync(dest);
      if (stat.size > 5000) {
        console.log(`SUCCESS downloaded black-keychain.jpg from ${url} (${stat.size} bytes)`);
        break;
      }
    } catch (err) {
      console.log(`Failed url ${url}: ${err.message}`);
    }
  }
}

run();
