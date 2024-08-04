import FormaterHTML from "./FormaterHTML.js"
import FormaterTXT from "./FormaterTXT.js"

class FormaterFactory {
    static createFormater(tipo){
        if(tipo === "html"){
            return new FormaterHTML();
        } else if(tipo === "txt"){
            return new FormaterTXT();
        }
        throw new Error('Tipo Inválido');
    }
}

export default FormaterFactory;