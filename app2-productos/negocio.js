// negocio.js - Funciones de negocio (agregar, eliminar productos)

const formProducto = document.getElementById("productoForm");
const listaProductos = document.getElementById("listaProductos");

formProducto.addEventListener("submit", function (e) {
  e.preventDefault();

  const producto = {
    nombre: document.getElementById("nombre").value,
    descripcion: document.getElementById("descripcion").value,
    precio: parseFloat(document.getElementById("precio").value),
  };

  guardarProducto(producto);
  mostrarProductos();
  formProducto.reset();
});

function mostrarProductos() {
  listaProductos.innerHTML = "";
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
    listaProductos.appendChild(li);
  });
}

mostrarProductos();
