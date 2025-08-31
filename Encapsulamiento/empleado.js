class Empleado{
    #sueldo;

    constructor(nombre,sueldo){
        this.nombre = nombre;
        this.#sueldo = sueldo;
    }

    get sueldo(){
        return this.#sueldo;
    }

    set sueldo(nuevoSueldo){ //el setter debe llevar el nombre del atributo a moidificar
        // se valida antes de sobreescribir
        if(nuevoSueldo <= 0  || typeof nuevoSueldo !== "number"){
            // throw new Error("No se pudó asignar el nuevo sueldo ");
            console.log("No se pudó asignar el nuevo sueldo");
            return;
        }else{
            // si  no cumple arriba entonces es un valor y tipo de dato permitdos
            this.#sueldo = nuevoSueldo;
        }
    }

    aumentarSueldo(aniosTrabajando ){
        let sueldoAnterior = this.#sueldo;
        let aumentoDesueldo = 0;
        if(aniosTrabajando >= 1 && aniosTrabajando < 2){
            aumentoDesueldo = 400000; //le aumento 400mil COP 
        }else if(aniosTrabajando >=2 && aniosTrabajando < 3){
            aumentoDesueldo = 800000; //le aumento 800mil COP 
        }else if(aniosTrabajando >=3 && aniosTrabajando < 5){
            aumentoDesueldo = 1400000;  
        }else if(aniosTrabajando >=5){
            aumentoDesueldo = 2000000;  
        }else{
            return "Años de trabajo invalidos";
        }

        // hago el aumento de sueldo aquie
        this.#sueldo += aumentoDesueldo;

        return {"Nombre" : this.nombre,
                "Sueldo actual" : sueldoAnterior,
                "Monto aumentado" : aumentoDesueldo,
                "Sueldo total": this.#sueldo
        }
        
        
    }
}

// le paso nombre y sueldo actual
const empleadoNuevo = new Empleado("Luis Sanchez", 1200000);
const empleadoAntiguo = new Empleado("Omar Martinez", 2500000);


const sueldoAumentado = empleadoNuevo.aumentarSueldo(1);
console.log(sueldoAumentado);
const sueldoAumentado2 = empleadoAntiguo.aumentarSueldo(3);
console.log(sueldoAumentado2);

// getter pora obtener sueldo => el user no sabe que hace  internamentey no puede mdificar solo recibe el valor
console.log("El sueldo total del empleado Antiguo es :", empleadoAntiguo.sueldo);

// modifico el sueldo base del empleadoAntiguo
empleadoAntiguo.sueldo = 1000000;
// verifico  que sueldo tengo ahora
console.log("El nuevo sueldo puesto con el setter es ", empleadoAntiguo.sueldo);
const sueldoAumentado3 = empleadoAntiguo.aumentarSueldo(3);
console.log(sueldoAumentado3);