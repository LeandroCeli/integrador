

let currentSlide = 0;
const intervalTime = 5000; // tiempo

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


function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

function toggleDropdown() {
    const dropdownContent = document.querySelector('.dropdown-content');
    dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
}


const checkbox = document.querySelector('#terminos');
const btns = document.querySelectorAll("#Formulario button");
const formulario = document.querySelector('#Formulario');

checkbox.addEventListener("change", function() {
    const checked = this.checked;

    // Habilitar o deshabilitar los botones
    for (const btn of btns) {
        btn.disabled = !checked; // Si está marcado, habilitar; de lo contrario, deshabilitar
    }

    // Validar el campo "Nombre" al cambiar el checkbox
    const nombre = document.querySelector('#nombre').value.trim();
    const mensajeNombre = document.querySelector('#mensaje-nombre');

    if (!checked) {
        // Si el checkbox no está marcado, limpiar los mensajes
        mensajeNombre.textContent = '';
    } else {
        // Validar el nombre si el checkbox está marcado
        if (!nombre) {
            mensajeNombre.textContent = 'El nombre es requerido.';
            btns.forEach(btn => btn.disabled = true); // Deshabilitar botones si hay error
        } else {
            mensajeNombre.textContent = ''; // Limpiar mensaje si está correcto
        }
    }

    // Validar el campo "apellido" al cambiar el checkbox
    const apellido = document.querySelector('#apellido').value.trim();
    const mensajeapellido = document.querySelector('#mensaje-apellido');

    if (!checked) {
        // Si el checkbox no está marcado, limpiar los mensajes
        mensajeNombre.textContent = '';
    } else {
        // Validar el apellido  si el checkbox está marcado
        if (!apellido) {
            mensajeapellido.textContent = 'El apellido es requerido.';
            btns.forEach(btn => btn.disabled = true); // Deshabilitar botones si hay error
        } else {
            mensajeapellido.textContent = ''; // Limpiar mensaje si está correcto
        }
    }


// Validar el campo "email" al cambiar el checkbox
const email = document.querySelector('#email').value.trim();
const mensajeEmail= document.querySelector('#mensaje-email');

if (!checked) {
    // Si el checkbox no está marcado, limpiar los mensajes
    mensajeNombre.textContent = '';
} else {
    // Validar el apellido  si el checkbox está marcado
    if (!email) {
        mensajeEmail.textContent = 'El Telefono  es requerido.';
        btns.forEach(btn => btn.disabled = true); // Deshabilitar botones si hay error
    } else {
        mensajeEmail.textContent = ''; // Limpiar mensaje si está correcto
    }


}

});

// Validación al enviar el formulario
formulario.addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío nativo del formulario

    const nombre = document.querySelector('#nombre').value.trim();
    const mensajeNombre = document.querySelector('#mensaje-nombre');
    const errores = [];

    // Validación del campo "Nombre"
    if (!nombre) {
        errores.push('El nombre es requerido.');
        mensajeNombre.textContent = 'El nombre es requerido.';
    } else {
        mensajeNombre.textContent = ''; // Limpiar mensaje si está correcto
    }

    // Aquí puedes agregar más validaciones para otros campos...

    // Si no hay errores, procesar el formulario
    if (errores.length === 0) {
        console.log('Formulario enviado correctamente');
        // Aquí puedes manejar los datos enviados, mostrar resultados, etc.
    }
});






 




