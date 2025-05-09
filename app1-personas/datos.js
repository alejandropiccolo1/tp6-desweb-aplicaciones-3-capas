// datos.js - Funciones para obtener y guardar los datos

// Función para leer desde localStorage o desde data.json (simulación)
function obtenerPersonas() {
  const personasGuardadas = JSON.parse(localStorage.getItem("personas"));
  if (personasGuardadas) {
    return personasGuardadas;
  }

  fetch('../data.json')
    .then(response => response.json())
    .then(data => {
      localStorage.setItem("personas", JSON.stringify(data.personas));
      return data.personas;
    })
    .catch(error => console.error('Error al cargar el archivo data.json', error));

  return [];
}

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

// Función para guardar personas en localStorage
function guardarPersona(persona) {
  const personas = obtenerPersonas();
  personas.push(persona);
  localStorage.setItem("personas", JSON.stringify(personas));
}

// Función para guardar productos en localStorage
function guardarProducto(producto) {
  const productos = obtenerProductos();
  productos.push(producto);
  localStorage.setItem("productos", JSON.stringify(productos));
}
