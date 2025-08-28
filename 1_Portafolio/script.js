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
const openLink = document.querySelector('.open-popup');
const popup = document.getElementById('popup');
const closeBtn = document.querySelector('.close-popup');

openLink.addEventListener('click', function(e) {
  e.preventDefault();
  popup.style.display = 'block';
});

closeBtn.addEventListener('click', function() {
  popup.style.display = 'none';
});

window.addEventListener('click', function(e) {
  if (e.target === popup) {
    popup.style.display = 'none';
  }
});