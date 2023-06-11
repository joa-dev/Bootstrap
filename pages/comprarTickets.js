const nombre = document.querySelector("#nombre");
const apellido = document.querySelector("#apellido");
const correo = document.querySelector("#correo");
const cantidad = document.querySelector("#cantidad");
const categoria = document.querySelector("#categoria");
const resumen = document.querySelector("#resumen");
const formulario = document.querySelector("#formulario")

const borrar = document.querySelector("#borrar")
const calcular = document.querySelector("#calcular")
const valorTicket = 200;

const totalAPagar = () => cantidad.value > 0 && categoria.value > 0 ? resumen.innerHTML = `Total a Pagar: $${valorTicket * cantidad.value * categoria.value}` : resumen.innerHTML = "Por favor completa el formulario";

calcular.addEventListener("click", totalAPagar);
borrar.addEventListener("click", formulario.reset());