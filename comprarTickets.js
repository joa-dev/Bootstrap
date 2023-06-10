let modalContainer = document.querySelector(".modalContainer");
let abrirModal = document.querySelector(".abrirModal");
let totalAPagar = document.querySelector(".totalAPagar");
let cantidad = document.querySelector(".cantidad");
let descuentoEstudiante = document.querySelector(".botonEstudiante");
let descuentoTrainee = document.querySelector(".botonTrainee");
let descuentoJunior = document.querySelector(".botonJunior");
let calcular = document.querySelector(".calcular");
const valorTicket = 200;

let visualizarModal = () => {
  // modalContainer.innerHTML = `
  // <div class="cardsDescuentos">
  //   <div class="estudiante">
  //     <button type="button" class="botonEstudiante">
  //       <h4>Estudiante</h4>
  //       <p>Tienen un descuento</p>
  //       <p>80%</p>
  //       <p>*Presentar documentacion</p>
  //     </button>
  //   </div>
  //   <div class="trainee">
  //     <button type="button" class="botonTrainee">
  //       <h4>Trainee</h4>
  //       <p>Tienen un descuento</p>
  //       <p>50%</p>
  //       <p>*Presentar documentacion</p>
  //     </button>
  //   </div>
  //   <div class="junior">
  //     <button type="button" class="botonJunior">
  //       <h4>Junior</h4>
  //       <p>Tienen un descuento</p>
  //       <p>80%</p>
  //       <p>*Presentar documentacion</p>
  //     </button>
  //   </div>
  // </div>
  // <h3>VENTA</h3>
  // <h1>VALOR DE TICKET $200</h1>
  // <div class="formulario">
  //   <form>
  //     <input type="text" placeholder="Nombre">
  //     <input type="text" placeholder="Apellido">
  //     <input type="text" placeholder="Correo">
  //     <input class="cantidad" type="number" placeholder="Cantidad">
  //     <input type="text" placeholder="Correo">
  //     <h3 class="totalAPagar"></h3>
  //   </form>
  // </div>`;
}

let descuentoClickeado = 0;





descuentoEstudiante.addEventListener("click", () => descuentoClickeado = 0.2);

descuentoTrainee.addEventListener("click", () => {
  descuentoClickeado = 0.5;
  console.log(descuentoClickeado);
});

descuentoJunior.addEventListener("click", () => descuentoClickeado = 0.8);

calcular.addEventListener("click", () => {

  let totalCalculado = cantidad.value * descuentoClickeado * valorTicket;
  console.log(valorTicket);
  totalAPagar.innerHTML = `Total a Pagar $${totalCalculado}`;
})


abrirModal.addEventListener("click", visualizarModal)
