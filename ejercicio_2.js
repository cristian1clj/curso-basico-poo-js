class Course {
    constructor({ 
        name, 
        classes = [] 
    }) {
        this._name = name;
        this.classes = classes;
    }

    get name() {
        return this._name;
    }

    set name(nuevoNombrecito) {
        if (typeof nuevoNombrecito === "string") {
            this._name = nuevoNombrecito.charAt(0).toUpperCase() + nuevoNombrecito.slice(1);
        }
    }
}

const miCurso = new Course({});

miCurso.name = 1234;
miCurso.name = "curso javaScript";