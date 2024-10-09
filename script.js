

let currentSlide = 0;
const intervalTime = 1500; // tiempo

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-image');
    
    if (index >= slides.length) currentSlide = 0; 
    if (index < 0) currentSlide = slides.length - 1; 

    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === currentSlide) {
            slide.classList.add('active');
        }
    });
}

// Función para avanzar al siguiente slide
function nextSlide() {
    currentSlide++;
    showSlide(currentSlide);
}

// Iniciar el carrusel
setInterval(nextSlide, intervalTime);

// Iniciar mostrando el primer slide
showSlide(currentSlide);


function moveSlide(step) {
    currentSlide += step;
    showSlide(currentSlide);
}

// Mostrar el primer slide al cargar
showSlide(currentSlide);


document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const messageDiv = document.getElementById('message');

    // Validaciones
    let errors = [];

    // Validación del nombre
    if (name.length < 3) {
        errors.push("El nombre debe tener al menos 3 caracteres.");
    }

    // Validación del correo electrónico
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        errors.push("Por favor, ingrese un correo electrónico válido.");
    }

    // Validación del teléfono
    const phonePattern = /^\d{10}$/; // Cambia según el formato requerido
    if (!phonePattern.test(phone)) {
        errors.push("El teléfono debe contener 10 dígitos.");
    }

    // Mostrar mensajes
    if (errors.length > 0) {
        messageDiv.innerHTML = errors.join('<br>');
        messageDiv.style.color = 'red';
    } else {
        messageDiv.innerHTML = `Nombre: ${name}<br>Correo: ${email}<br>Teléfono: ${phone}`;
        messageDiv.style.color = 'green';

        // Limpiar el formulario
        document.getElementById('contactForm').reset();
    }
});
