import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import rl from 'readline';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, 'files', 'fileToRead.txt');
const ERROR = new Error('FS operation failed');

const read = async () => {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) throw ERROR;
        console.log(data);
    });
};

await read();