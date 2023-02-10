class Estudiante {
    constructor({
        nombre, 
        edad, 
        cursosAprobados = [], 
    }) {
        this.nombre = nombre;
        this.edad = edad;
        this.cursosAprobados =cursosAprobados;
    }

    aprobarCurso(curso) {
        this.cursosAprobados.push(curso);
    }
}


class EstudianteGratis extends Estudiante {
    constructor(props){
        super(props);
    }
}


class EstudiantePremium extends Estudiante {
    constructor(props){
        super(props);
    }
}


const estudiante1 = new EstudianteGratis({
    nombre: "Carlos", 
    edad: 32, 
});

const estudiante2 = new EstudiantePremium({
    nombre: "Camilo", 
    edad: 22, 
});