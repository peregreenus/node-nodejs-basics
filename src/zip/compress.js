import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import { createGzip } from 'zlib';
import { pipeline } from 'stream';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, 'files', 'fileToCompress.txt');
const archivePath = path.join(__dirname, 'files', 'archive.gz');

const compress = async () => {
    const rs = fs.createReadStream(filePath);
    const ws = fs.createWriteStream(archivePath);
    const gzip = createGzip();

    pipeline(
        rs,
        gzip,
        ws,
        (err) => err
    );
};

await compress();