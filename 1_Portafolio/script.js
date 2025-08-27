const btn = document.getElementById('modo-oscuro');
const body = document.body;
const a = document.a;

btn.addEventListener('click', () => {
  body.classList.toggle('dark');

    // Alctualiza texto del botn + icono
      if (body.classList.contains('dark')) 
        {
        btn.textContent = '☀️ Modo claro';
        }   
          else 
        {
          btn.textContent = '🌙 Modo oscuro';
        }
  } 


);
// formulario//
function openModal() {
  document.getElementById('contactModal').style.display = 'block';
}

function closeModal() {
  document.getElementById('contactModal').style.display = 'none';
}

window.onclick = function(event) {
  const modal = document.getElementById('contactModal');
  if (event.target === modal) {
    modal.style.display = 'none';
  }
}