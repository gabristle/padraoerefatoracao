// index.js
import sys from 'node:sys';
import FormaterFactory from './src/FormaterFactory.js';
import CitiesReporter from './src/CitiesReporter.js';
import JSONAdapter from './src/JSONAdapter.js';

const [cmd, script, param1, ...fileParams] = process.argv;
const filenames = fileParams.length ? fileParams : ['./data/cidades-1.json', './data/cidades-2.json'];

try {
  const formater = FormaterFactory.createFormater(param1);

  const reporter = new CitiesReporter({
    formaterStrategy: formater,
    fileReader: JSONAdapter
  });

  reporter.report(filenames).then(output => {
    console.log(output);
  }).catch(err => {
    console.error('Error generating report:', err);
  });
} catch (error) {
  console.error('Error:', error.message);
}
