class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}

class Pedido {
    constructor() {
        this.productos = [];
    }

    agregarProducto(producto) {
        this.productos.push(producto);
    }

    calcularTotal() {
        let total = 0;
        for (const producto of this.productos) {
            total += producto.precio;
        }
        return total;
    }
}
// aqui usmos composicion
const miPedido = new Pedido();

const pan = new  Producto("Pan", 1.50);
const leche = new  Producto("Leche", 2.20);
const huevos = new Producto("Huevos", 3.00);

miPedido.agregarProducto(pan);
miPedido.agregarProducto(leche);
miPedido.agregarProducto(huevos);

console.log("Productos en el pedido:", miPedido.productos);
console.log(`Total del pedido: $${miPedido.calcularTotal()}`);
console.log("------------------..........-------------------");
