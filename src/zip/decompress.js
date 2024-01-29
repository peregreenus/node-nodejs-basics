import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import { createGunzip } from 'zlib';
import { pipeline } from 'stream';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const zipPath = path.join(__dirname, 'files', 'archive.gz');
const unzipPath = path.join(__dirname, 'files', 'fileToCompress.txt');

const decompress = async () => {
    const rs = fs.createReadStream(zipPath);
    const ws = fs.createWriteStream(unzipPath);
    const gunzip = createGunzip();

    pipeline(
        rs,
        gunzip,
        ws,
        (err) => err
    );
};

await decompress();