class Direccion{
    constructor(calle, ciudad){
        this.calle = calle;
        this.ciudad = ciudad;
    }

}

class Usuario{
    constructor(nombre, direccion){
        this.nombre = nombre;
        this.direccion = direccion;
    }


    mostrarDireccion(){
        return`${this.direccion.calle}, ${this.direccion.ciudad}`;
    }
}

// esto es composicion

const direccion1 = new Direccion("calle 69 Norte", "Popayán");
// basicamente le paso un obj como arg al obj user1 
const user1 = new Usuario("Felipe", direccion1);

console.log(user1);
// del obj direccion1 => accedemos con el . a sus propiedades para mostrarlas
console.log(user1.mostrarDireccion());