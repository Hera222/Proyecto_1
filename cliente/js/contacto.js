function toggleMenu() {
  var menu = document.querySelector("nav ul");
  menu.classList.toggle("active");
}

const url = "http://localhost:3000";
formulario.addEventListener("submit", (e) =>{
  e.preventDefault();
  guardar(e);
});

async function guardar(e){
  id = document.getElementById("id").value;
  nombre = document.getElementById("nombre").value;
  celular = document.getElementById("celular").value;
  email = document.getElementById("email").value;
  mensaje = document.getElementById("mensaje").value;
  const data = {
    id: 0,
    nombre,
    celular,
    email,
    mensaje,
  };

  let endpoint = `${url}/data`;
  let metodo = "POST";

  await fetch(endpoint,{
    method: metodo,
    headers:{"Content-Type": "application/json",
  },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) =>{
      alert("Comentario enviado con exito!")
    })
    .catch((error) => console.error(error));
}