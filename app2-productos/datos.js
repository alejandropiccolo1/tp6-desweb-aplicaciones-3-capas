// datos.js - Funciones para obtener y guardar los productos

// Función para leer desde localStorage o desde data.json (simulación)
function obtenerProductos() {
  const productosGuardados = JSON.parse(localStorage.getItem("productos"));
  if (productosGuardados) {
    return productosGuardados;
  }

  fetch('../data.json')
    .then(response => response.json())
    .then(data => {
      localStorage.setItem("productos", JSON.stringify(data.productos));
      return data.productos;
    })
    .catch(error => console.error('Error al cargar el archivo data.json', error));

  return [];
}

// Función para guardar productos en localStorage
function guardarProducto(producto) {
  const productos = obtenerProductos();
  productos.push(producto);
  localStorage.setItem("productos", JSON.stringify(productos));
}

// Función para eliminar producto
function eliminarProducto(index) {
  const productos = obtenerProductos();
  productos.splice(index, 1);
  localStorage.setItem("productos", JSON.stringify(productos));
}
