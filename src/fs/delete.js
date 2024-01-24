import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, 'files', 'fileToRemove.txt');
const ERROR = new Error('FS operation failed');

const remove = async () => {
    fs.access(filePath, err => {
        if (err) throw ERROR;
        fs.unlink(filePath, err => err);
    });
};

await remove();