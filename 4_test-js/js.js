function mostrarHora() {
	const ahora = new Date();
    console.log("Son las", ahora.toLocaleTimeString());
}
 
document.getElementById("mensaje").textContent = "¡Hola desde JS!";
