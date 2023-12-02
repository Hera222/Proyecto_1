function toggleMenu() {
  var menu = document.querySelector("nav ul");
  menu.classList.toggle("active");
}

const url = "http://localhost:3000";

function listar(){
  fetch(url + "/data",{
    method: "GET",
  })
  .then((response) => response.json())
  .then((data) => {
    let listado = document.getElementById("listado");
    data.map((item) =>{
      const nuevo = document.createElement("div");
      nuevo.innerHTML = `<h4>ID: ${item.id}</h4>
      <h4>Nombre: ${item.nombre} </h4>
      <h4>Celular: ${item.celular} </h4>
      <h4>Email: ${item.email}</h4>
      <h4>Mensaje: ${item.mensaje}</h4>
      </h4>
      <br>`;
      listado.appendChild(nuevo);
    });
  })
  .catch((error) => {
    console.log(error);
  });
}
listar();