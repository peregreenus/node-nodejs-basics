import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const oldPath = path.join(__dirname, 'files', 'wrongFilename.txt');
const newPath = path.join(__dirname, 'files', 'properFilename.md');
const ERROR = new Error('FS operation failed');

const rename = async () => {
    fs.access(newPath, err => {
        if (!err) throw ERROR;
        fs.rename(oldPath, newPath, err => {
            if (err) throw ERROR;
        });
    });
};

await rename();