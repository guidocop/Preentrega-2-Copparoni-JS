function bienvenida(){
    alert('Bienvenidx a la tienda, presione aceptar para continuar');
}
bienvenida();

let menuOpciones;
let vermenu;
let itemAgregado;
let cantidad;
let agregar;
let mostrarTotalCompra;
let carritoVacio;
const OPCIONUNO = 1;
const OPCIONDOS = 2;
const OPCIONTRES = 3;

class Producto {
    constructor(nombre, precio, marca) {
        this.nombre = nombre;
        this.precio = precio;
        this.marca = marca;
    }
}

const stock = [];
stock.push(new Producto('Avellanas', 300, 'Integralia'));
stock.push(new Producto('Pimienta', 80, 'Marolio'));
stock.push(new Producto('Porotos', 120, 'Sema'));
stock.push(new Producto('Avena', 90, 'Integralia'));
stock.push(new Producto('Nueces', 230, 'Integralia'));
stock.push(new Producto('Comino', 75, 'Marolio'));
stock.push(new Producto('Lentejas', 150, 'Sema'));
stock.push(new Producto('Almohaditas rellenas', 180, 'Integralia'));
stock.push(new Producto('Maní', 200, 'Integralia'));
stock.push(new Producto('Romero', 60, 'Marolio'));
stock.push(new Producto('Barritas de cereal', 280, 'Integralia'));
stock.push(new Producto('Arvejas', 100, 'Sema'));

const facturaCompra = [];

function totalCompra () {
    alert(`El monto total de la compra realizada es de:  ${mostrarTotalCompra}$.\n
    Gracias por elegirnos`)}





do{menuOpciones = parseInt(prompt('Ingrese una opción dentro del menú: ' + '\n' +
'1 - Ver listado de productos' + '\n' +
'2 - Visualizar detalle de la compra' + '\n' +
'3 - Ver el total a pagar'));

switch (menuOpciones){
    case OPCIONUNO:
        do{const mostrarStock = stock.map((item, index) => `${index + 1}: ${item.nombre} marca ${item.marca} precio unitario: ${item.precio}$` + '\n');
        itemAgregado = parseInt(prompt('LISTADO DE PRODUCTOS DE LA TIENDA \n \n' + mostrarStock.join('\n') + '\n' +
        'Seleccione el item que desea incorporar al carrito:' + '\n'));
        while((itemAgregado < 1) || (itemAgregado > stock.length)) {
        itemAgregado = parseInt(prompt('LISTADO DE PRODUCTOS DE LA TIENDA \n \n' + mostrarStock.join('\n') + '\n' +
        'Debe seleccionar una opción válida:' + '\n'));
        }
        cantidad = parseInt(prompt('Ingrese la cantidad que desea agregar:'));
        agregar = prompt('Desea seguir agregando items al carrito?si/no');
        facturaCompra.push({nombre: stock[itemAgregado - 1].nombre,
            precioUnitario: stock[itemAgregado - 1].precio,
            cantidad: cantidad,
            subtotal: stock[itemAgregado - 1].precio*cantidad});
            const detalle = facturaCompra.map((item, index) => `Item n° ${index + 1}: ${item.nombre}, Cantidad: ${item.cantidad}, Precio unitario ${item.precioUnitario}, Subtotal: ${item.subtotal}`);
            function mostrarFactura (){
                alert('DETALLE DE LA COMPRA: ' + '\n' + detalle.join('\n'));
            };
            mostrarTotalCompra = facturaCompra.reduce((total, item) => total + item.subtotal,0);
        }while (agregar == 'si');
        break;
    case OPCIONDOS:
        mostrarFactura();
        break;
    case OPCIONTRES:
        totalCompra();
    break;
    default:
        alert('Debe seleccionar una opción dentro del menú');
}

vermenu = prompt('Desea volver al menú principal?' + '\n' +
'"si" para volver al menú' + '\n' +
'"no" para abandonar la tienda');}
while (vermenu == 'si');

