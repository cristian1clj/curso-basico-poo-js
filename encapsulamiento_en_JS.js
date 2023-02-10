class ClaseEjemplo {
    constructor({
        atributo1, 
        atributo2, 
    }){
        this.atributo1 = atributo1;
        this._atributo2 = atributo2;
    }

    get atributo2() {
        return this._atributo2;
    }
    set atributo2(nuevoAtributo) {
        if (nuevoAtributo === "atributo erroneo"){
            console.error("Esta mal el atributo 2");
        } else {
            this._atributo2 = nuevoAtributo;
        }
    }
}

const miClase = new ClaseEjemplo({
    atributo1: "Mi atributo 1", 
})