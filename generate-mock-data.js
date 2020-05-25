/* This script generates mock data for local development.
   This way you don't have to point to an actual API,
   but you can enjoy realistic, but randomized data,
   and rapid page loads due to local, static data.
 */

import jsf from 'json-schema-faker';
import faker from 'faker';
import { schema } from './mock-schemas/mock-data-schema';
import fs from 'fs';
import chalk from 'chalk';

jsf.extend('faker', function () {
  return faker;
});

const json = JSON.stringify(jsf(schema));

fs.writeFile("./db.json", json, function (err) {
  if (err) {
    return console.log(chalk.red(err));
  } else {
    console.log(chalk.green("Mock data generated."));
  }
});
