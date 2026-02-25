// const listItems = document.querySelectorAll("li");

// listItems.forEach((item) => {
//   item.addEventListener("click", (event) => {
//     event.target.classList.toggle("highlight");
//   });
// }); --> Es una forma de agregar un evento a cada elemento de la lista, pero no es eficiente si hay muchos elementos o si se agregan nuevos elementos dinámicamente.

const list = document.querySelector("ul");

list.addEventListener("click", (event) => {
  event.target.closest("li").classList.toggle("highlight");
}); // --> Esta es una forma de usar el patrón de delegación de eventos, donde se agrega un solo evento al elemento padre (la lista) y se maneja el evento para los elementos hijos (los elementos de la lista) usando event.target. Esto es más eficiente y funciona incluso si se agregan nuevos elementos dinámicamente.