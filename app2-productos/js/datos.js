// Simulación de base de datos en memoria
let productos = [];

function guardarProducto(producto) {
  productos.push(producto);
}

function obtenerProductos() {
  return productos;
}

function eliminarProducto(index) {
  productos.splice(index, 1);
}
