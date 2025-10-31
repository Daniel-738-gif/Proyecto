

function mostrarHora() {
	const ahora = new Date();
    console.log("Son las", ahora.toLocaleTimeString());
}
 
////Boton que cambia mensaje
 const boton = document.getElementById("miBoton");
                boton.addEventListener("click", () => {
                    document.getElementById("mensaje").textContent = "¡Gracias por hacer clic!";
                });

                ////Otro boton
const boton3 = document.getElementById("btn3");
             boton3.addEventListener("click", () => {
                document.getElementById("mensaje2").textContent = "prueba de mensaje en js";
                });

////Detectar tecla presionada
 document.addEventListener("keydown", function(event) {
    document.getElementById("tecla").textContent = 
      "Has presionado: " + event.key;
  });

///Cambiar color de fondo

 function cambiarFondo() {
    const colorHex = "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");
    document.body.style.backgroundColor = colorHex;
    document.getElementById("colorActual").textContent = "Color actual: " + colorHex;
  }

////Mostrar fecha actual
  function mostrarFecha() {
    const hoy = new Date();
    const opciones = { year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById("fechaActual").textContent = "La fecha actual es: " + hoy.toLocaleDateString("es-ES", opciones);
    
  }


