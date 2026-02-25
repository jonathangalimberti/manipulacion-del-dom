**¿Qué es el Delegation Pattern y cómo se utiliza en eventos de clic?**

El Delegation Pattern, o patrón de delegación, es una técnica utilizada en JavaScript para optimizar la gestión de eventos. Este patrón es especialmente útil cuando se trabaja con elementos dinámicos en el DOM (Document Object Model). En lugar de asignar un evento a cada elemento individual, se delega la escucha del evento a un elemento padre. Así, el elemento padre puede reconocer y gestionar los eventos de sus hijos.

A continuación, te explicamos cómo aplicar este patrón para cambiar el estilo de los elementos de una lista al hacer clic.

**¿Cómo cambiar el color de fondo de una lista con eventos de JavaScript?**

Vamos a explorar dos métodos para cambiar el color de fondo de elementos en una lista HTML cuando se les hace clic. El objetivo es aplicar una clase que modifique el estilo al elemento seleccionado.

**Método 1:** Asignar eventos individualmente a cada ítem

Una forma simple pero menos eficiente es agregar un EventListener a cada elemento de la lista. Aquí está cómo se hace en JavaScript:

const listItems = document.querySelectorAll("li");

listItems.forEach(item => {
item.addEventListener("click", event => {
const target = event.target;
target.classList.toggle("highlight");
});
});

En este código:

- Se seleccionan todas las etiquetas <li> del documento y se almacenan en una variable listItems.
- Se utiliza forEach para agregar un evento click a cada elemento.
- Se alterna la clase highlight al hacer clic, lo que cambia el estilo del elemento.

Aunque este método es directo, puede afectar el rendimiento si se tiene una lista con muchos elementos.

**Método 2:** Usar el Delegation Pattern para gestionar eventos.

Para una mejor práctica, podemos utilizar el Delegation Pattern, asignándole el evento al elemento padre (<ul>) y haciendo que este maneje la interacción con sus hijos:

const list = document.querySelector("ul");

list.addEventListener("click", event => {
const li = event.target.closest("li");
if (li) {
li.classList.toggle("highlight");
}
});

En este enfoque:

- Se selecciona la lista completa (<ul>) y se le asigna un EventListener para el evento click.
- Utilizamos event.target.closest("li") para obtener el elemento <li> más cercano dentro de la lista. Esto asegura que, independientemente de dónde se haga clic dentro de un ítem, será el elemento <li> el que cambie de clase.

Este método es más eficiente porque reduce el número de listeners activos en el documento, delegando la responsabilidad al elemento padre.

**¿Por qué elegir el Delegation Pattern?**

El Delegation Pattern mejora el rendimiento de la aplicación al:

- Reducir la cantidad de eventos activos a gestionar.
- Simplificar el código y mejorar su mantenibilidad.
- Resolver problemas de selección en estructuras HTML más complejas.

En resumen, el empleo de esta técnica no solo optimiza el funcionamiento de tu aplicación, sino que también permite manejar elementos dinámicos de forma más efectiva. Convierte esta práctica en una parte fundamental de tu flujo de trabajo en JavaScript. ¡Sigue mejorando y explorando las ventajas de los patrones de diseño en el desarrollo web!
