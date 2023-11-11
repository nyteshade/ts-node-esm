import { exec, require } from 'ts-node-esm'

const pkg = require('@nyteshade/ts-node-esm/package.json')
exec(pkg.name)
