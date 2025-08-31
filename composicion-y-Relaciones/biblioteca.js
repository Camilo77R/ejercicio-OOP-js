
class Autor {
    constructor(nombre, nacionalidad) {
        this.nombre = nombre;
        this.nacionalidad = nacionalidad;
    }
}

class Editorial {
    constructor(nombre, ubicacion) {
        this.nombre = nombre;
        this.ubicacion = ubicacion;
    }
}

// La clase Libro, que usa composición.
// tiene que recibir  los objetos de las otras clases
class Libro {
    constructor(titulo, autor, editorial) {
        this.titulo = titulo;
        this.autor = autor; // El objeto Autor completo.
        this.editorial = editorial; // El objeto Editorial completo.
    }

    mostrarInfo() {
        return `"${this.titulo}" escrito por ${this.autor.nombre} (${this.autor.nacionalidad}), publicado por ${this.editorial.nombre} en ${this.editorial.ubicacion}.`;
    }
}


const autor1 = new Autor("Gabriel García Marquez", "Colombiana");
const editorial1 = new Editorial("Sudamericana", "Buenos Aires");

const libro1 = new Libro("Cien años de soledad", autor1, editorial1);

console.log(libro1);
console.log(libro1.mostrarInfo());
console.log("----------------yeyyyyy---------------------");
