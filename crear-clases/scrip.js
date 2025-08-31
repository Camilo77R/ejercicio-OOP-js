

class Persona{
    
    // constructor => es el encargado de crear los objetos como se lo indiquemos
    constructor(nombre , edad ){ //valores por defecto
        // this.atributo =>hace referencia a los atributos de la clase
        this.nombre = nombre; //digo que el atributo de la clase le asignare el valor que reciba-
        this.edad = edad     // el construcor
    }

    // metodos => comportamientos que tendra el obj
    saludar(){//no usamos function cuando estas dentro de una clase lo infiere
        console.log(`Hola mi nombre es ${this.nombre} y tengo ${this.edad} años`);
    }
}


const p1 = new Persona("Jaime", 23);
p1.saludar();