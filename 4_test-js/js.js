function mostrarHora() {
	const ahora = new Date();
    console.log("Son las", ahora.toLocaleTimeString());
}

setInterval(mostrarHora, 1000);
mostrarHora(); // Llamada inicial para mostrar la hora inmediatamente

// Código adicional para pruebas
module.exports = { mostrarHora };



