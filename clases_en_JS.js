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

const camilo = new Estudiante({
    edad: 20, 
    nombre: "Camilo", 
    cursosAprobados: [
        "Curso basico de python", 
        "Curso basico de JavaScript", 
    ], 
});