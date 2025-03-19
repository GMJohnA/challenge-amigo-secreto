// Array para almacenar los nombres de los amigos //
let listaAmigos = [];

// Función para agregar un amigo a la lista //
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim(); // Eliminar espacios en blanco

    // Validar que el campo no esté vacío //
    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return; // Detiene la ejecución de la función
    }

    // Validar que el nombre no esté duplicado //
    if (listaAmigos.includes(nombre)) {
        alert(`El nombre "${nombre}" ya está en la lista.`);
        return;
    }

    // Agregar el nombre a la lista y actualizar la interfaz //
    listaAmigos.push(nombre);
    actualizarLista();

    // Limpiar el campo de entrada //
    input.value = "";
}

// Función para actualizar la lista en la interfaz //
function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar la lista antes de actualizarla

    listaAmigos.forEach((amigo) => {
        const item = document.createElement("li");
        item.textContent = amigo;
        lista.appendChild(item);
    });
}

// Función para sortear un amigo al azar //
function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("Agrega al menos un nombre antes de sortear.");
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * listaAmigos.length);
    const amigoSorteado = listaAmigos[indiceSorteado];

    // Mostrar el resultado en la página //
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>🎉 ${amigoSorteado} es el amigo secreto 🎉</li>`;
}