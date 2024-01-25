import { EOL } from 'os';
import { Transform, pipeline } from 'stream';
import { stdin, stdout } from 'process';


class Reversed extends Transform {
    constructor() {
        super();
    }

    _transform(chunk, encoding, cb) {
        chunk = [...chunk.toString()]
            .reverse()
            .join('')
            .trim() + EOL;

        cb(null, chunk);
    }
}

const transform = async () => {
    const reversed = new Reversed();
    pipeline(
        stdin,
        reversed,
        stdout,
        (err) => err
    );
};

await transform();