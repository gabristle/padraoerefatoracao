import assert from 'assert';
import FormaterTXT from '../src/FormaterTXT.js';
import FormaterHTML from '../src/FormaterHTML.js';
import CitiesReporter from '../src/CitiesReporter.js';
import JSONAdapter from '../src/JSONAdapter.js';

const testReportGeneration = async () => {
  const txtFormater = new FormaterTXT();
  const htmlFormater = new FormaterHTML();

  const reporterTXT = new CitiesReporter({
    formaterStrategy: txtFormater,
    fileReader: JSONAdapter
  });

  const reporterHTML = new CitiesReporter({
    formaterStrategy: htmlFormater,
    fileReader: JSONAdapter
  });

  const filenames = ['./data/cidades-1.json', './data/cidades-2.json'];

  const txtOutput = await reporterTXT.report(filenames);
  const htmlOutput = await reporterHTML.report(filenames);

  assert(txtOutput.includes('Relatório de Nomes de Cidades'), 'TXT output did not match');
  assert(htmlOutput.includes('<h1>Relatório de Nomes de Cidades</h1>'), 'HTML output did not match');

  console.log('All tests passed!');
};

testReportGeneration().catch(err => {
  console.error('Test failed:', err);
});
