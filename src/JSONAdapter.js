// src/JSONAdapter.js
import fs from 'node:fs/promises';

export default class JSONAdapter {
  static async read(filenames) {
    const results = [];
    for (const filename of filenames) {
      try {
        const data = await fs.readFile(filename, 'utf-8');
        const json = JSON.parse(data);

        if (Array.isArray(json)) {
          // cidades-2.json format
          results.push(...json.map(city => ({
            Nome: city.Nome,
            UF: city.Estado
          })));
        } else if (json.estados && Array.isArray(json.estados)) {
          // cidades-1.json format
          json.estados.forEach(estado => {
            results.push(...estado.cidades.map(city => ({
              Nome: city,
              UF: estado.sigla
            })));
          });
        } else {
          console.error(`File ${filename} does not contain a recognized structure`);
        }
      } catch (error) {
        console.error(`Error reading or parsing file ${filename}:`, error);
      }
    }
    return results;
  }
}
