

// formulario//
const openLink = document.getElementById("meta_tabla");
const popup = document.querySelector('.tabla');
const closeBtn = document.querySelector('.cerrar');

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