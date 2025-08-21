const btn = document.getElementById('modo-oscuro');
const body = document.body;

btn.addEventListener('click', () => {
  body.classList.toggle('dark');

    // Update button text/icon
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
