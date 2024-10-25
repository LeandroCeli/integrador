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
const imagenes =[
    { src: "img/chevrolet2.jpg", link: "articulo.html#chevrolet", alt: "Imagen 1" },
    { src: "img/ferarri2.jpg", link: "articulo.html#ferrari", alt: "Imagen 2" },
    { src: "img/bmw2.jpg", link: "articulo.html#bmw", alt: "Imagen 3" },
    { src: "img/lambo2.jpg", link: "articulo.html#lambo", alt: "Imagen 4" },
    { src: "img/tesla2.jpg", link: "articulo.html#tesla", alt: "Imagen 5" },
    { src: "img/peugeot2.jpg", link: "articulo.html#peugeot", alt: "Imagen 6" },
    { src: "img/porsche.jpg", link: "articulo.html#porsche", alt: "Imagen 7" },
    { src: "img/audi.jpg", link: "articulo.html#audi", alt: "Imagen 8" },
    { src: "img/vw2.jpg", link: "articulo.html#volkswagwen", alt: "Imagen 9" },
    { src: "img/ford2.jpg", link: "articulo.html#ford", alt: "Imagen 10" },
    { src: "img/Mercedes.jpg", link: "articulo.html#mercedes", alt: "Imagen 11" },
    { src: "img/toyota.jpg", link: "articulo.html#toyota", alt: "Imagen 12" },
    { src: "img/fiat.jpg", link: "articulo.html#fiat", alt: "Imagen 13" },
];

let currentIndex = 0;
const intervalTime = 5000; // tiempo

function ActualizarCarousel() {
    const imagenElemento = document.getElementById('carousel-image');
    const linkElemento = document.getElementById('carousel-link');

    // Actualiza el enlace y la imagen usando el índice actual
    linkElemento.href = imagenes[currentIndex].link;
    imagenElemento.src = imagenes[currentIndex].src;
    imagenElemento.alt = imagenes[currentIndex].alt;
}

// Función para avanzar al siguiente slide
function nextSlide() {
    currentIndex = (currentIndex + 1) % imagenes.length;
    ActualizarCarousel();
}

function previousSlide() {
    currentIndex = (currentIndex - 1 + imagenes.length) % imagenes.length;
    ActualizarCarousel();
}

document.querySelector('.next').addEventListener('click', nextSlide);
document.querySelector('.prev').addEventListener('click', previousSlide);

// Iniciar el carrusel
setInterval(nextSlide, intervalTime);

ActualizarCarousel();

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

    // Validar el campo "Teléfono" (opcional) pero si ingresa q sea valido lo ingresado 
    const telefono = document.querySelector('#telefono').value.trim();
    const mensajeTelefono = document.querySelector('#mensaje-telefono');
    const regexTelefono = /^\d{10}$/; // Solo números y longitud de 10 dígitos
    if (telefono && !regexTelefono.test(telefono)) {
        mensajeTelefono.textContent = 'El teléfono debe ser numérico y tener 10 dígitos.';
        isValid = false;
    } else {
        mensajeTelefono.textContent = ''; // Limpiar mensaje si está correcto
    }

    // Si todo es válido, mostrar los datos enviados
    if (isValid) {
        const resultadoDiv = document.querySelector('#resultado');
        resultadoDiv.innerHTML = `
            <h2>Datos Enviados</h2>
            <p><strong>Nombre:</strong> ${nombre}</p>
            <p><strong>Apellido:</strong> ${apellido}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Teléfono:</strong> ${telefono || 'No proporcionado'}</p>
            
        `;
        resultadoDiv.style.border = "1px solid #ddd";
        formulario.reset(); // Limpia los campos
       
    }
});




 




