document.getElementById("formContactanos").addEventListener("submit", function(event) {

    // Obtener los valores de los campos
    let nombre = document.getElementById("nombre").value.trim();
    let correo = document.getElementById("correo").value.trim();
    let motivo = document.getElementById("motivo").value;
    let asunto = document.getElementById("asunto").value;
    let terminos = document.querySelector('input[name="privacidad"]:checked');
    

    // Obtener la respuesta seleccionada
    
    // Validar los campos
    if (nombre === "") {
        alert("Por favor, ingresa tu nombre completo.");
        event.preventDefault();
        return;
    }

    if (correo === "") {
        alert("Por favor, ingresa tu correo electrónico.");
        event.preventDefault();
        return;
    }

    if (motivo === "") {
        alert("Por favor, selecciona un motivo de tu contacto.");
        event.preventDefault();
        return;
    }

    if (asunto === "") {
        alert("Por favor, ingresa un asunto para tu mensaje.");
        event.preventDefault();
        return;
    }

    if (terminos === null) {
        alert("Por favor, acepta el tratamiento de tus datos.");
        event.preventDefault();
        return;
    }

    alert("¡Excelente! Has diligenciado todos los campos.");
    this.reset();
    event.preventDefault();

});