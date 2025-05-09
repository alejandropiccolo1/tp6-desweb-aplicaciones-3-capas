const form = document.getElementById("productoForm");
const lista = document.getElementById("listaProductos");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const producto = {
    nombre: document.getElementById("nombre").value,
    descripcion: document.getElementById("descripcion").value,
    precio: parseFloat(document.getElementById("precio").value),
  };

  guardarProducto(producto);
  mostrarProductos();
  form.reset();
});

function mostrarProductos() {
  lista.innerHTML = "";
  const productos = obtenerProductos();
  productos.forEach((p, index) => {
    const li = document.createElement("li");
    li.innerText = `${p.nombre}: ${p.descripcion} - $${p.precio.toFixed(2)}`;

    const btn = document.createElement("button");
    btn.innerText = "Eliminar";
    btn.onclick = () => {
      eliminarProducto(index);
      mostrarProductos();
    };

    li.appendChild(btn);
    lista.appendChild(li);
  });
}

mostrarProductos();
