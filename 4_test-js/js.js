

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
///Fecha y hora
  document.getElementById("fechaHora").addEventListener("click", () => {
    const fecha = new Date();
    document.getElementById("demo").textContent = fecha;
  } );

  /////dias hata navidad
  function diasHastaNavidad() {
    const hoy = new Date();
    const navidad = new Date(hoy.getFullYear(), 11, 25); 
    if (hoy > navidad) {
        navidad.setFullYear(navidad.getFullYear() + 1);
    }
    const diferencia = navidad - hoy;
    const dias = Math.ceil(diferencia / (1000 * 60 * 60 * 24));
    return dias;
}

document.getElementById("diasNavidad").addEventListener("click", () => {
    const dias = diasHastaNavidad();
    document.getElementById("resultado").textContent = "Faltan " + dias + " días para Navidad.";
});



//// decoraciones arrastrables
let active = null;
let offsetX = 0;
let offsetY = 0;

document.querySelectorAll(".decoraciones img").forEach(el => {
  el.addEventListener("mousedown", e => {
    active = el;
    offsetX = e.clientX - el.offsetLeft;
    offsetY = e.clientY - el.offsetTop;
    el.style.cursor = "grabbing";
  });
});

document.addEventListener("mousemove", e => {
  if (active) {
    active.style.left = (e.clientX - offsetX) + "px";
    active.style.top = (e.clientY - offsetY) + "px";
  }
});

document.addEventListener("mouseup", () => {
  if (active) {
    active.style.cursor = "grab";
    active = null;
  }
});

document.querySelectorAll(".decoraciones img").forEach(el =>{
  const maxX = window.innerWidth - 50;
  const maxY = window.innerHeight - 50;

  el.style.left = Math.random() * maxX + "px";
  el.style.left = Math.random() * MaxY + "px";
  
  })







const panel = document.getElementById("panelLateral");
const toggleBtn = document.getElementById("togglePanel");

toggleBtn.addEventListener("click", () => {
  panel.classList.toggle("visible");
  panel.classList.toggle("oculto");
});






let nieveActiva = false;

function generarNieve() {
  const contenedor = document.getElementById("nieveContenedor");
  contenedor.innerHTML = ""; // Limpia copos anteriores

  let i = 0;
  while (i < 50) {
    const copo = document.createElement("span");
    const tamaño = Math.random() * 8 + 4;
    const duracion = Math.random() * 5 + 5;
    const retraso = Math.random() * 5;
    const izquierda = Math.random() * window.innerWidth;

    copo.style.width = copo.style.height = `${tamaño}px`;
    copo.style.left = `${izquierda}px`;
    copo.style.animationDuration = `${duracion}s`;
    copo.style.animationDelay = `${retraso}s`;
    copo.textContent = "❆";
    copo.style.background = "none";
    copo.style.fontSize = "26px";

    contenedor.appendChild(copo);
    i++;
  }
}

document.getElementById("toggleNieve").addEventListener("click", () => {
  nieveActiva = !nieveActiva;
  const contenedor = document.getElementById("nieveContenedor");
  const boton = document.getElementById("toggleNieve");

  if (nieveActiva) {
    generarNieve();
    boton.textContent = "⛔ Desactivar nieve";
  } else {
    contenedor.innerHTML = "";
    boton.textContent = "❄️ Activar nieve";
  }
});


