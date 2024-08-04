class CitiesReporter {
    constructor ( {formaterStrategy, fileReader}) {
        this._formaterStrategy = formaterStrategy;
        this._fileReader = fileReader;
    }

    async report(arquivo)  {
        const dados = await this._fileReader.read(arquivo);
        return this._formaterStrategy.output(dados);
    }
}

export default CitiesReporter;