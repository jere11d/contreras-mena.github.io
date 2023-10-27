// script.js
function submitForm() {
    var name = document.getElementById("name").value;
    var description = document.getElementById("description").value;
    var contact = document.getElementById("contact").value;

    // Reemplaza "DESTINATARIO" con el número de teléfono del destinatario en formato internacional
    var destinatarioWhatsApp = "50377451493";

    // Formar el mensaje de WhatsApp
    var mensajeWhatsApp = "¡Hola! Soy " + name + ". Confirmo mi asistencia. \n\n";
    mensajeWhatsApp += "Descripción: " + description + "\n";
    mensajeWhatsApp += "Contacto: " + contact;

    // Crear el enlace de WhatsApp
    var enlaceWhatsApp = "https://wa.me/" + destinatarioWhatsApp + "?text=" + encodeURIComponent(mensajeWhatsApp);

    // Abrir el enlace de WhatsApp
    window.open(enlaceWhatsApp);
}
