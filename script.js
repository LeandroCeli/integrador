/*********************************** GENERAL **********************************************/

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

/*********************************** PAGINA INICIO ****************************************/
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

/************************************* PAGINA CONTACTO *********************************************/

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
            checkbox.checked = false;
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
            checkbox.checked = false;

            btns.forEach(btn => btn.disabled = true); // Deshabilitar botones si hay error
        } else {
            mensajeapellido.textContent = ''; // Limpiar mensaje si está correcto
        }
    }


// Validar el campo "email" al cambiar el checkbox
const email = document.querySelector('#email').value.trim();
const mensajeEmail= document.querySelector('#mensaje-email');
const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (!checked) {
    // Si el checkbox no está marcado, limpiar los mensajes
    mensajeNombre.textContent = '';
} else {
    // Validar el apellido  si el checkbox está marcado
    if (!email) 
    {
        mensajeEmail.textContent = 'El Email   es requerido.';
        checkbox.checked = false;
        btns.forEach(btn => btn.disabled = true); // Deshabilitar botones si hay error
    } else 
    {
        if (!regexEmail.test(email)) 
        {
            mensajeEmail.textContent = 'El Email no es válido.';
            checkbox.checked = false;
            btns.forEach(btn => btn.disabled = true); // Deshabilitar botones si hay error
        } 
        else
        {
            mensajeEmail.textContent = ''; // Limpiar mensaje si está correcto
        }
        
    }
}
});



formulario.addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que se envíe el formulario

    let isValid = true; 

    // Validar "Nombre"
    const nombre = document.querySelector('#nombre').value.trim();
    const mensajeNombre = document.querySelector('#mensaje-nombre');
    if (!nombre) {
        mensajeNombre.textContent = 'El nombre es requerido.';
        isValid = false;
    } else {
        mensajeNombre.textContent = ''; // Limpiar mensaje si está correcto
    }

    // Validar  "Apellido"
    const apellido = document.querySelector('#apellido').value.trim();
    const mensajeApellido = document.querySelector('#mensaje-apellido');
    if (!apellido) {
        mensajeApellido.textContent = 'El apellido es requerido.';
        isValid = false;
    } else {
        mensajeApellido.textContent = ''; // Limpiar mensaje si está correcto
    }

    // Validar "Email"
    const email = document.querySelector('#email').value.trim();
    const mensajeEmail = document.querySelector('#mensaje-email');
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
        mensajeEmail.textContent = 'El Email es requerido.';
        isValid = false;
    } else if (!regexEmail.test(email)) {
        mensajeEmail.textContent = 'El Email no es válido.';
        isValid = false;
    } else {
        mensajeEmail.textContent = ''; // Limpiar mensaje si está correcto
    }

    // Validar el campo "Teléfono" (opcional) pero si ingresa que sea válido lo ingresado 
const telefono = document.querySelector('#telefono').value.trim();
const mensajeTelefono = document.querySelector('#mensaje-telefono');
const regexTelefono = /^\d+$/; // Solo números

if (telefono) {
    if (!regexTelefono.test(telefono)) {
        mensajeTelefono.textContent = 'El teléfono debe contener solo números.';
        isValid = false;
    } else if (telefono.length < 10 || telefono.length > 15) { 
        mensajeTelefono.textContent = 'El teléfono debe tener entre 10 y 15 dígitos.';
        isValid = false;
    } else {
        mensajeTelefono.textContent = ''; // Limpiar mensaje si está correcto
    }
}
    // Captura el mensaje
    const mensaje = document.querySelector('#mensaje').value.trim();

    // Si todo es válido, mostrar los datos enviados
    if (isValid) {
        const resultadoDiv = document.querySelector('#resultado');
        resultadoDiv.innerHTML = `
            <h2>Datos Enviados</h2>
            <p><strong>Nombre:</strong> ${nombre}</p>
            <p><strong>Apellido:</strong> ${apellido}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Teléfono:</strong> ${telefono || 'No proporcionado'}</p>
             <p><strong>Mensaje:</strong> ${mensaje || 'No proporcionado'}</p>
        `;
        resultadoDiv.style.border = "1px solid #ddd";
        formulario.reset(); // Limpia los campos
       
    }
});




 




