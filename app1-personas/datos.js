// Simulación de base de datos en memoria
let personas = [];

function guardarPersona(persona) {
  personas.push(persona);
}

function obtenerPersonas() {
  return personas;
}

function eliminarPersona(index) {
  personas.splice(index, 1);
}
