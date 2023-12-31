#!/usr/bin/env node

import { fileURLToPath } from 'url'
import { createRequire } from 'module'

const require = createRequire(fileURLToPath(import.meta.url))

require('child_process')
  .spawnSync('node', [ 
    '--no-warnings',
    '--loader',
    '@nyteshade/ts-node-esm/bin/esm.mjs',
    'node_modules/@nyteshade/ts-node-esm/bin/run',
    ...process.argv.slice(2)
  ], { stdio: 'inherit' })
