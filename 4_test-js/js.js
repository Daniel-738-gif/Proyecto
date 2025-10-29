function mostrarHora() {
	const ahora = new Date();
    console.log("Son las", ahora.toLocaleTimeString());
}
 

 const boton = document.getElementById("miBoton");
                boton.addEventListener("click", () => {
                    document.getElementById("mensaje").textContent = "¡Gracias por hacer clic!";
                });

const boton3 = document.getElementById("btn3");
             boton3.addEventListener("click", () => {
                document.getElementById("mensaje2").textContent = "prueba de mensaje en js";
                });