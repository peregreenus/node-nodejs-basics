const parseEnv = () => {
    const keys = Object.keys(process.env);
    const vars = [];

    keys.forEach(key => {
        if (key.includes('RSS_')) {
            vars.push(`${key}=${process.env[key]}`);
        }
    });

    console.log(vars.join('; '));
};

parseEnv();