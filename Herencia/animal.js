// // Crear una clase Animal y clases hijas Perro, Gato, con comportamiento específico.

// class Animal{
//     constructor(tipo, nombre, raza, edad){
//         this.tipo = tipo;
//         this.nombre = nombre;
//         this.raza = raza;
//         this.edad = edad;

//     }

//     tipoAnimal(){
//         if(this.tipo.toLowerCase() === "gato"){
//             return `El ${this.tipo} hace MiUUUU`;
//         }else if(this.tipo.toLowerCase() === "perro"){
//             return `El ${this.tipo} hace GUAUUUUU`;
//         }else{
//             return `Tipo de animal incorrecto!`
//         }

//     }

    

    
// };

// class Perro extends Animal{
//     constructor(ruido, tipo,nombre,raza,edad){
//         super(tipo,nombre,raza,edad);
//         this.ruido = ruido;
//     }

//     comportaiento(){
//         const animalComportamiento = super.tipoAnimal()
//         return `${animalComportamiento} `;
//     }
// };

// class Gato extends Animal{
//     constructor(ruido, tipo,nombre,raza,edad){
//         super(tipo,nombre,raza,edad);
//         this.ruido = ruido;
//     }

//     comportaiento(){
//         const animalComportamiento = super.tipoAnimal()
//         return `${animalComportamiento} `;
//     }
// };


// const perro1 = new Perro("NO se","Perro", "Lucas","Malinois",8);
// console.log(perro1);
// console.log(perro1.comportaiento());



// Crear una clase Animal y clases hijas Perro, Gato, con comportamiento específico.



// SOLUCION #2 => otra forma
class Animal{//la clase animal solo es la base no decide "como" si no "que" 
    constructor(nombre, raza, edad){
        this.nombre = nombre;
        this.raza = raza;
        this.edad = edad;

    }
    // Este es el "contrato". Cada animal debe saber cómo hacer un sonido.
    // La implementación es genérica aquí, pero será sobreescrita por las clases hijas.
    // cada clase heredara este metodo
    hacerSonido(){}

};


// la clases debe saber que sonido hacer (el como )
// Hereda de Animal y sobrescribe el método hacerSonido() para su comportamiento específico.
class Perro extends Animal{
    constructor(nombre,raza,edad ,color){
        super(nombre,raza,edad);
        this.color = color;
    }
    hacerSonido(){
        return `Guaauuuuuu`
    }
};

class Gato extends Animal{
    constructor(nombre,raza,edad,color){
        super(nombre,raza,edad);
        this.color = color;
    }

    // aqui se sobreecribe el metodo heredado segun el animal
    // no necesitamos verificar el animal solo cuando se instacio ya sabe que sonido hacer
    hacerSonido(){
        return `Miauuu`;
    }
};

// Los objetos son de clases diferentes, pero llaman al mismo método hacerSonido() del padre.
// POLIFORMISMO
const perro1 = new Perro("Lucas","Malinois",8, "negro");
console.log("-----------------------PERRO----------------------------");
console.log(perro1);
console.log(perro1.hacerSonido());
console.log("-----------------------GATO----------------------------");
const gato1 = new Gato("Luna","Persa",2,"blanco");
console.log(gato1);
console.log(gato1.hacerSonido());