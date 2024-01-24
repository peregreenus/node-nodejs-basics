import path from 'path';
import { fileURLToPath } from 'url';
import fsProm from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const originPath = path.join(__dirname, 'files');
const copyPath = path.join(__dirname, 'files_copy');
const ERROR = new Error('FS operation failed');

const copy = async () => {
    try {
        await fsProm.access(originPath);
        await fsProm.mkdir(copyPath);

        const files = await fsProm.readdir(originPath);
        files.forEach(file => {
            fsProm.copyFile(
                path.join(originPath, file),
                path.join(copyPath, file)
            );
        });
    } catch (e) {
        throw ERROR;
    }
};

await copy();
