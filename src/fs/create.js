import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, 'files', 'fresh.txt');

const create = async () => {
    fs.access(filePath, err => {
        if (!err) throw new Error('FS operation failed');
        fs.appendFile(
            filePath,
            'I am fresh and young',
            err => err
        );
    });
};

await create();
