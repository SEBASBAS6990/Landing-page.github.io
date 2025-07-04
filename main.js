//  MENÚ HAMBURGUESA (se abre en móviles)
const btnMenu = document.getElementById("btnMenu");
const nav = document.getElementById("menuNav");

// Cuando hacen click en el botón ☰, alternamos la clase "open"
btnMenu?.addEventListener("click", () => {
  nav.classList.toggle("open");
});

// Si hacen click en algún enlace del menú, se cierra el menú
const enlaces = nav?.querySelectorAll("a");
enlaces?.forEach((enlace) => {
  enlace.addEventListener("click", () => {
    nav.classList.remove("open");
  });
});

//  FORMULARIO DE ADOPCIÓN (verifica campos)
const usuariosValidos = [
  { usuario: "ana2025", password: "adopta1" },
  { usuario: "carlos_m", password: "rescate2" },
  { usuario: "valeriaD", password: "amorAnimal3" },
];

// Obtener los elementos del formulario y modal
const formAdopcion = document.getElementById("formAdopcion");
const modal = document.getElementById("modalLogin");
const btnConfirmar = document.getElementById("btnConfirmarLogin");
const btnCancelar = document.getElementById("btnCancelarLogin");
const mensajeLogin = document.getElementById("mensajeLogin");

// Cuando se envía el formulario, primero se valida que esté completo
formAdopcion?.addEventListener("submit", function (e) {
  e.preventDefault(); // Para que no se recargue la página

  const nombre = document.getElementById("nombre").value.trim();
  const correo = document.getElementById("correo").value.trim();
  const telefono = document.getElementById("telefono").value.trim();
  const direccion = document.getElementById("direccion").value.trim();
  const motivo = document.getElementById("motivo").value.trim();
  const tiempo = document.getElementById("tiempo").value;

  // Verificamos que todos los campos estén llenos
  if (
    nombre === "" ||
    correo === "" ||
    telefono === "" ||
    direccion === "" ||
    motivo === "" ||
    tiempo === ""
  ) {
    alert("Por favor, complete todos los campos obligatorios.");
    return;
  }

  // Si todo está bien, mostramos el modal de login
  modal.style.display = "block";
});

// Cuando se hace click en Confirmar login
btnConfirmar?.addEventListener("click", function () {
  const usuarioIngresado = document.getElementById("usuarioLogin").value.trim();
  const passIngresado = document.getElementById("passwordLogin").value.trim();

  // Verificamos si el usuario existe en la lista
  const valido = usuariosValidos.find(
    (u) => u.usuario === usuarioIngresado && u.password === passIngresado
  );

  if (valido) {
    modal.style.display = "none";
    alert("✅ Formulario enviado correctamente.");
    formAdopcion.reset();
    document.getElementById("usuarioLogin").value = "";
    document.getElementById("passwordLogin").value = "";
    mensajeLogin.textContent = "";
  } else {
    mensajeLogin.textContent = "❌ Credenciales inválidas.";
  }
});

// Si cancelan el login
btnCancelar?.addEventListener("click", function () {
  modal.style.display = "none";
  document.getElementById("usuarioLogin").value = "";
  document.getElementById("passwordLogin").value = "";
  mensajeLogin.textContent = "";
});
