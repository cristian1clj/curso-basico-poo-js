class Banda {
  constructor({ 
    nombre, 
    generos = [] 
}) {
    this.nombre = nombre;
    this.generos = generos;
    this.integrantes = [];
  }
  agregarIntegrante(integranteNuevo) {
    if (integranteNuevo.instrumento == "Bateria") {
      if (this.integrantes.every((i) => i.instrumento != "Bateria")) {
        this.integrantes.push(integranteNuevo);
      }
    } else {
      this.integrantes.push(integranteNuevo);
    }
  }
}

//Crear clase Integrante
class Integrante {
  constructor({ 
    nombre, 
    instrumento 
}) {
    this.nombre = nombre;
    this.instrumento = instrumento;
  }
}
