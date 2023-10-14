import { writeFileSync, readFileSync, existsSync, rmdirSync, cpSync } from 'node:fs';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import pkg from '../../package.json' assert { type: 'json' };

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const packageName = process.argv[2];

const root = resolve(__dirname, '../../');

if (!packageName) {
    console.error('Please provide a package name, i.e. `pnpm make:package my-package`');

    process.exit();
}

const packageDirectory = resolve(root, './packages', packageName);

if (existsSync(packageDirectory)) {
    console.error('Package already exists');

    process.exit();
}

try {
    cpSync(resolve(__dirname, './stubs'), packageDirectory, {
        recursive: true,
    });

    const packageJson = JSON.parse(readFileSync(resolve(packageDirectory, './package.json'), 'utf-8'));

    packageJson.version = pkg.version;
    packageJson.name = `@hedgehoglab/${ packageName }`;
    packageJson.repository = `https://github.com/hedgehoglab-engineering/frontend-linters/tree/main/packages/${ packageName }`;

    writeFileSync(
        resolve(packageDirectory, 'package.json'),
        JSON.stringify(packageJson, null, 2),
        'utf-8',
    );

    console.log(`✅ @hedgehoglab/${ packageName } bootstrapped successfully`);
} catch (e) {
    rmdirSync(packageDirectory, {
        recursive: true,
    });

    throw e;
}
