document.getElementById("formTrivia").addEventListener("submit", function(event) {

    // Obtener los valores de los campos
    let nombre = document.getElementById("nombre").value.trim();
    let correo = document.getElementById("correo").value.trim();
    let fecha = document.getElementById("fecha").value;
    let estadio = document.getElementById("estadio").value;
    let idolo = document.getElementById("idolo").value;
    let favorito = document.getElementById("favorito").value;

    // Obtener la respuesta seleccionada
    let fundacion = document.querySelector('input[name="fundacion"]:checked');
    let colores = document.querySelector('input[name="colores"]:checked');
    let titulos = document.querySelector('input[name="titulos[]"]:checked');
    

    // Validar los campos
    if (nombre === "") {
        alert("Por favor, ingresa tu nombre.");
        event.preventDefault();
        return;
    }

    if (correo === "") {
        alert("Por favor, ingresa tu correo electrónico.");
        event.preventDefault();
        return;
    }

    if (fecha === "") {
        alert("Por favor, selecciona una fecha.");
        event.preventDefault();
        return;
    }

    if (fundacion === null) {
        alert("Por favor, selecciona una respuesta para la pregunta de fundación.");
        event.preventDefault();
        return;
    }

    if (estadio === "") {
        alert("Por favor, selecciona una respuesta para la pregunta del estadio.");
        event.preventDefault();
        return;
    }

    if (colores === null) {
        alert("Por favor, selecciona una respuesta para la pregunta de los colores.");
        event.preventDefault();
        return;
    }

    if (titulos === null) {
        alert("Por favor, selecciona una respuesta para la pregunta de las competencias.");
        event.preventDefault();
        return;
    }

    if (idolo === "") {
        alert("Por favor, selecciona una respuesta para la pregunta del idolo.");
        event.preventDefault();
        return;
    }

    if (favorito === "") {
        alert("Por favor, ingresa un valor para la pregunta no. 6 sobre su idolo favorito.");
        event.preventDefault();
        return;
    }

    alert("¡Excelente! Has diligenciado todos los campos.");
    this.reset();
    event.preventDefault();

});