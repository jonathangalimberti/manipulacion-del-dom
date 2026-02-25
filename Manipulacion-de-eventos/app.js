const button = document.querySelector("button");

const buttonClicked = (event) => {
  console.log(event); //nos trae toda la información del evento, como el tipo de evento, el elemento que lo disparó, etc.
  console.log(event.target);// nos trae el elemento que disparó el evento, en este caso el botón
  console.log(event.target.id); // nos trae el id del elemento que disparó el evento, en este caso "btn"
  console.log(event.target.textContent); // nos trae el texto del elemento que disparó el evento, en este caso "click me"
};

button.addEventListener("click", buttonClicked);
