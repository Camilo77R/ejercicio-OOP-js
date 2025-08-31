class Rectangulo{

    constructor(base , altura){
        this.base = base;
        this.altura = altura;
    }

    // metodo que calcula el area del rectangulo
    calcularArea(){// no necesito pasarle mas datos ya que los tengo en la clase
        let area = this.base * this.altura;
        return area;
    };
}

// instancio el obj de la clase rectangulo
const figura1 = new Rectangulo(4.5 , 3.8);
const resultadoArea= figura1.calcularArea(); //qui no le paso nada ya los valores los tiene los atributos
console.log(resultadoArea);




