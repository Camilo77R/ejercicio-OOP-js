class Estudiante{


    constructor(nombreEstudiante, listaMaterias){
        this.nombreEstudiante = nombreEstudiante;
        this.listaMaterias = listaMaterias;

        }    
        // metodo  para listar las materias que tengo que ver este semestre
        listarMaterias(){
            for(const materia of this.listaMaterias){
                console.log(materia);
            }    
    }
}

const materiasSistemas = [
    "Programación I",
    "Estructuras de Datos",
    "Base de Datos",
    "Algoritmos",
    "Redes de Computadores",
    "Ingeniería de Software",
    "Sistemas Operativos"
];

const estudiante1 = new Estudiante("Felipe",materiasSistemas );
estudiante1.listarMaterias();