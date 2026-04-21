// Desplazamiento suave
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Botón volver arriba
const btnTop = document.createElement('button');
btnTop.innerText = '↑ Ir al Inicio';
btnTop.style.position = 'fixed';
btnTop.style.bottom = '20px';
btnTop.style.right = '20px';
btnTop.style.padding = '10px 15px';
btnTop.style.background = '#3498db';
btnTop.style.color = 'white';
btnTop.style.border = 'none';
btnTop.style.borderRadius = '5px';
btnTop.style.cursor = 'pointer';
btnTop.style.display = 'none';
document.body.appendChild(btnTop);

window.addEventListener('scroll', () => {
    btnTop.style.display = window.scrollY > 300 ? 'block' : 'none';
});

btnTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Validación de formulario
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('¡Gracias por tu mensaje! Pronto nos pondremos en contacto.');
    this.reset();
});
