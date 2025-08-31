class Circulo{

    constructor(radio){
        this.radio = radio;
    }


    calcularArea(){
        return Math.PI * (this.radio * this.radio);
    }
}


let  radioCircle = 10;
const circulo1 = new Circulo(radioCircle);

const resultArea = circulo1.calcularArea();
console.log(`El radio del circulo es de : ${radioCircle}cm y el resultado del area del circulo es de: ${resultArea} cm cuadrados`);