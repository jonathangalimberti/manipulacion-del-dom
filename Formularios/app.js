const form = document.getElementById("myForm"); // Obtener el formulario por su ID

form.addEventListener("submit", (event) => {
  event.preventDefault(); // Evitar que el formulario se envíe de forma predeterminada
  const name = form.elements["name"].value; // Obtener el valor del campo de con el atributo name="name"
  console.log(name);
  if (name.length < 3) {
    alert("El nombre necesita más de 3 letras");
    return;
  } // Validar el campo de nombre que contenga al menos 3 caracteres

  const email = form.elements["email"].value;
  console.log(email);
  if (!email.includes("@")) {
    alert("Please enter a valid email address");
    return;
  } // Validar el campo de correo electrónico que contenga un "@" para asegurar que sea un formato de correo válido

  alert("Formulario enviado exitosamente!"); // Mostrar un mensaje de éxito al usuario

  console.log(`El nombre del usuario es: ${name} y su correo es: ${email}`); // Imprimir en la consola el nombre y correo electrónico del usuario utilizando template literals para formatear la salida

  const formData = {
    name: name,
    email: email,
  }; // Crear un objeto con los datos del formulario para facilitar su manejo y posible envío a un servidor o almacenamiento local

  console.log(formData); // Imprimir el objeto con los datos del formulario en la consola para verificar su contenido y estructura
});
