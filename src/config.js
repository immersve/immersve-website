'use strict';

const convict = require('convict');
const json5 = require('json5');
const fs = require('fs');
const env = process.env['ENV'] || 'local';

convict.addParser({ extension: 'json5', parse: json5.parse });

const schema = {
  env: {
    format: String,
    default: env,
    env: 'ENV'
  },
  commitId: {
    format: String,
    default: 'Unknown',
    env: 'GITHUB_SHA'
  },
  buildDate: {
    format: String,
    default: new Date().toISOString(),
    env: 'BUILD_DATE'
  },
  baseUrl: {
    format: String,
    default: null,
    env: 'BASE_URL'
  },
};

const config = convict(schema);
const configFiles = [
  './config.json5',
  `./config-${env}.json5`,
];

configFiles
  .filter(fs.existsSync)
  .forEach(f => config.loadFile(f));

config.validate({ allowed: 'strict' });

module.exports = config;
