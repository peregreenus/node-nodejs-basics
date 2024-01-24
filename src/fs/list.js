import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dirPath = path.join(__dirname, 'files');
const ERROR = new Error('FS operation failed');

const list = async () => {
    fs.readdir(dirPath, (err, files) => {
        if (err) throw ERROR;
        files.forEach(file => console.log(file));
    });
};

await list();