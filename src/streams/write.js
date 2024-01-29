import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { stdin } from 'process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const write = async () => {
    const filePath = path.join(__dirname, 'files', 'fileToWrite.txt');
    stdin.pipe(fs.createWriteStream(filePath));
};

await write();