import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';
import chalk from 'chalk';

import config from '~/config';

/* eslint-disable no-console */

const app = express();
const BUILD_DIR = path.join(__dirname, '../build');

app.use(compression());
app.use(express.static(BUILD_DIR));

app.get('/', (req, res) => {
  res.sendFile(BUILD_DIR + '/index.html');
});

app.listen(config.buildPort, err => {
  if (err) {
    console.error('\nerror', err);
  } else {
    const url = `${ config.host }:${ config.buildPort }`;
    console.log(chalk.green(`\nProduction is running on ${ url }`));
    open(url);
  }
});
