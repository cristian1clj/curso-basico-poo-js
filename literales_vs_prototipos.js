// Literal
const juan = {
    nombre: "Juan", 
    edad: 16, 
    cursosAprobados: [
        "Curso de programacion para videojuegos basico", 
    ], 
    aprobarCurso(curso) {
        this.cursosAprobados.push(curso);
    }
};

juan.nombre = "Andres";
juan.aprobarCurso("Curso de diseño de videojuegos");


// Prototipo
function Estudiante(nombre, edad, cursosAprobados) {
    this.nombre = nombre;
    this.edad = edad;
    this.cursosAprobados =cursosAprobados;
    // this.aprobarCurso = function (curso) {
    //     this.cursosAprobados.push(curso);
    // }
}
Estudiante.prototype.aprobarCurso = function (curso) {
    this.cursosAprobados.push(curso);
}

const camilo = new Estudiante(
    "Camilo", 
    20, 
    [
        "Curso basico de python", 
        "Curso basico de JavaScript", 
    ], 
);