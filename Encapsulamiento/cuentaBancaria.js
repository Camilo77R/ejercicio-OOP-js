class CuentaBancaria{
    #saldo //este pertence a la clase no al objeto
    // no se crea una copia para cada obj. por medio de get y set se accede a este 
    constructor(titularDeLaCuenta, saldoIncial){
        this.nombreTitularDeLaCuenta = titularDeLaCuenta;
        this.#saldo = saldoIncial;
    }

    depositar(monto){
        this.#saldo+=monto;
    }


    obtenerSaldo(){
        return this.#saldo;
    }


    retirarDinero(montoARetirar){
        return montoARetirar > this.#saldo ? `IMPOSIBLE RETIRAR DINERO!! El monto a retirar es mayor a tu saldo actual de ${this.#saldo} Pesos COP`: `Haz retirado ${montoARetirar} de tu cuenta, tu nuevo saldo es ${this.#saldo -= montoARetirar} Pesos COP`;
    }
}


const cuenta1 = new CuentaBancaria("Juan" , 0);
console.log(cuenta1);

// depositamos dinero en la cuenta
cuenta1.depositar(2001);
// consultamos cuanto hay en la cuenta Bancaria
const cuantoHay = cuenta1.obtenerSaldo();
console.log(`El la cuenta del titular ${cuenta1.nombreTitularDeLaCuenta} hay un total de $${cuantoHay} pesos COP`);

// retirar dinero de la cuenta
const  retirarDineroCuenta = cuenta1.retirarDinero(2000);
console.log(retirarDineroCuenta);
const segundoRetiro = cuenta1.retirarDinero(200);
console.log(segundoRetiro);