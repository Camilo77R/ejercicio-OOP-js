class Vehiculo{//vehiculo es cualquier vehiculo con caracteristicas de todos y estan se heredan para un vehiculo espacifico
    // constructor de la clase padre => super es el constructo en la clase que hereda y de ahi viene a este constructor con los valores
    constructor(tipo, modelo){
        this.tipo = tipo;
        this.modelo = modelo;
    }
    info(){
        return `${this.tipo} ${this.modelo}`;
    }
}


class Auto extends Vehiculo{
    constructor(tipo,modelo,puertas){
        // lo usamos para que cuando use auto vehiculo se inicialice tambien sino habria errores
        // es como tener una base antes de ir a msa detalles , una cimetacion antes de ir a por la casa
        super(tipo, modelo)//constructo de la clase padre
        this.puertas = puertas;
    }


    info(){
        // uso el metodo de la clase padre(herencia) y muestro lo que retorna
        return `${super.info()} con ${this.puertas} puertas`;
    }
}


const miAuto1 = new Auto("Camaro", "1967", 2);
console.log(miAuto1); //esto es solo el atributo que tiene auto

console.log(miAuto1.info());