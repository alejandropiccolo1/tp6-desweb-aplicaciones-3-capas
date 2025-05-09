const form = document.getElementById("personaForm");
const lista = document.getElementById("listaPersonas");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const persona = {
    nombre: document.getElementById("nombre").value,
    apellido: document.getElementById("apellido").value,
    edad: parseInt(document.getElementById("edad").value),
  };

  guardarPersona(persona);
  mostrarPersonas();
  form.reset();
});

function mostrarPersonas() {
  lista.innerHTML = "";
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
    lista.appendChild(li);
  });
}

mostrarPersonas();
