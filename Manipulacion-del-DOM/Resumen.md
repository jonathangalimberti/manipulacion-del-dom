**Manipulación del DOM**

Si en la consola del navegador ponemos console.dir(document), vamos a poder ver el objeto document por el cual podemos modificar y acceder a los diferentes nodos.

**Formas de seleccionar elementos**

Por etiquetas, clase o ID

Las etiquetas son las que en el HTML nos dicen que tipo de elemento es por ej, <p> párrafo </p>

Las clases se pueden repetir y comúnmente se reutilizan para estilos de CSS

Los ID deben ser únicos y nos permiten localizar algún elemento con mayor precisión en caso de ser necesario

Con document.getElementById("id-a-seleccionar")

Con document.getElementsByClassName("nombre-de-la-clase")

Con document.getElementsByTagName("nombre-de-la-etiqueta")

Otra forma es mediante document.querySelector("#app-title")

el querySelector nos permite seleccionar tanto etiquetas, clases y IDs el # hace alusión a que buscamos un ID, el . busca clases y la etiqueta "p" busca etiquetas. Si hay mas de un elemento de la misma clase o etiqueta solo traerá el primero que encuentre, si queremos traer todos los elementos debemos usar querySelectorAll("nodo-buscado")

**¿Cómo navegar el DOM de forma jerárquica?**

Navegar el Document Object Model (DOM) es una habilidad esencial para cualquier desarrollador web. Comprender cómo seleccionar elementos de manera jerárquica, ya sean padres, hijos o ancestros, puede facilitar enormemente la manipulación del documento HTML. En esta clase, vamos a explorar cómo moverse a través del DOM usando diferentes métodos y propiedades.

**¿Cómo seleccionar elementos padre e hijo?**

Para comenzar a trabajar con el DOM, seleccionamos un elemento utilizando su ID, lo que facilita identificar una sección específica del HTML con la que queremos trabajar. Supongamos que estamos interesados en un <ul> con un ID específico, y queremos analizar sus elementos hijos.

Al ejecutar este snippet, obtenemos el elemento con todos sus hijos. Esto es útil cuando queremos manipular o inspeccionar toda una colección de elementos anidados.

**¿Cómo acceder al primer hijo de un elemento?**

A veces necesitamos trabajar exclusivamente con el primer hijo de un elemento. En estos casos, podemos usar firstElementChild, que nos proporciona el acceso directo al nodo del primer elemento hijo.

Esto es especialmente útil cuando queremos manipular o estilizar únicamente el primer elemento de una lista, dejando los demás tal cual.

**¿Cómo moverse entre hermanos en el DOM?**

Entender cómo moverse entre nodos hermanos en el DOM puede ser particularmente útil. Podemos usar propiedades como nextSibling y previousSibling para acceder a los hermanos de un elemento.

Estas propiedades pueden ayudarnos a navegar a elementos que están al mismo nivel jerárquico dentro del DOM.

**¿Cómo seleccionar un elemento ancestro?**

Muchas veces, es necesario retroceder en el árbol del DOM para encontrar un elemento ancestro. El método closest nos permite lograr esto de manera eficiente.

Esto es extremadamente útil cuando trabajamos con elementos muy anidados, ya que closest _bus cará_ el elemento ancestro más cercano que coincida con el selector especificado.

**¿Cuáles son otras formas de navegar el DOM?**

Además de los métodos anteriores, hay varias otras propiedades y métodos útiles que puedes emplear para moverte a través del DOM:

- children: Devuelve una colección de los elementos hijos de un nodo.
- childNodes: Devuelve todos los nodos hijos (incluso los nodos de texto y comentarios).
- lastChild: Devuelve el último nodo hijo de un elemento.
- parentElement: Proporciona acceso directo al elemento padre de un nodo dado.

Probar estos métodos en diferentes estructuras HTML te ayudará a comprender cómo funciona el DOM y te permitirá mejorar tu habilidad para manipularlo.
