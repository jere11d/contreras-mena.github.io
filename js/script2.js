// script2.js
function submitForm() {
    var name = document.getElementById("name").value;
    var description = document.getElementById("description").value;
    var email = document.getElementById("contact").value;

    // Configurar Email.js con tu Clave Pública
    emailjs.init("zgiJo4k35hXxamS8p"); // Reemplaza "tu_clave_publica" con tu Public Key

    // Parámetros para enviar el correo
    var params = {
        to_email: email,
        from_name: name,
        message: description
    };

    // Enviar el correo usando el ID del servicio y del template
    emailjs.send("service_ijhwxik", "template_z90cjqo", params)
        .then(function(response) {
            console.log("Correo enviado con éxito", response);

            // Limpiar los campos del formulario después de enviar el correo
            document.getElementById("name").value = "";
            document.getElementById("description").value = "";
            document.getElementById("contact").value = "";

            // Limpiar mensaje de error si lo hay
            document.getElementById("errorMessage").innerText = "";
        })
        .catch(function(error) {
            console.log("Error al enviar el correo", error);

            // Mostrar mensaje de error
            document.getElementById("errorMessage").innerText = "Error al enviar el correo: " + error.message;
        });
}
