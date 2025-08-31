// Actividades sugeridas
// • Crear una clase Persona y dos clases hijas, una Instructor y otra Aprendiz:
// o Persona:
// ▪ Atributos: identificación, nombre, correo
// o Aprendiz:
// ▪ Atributo: puntajeIcfes
// ▪ Métodos: info(): muestra un mensaje con todos los atributos del aprendiz
// o Instructor:
// ▪ Atributo: especialidad
// ▪ Méodos: info(): muestra un mensaje con todos los atributos del instructor
// • Crear una clase Animal y clases hijas Perro, Gato, con comportamiento específico.
class Persona{

    constructor(identificacion, nombre, correo){
        this.identificacion = identificacion;
        this.nombre = nombre;
        this.correo = correo;

    }

    // metodo info para obtener los valores del objeto 
    info(){
        return `${this.identificacion}, ${this.nombre}, ${this.correo}`;
    }
}


class Aprendiz extends Persona{
    constructor(puntajeIcfes, identificacion, nombrePersona, correoPersona){
         // La llamada a 'super' inicializa las propiedades heredadas en la instancia de Aprendiz.
        super(identificacion, nombrePersona, correoPersona);
        this.puntajeIcfes = puntajeIcfes;
        // el supero av dentro de el constructo de la clase hija para que lo inicialize (le pasa lo valores que requiere la clase padre)
    }
    
    informacionAprendiz(){
        const datosAprendiz = super.info();
        // puedo usar  ej: this.nombre pero por encapsulacion mejor que la clase padre lo maneje
        return `${datosAprendiz} con un putaje icfes de ${this.puntajeIcfes} puntos`;
    }

}

class Instructor extends Persona{
    constructor(especialidad,identificacion,nombreProfe,correoProfe){
        super(identificacion,nombreProfe,correoProfe );
        this.especialidad = especialidad;
    }
    informacion(){
        const datosProfe = super.info();
        return `${datosProfe}  se especializa en ${this.especialidad}`;
    }
}

const aprendiz1  = new Aprendiz(80, 1002968500,"Luis","luis121@gmail.com");
const profe1 = new Instructor("Arquitectura", 2287690, "Pepito Perez", "pepito00@hotmail.com" );
console.log("--------------------------------------Aprendiz-------------------------------");
console.log(aprendiz1);
console.log(aprendiz1.informacionAprendiz());
console.log("--------------------------------------Instructor-------------------------------");

console.log(profe1);
console.log(profe1.informacion());