// negocio.js - Funciones de negocio (agregar, eliminar personas y productos)

const formPersona = document.getElementById("personaForm");
const listaPersonas = document.getElementById("listaPersonas");

formPersona.addEventListener("submit", function (e) {
  e.preventDefault();

  const persona = {
    nombre: document.getElementById("nombre").value,
    apellido: document.getElementById("apellido").value,
    edad: parseInt(document.getElementById("edad").value),
  };

  guardarPersona(persona);
  mostrarPersonas();
  formPersona.reset();
});

function mostrarPersonas() {
  listaPersonas.innerHTML = "";
  const personas = obtenerPersonas();
  personas.forEach((p, index) => {
    const li = document.createElement("li");
    li.innerText = `${p.nombre} ${p.apellido} - ${p.edad} años`;

    const btn = document.createElement("button");
    btn.innerText = "Eliminar";
    btn.onclick = () => {
      eliminarPersona(index);
      mostrarPersonas();
    };

    li.appendChild(btn);
    listaPersonas.appendChild(li);
  });
}

function eliminarPersona(index) {
  const personas = obtenerPersonas();
  personas.splice(index, 1);
  localStorage.setItem("personas", JSON.stringify(personas));
}

mostrarPersonas();
