function sumarNumeros(num1, num2) {
    return num1 + num2;
}

function restarNumeros(num1, num2) {
    return num1 - num2;
}


export class Calculadora {
    constructor({
        numero1, 
        numero2, 
    }){
        this.numero1 = numero1;
        this.numero2 = numero2;
    }

    sumar() {
        sumarNumeros(this.numero1, this.numero2);
    }

    restar() {
        restarNumeros(this.numero1, this.numero2);
    }
}