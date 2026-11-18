document.getElementById("formSuscripcion").addEventListener("submit", function(event) {

    // Obtener los valores de los campos
    let usuario = document.getElementById("usuario").value.trim();
    let correo = document.getElementById("email").value.trim();
    let telefono = document.getElementById("telefono").value.trim();
    let localidad = document.getElementById("Localidad").value;
    let terminos = document.querySelector('input[name="terminos_condiciones"]:checked');

    // Obtener la respuesta seleccionada
    
    // Validar los campos
    if (usuario === "") {
        alert("Por favor, ingresa tu nombre completo.");
        event.preventDefault();
        return;
    }

    if (correo === "") {
        alert("Por favor, ingresa tu correo electrónico.");
        event.preventDefault();
        return;
    }

    if (telefono === "") {
        alert("Por favor, ingresa tu teléfono");
        event.preventDefault();
        return;
    }

    if (localidad === "") {
        alert("Por favor, selecciona una localidad.");
        event.preventDefault();
        return;
    }

    if (terminos === null) {
        alert("Por favor, acepta los términos y condiciones.");
        event.preventDefault();
        return;
    }

    alert("¡Excelente! Has diligenciado todos los campos.");
    this.reset();
    event.preventDefault();

});