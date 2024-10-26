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
// Array de imágenes y enlaces
const imagenes = [
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
const intervalTime = 5000; // tiempo en milisegundos

// Función para actualizar el carrusel
function ActualizarCarousel() {
    const imagenElemento = document.getElementById('carousel-image');
    const linkElemento = document.getElementById('carousel-link');

    if (imagenElemento && linkElemento) { // Comprobar si los elementos existen
        linkElemento.href = imagenes[currentIndex].link;
        imagenElemento.src = imagenes[currentIndex].src;
        imagenElemento.alt = imagenes[currentIndex].alt;
    }
}

// Función para el siguiente slide
function nextSlide() {
    currentIndex = (currentIndex + 1) % imagenes.length;
    ActualizarCarousel();
}

// Función para el slide anterior
function previousSlide() {
    currentIndex = (currentIndex - 1 + imagenes.length) % imagenes.length;
    ActualizarCarousel();
}

// Inicializa el carrusel
function initCarousel() {
    const nextButton = document.querySelector('.next');
    const prevButton = document.querySelector('.prev');

    if (nextButton) {
        nextButton.addEventListener('click', nextSlide);
    }

    if (prevButton) {
        prevButton.addEventListener('click', previousSlide);
    }

    
    if (nextButton || prevButton) {
        setInterval(nextSlide, intervalTime);
        ActualizarCarousel();
    }
}

//DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', initCarousel);



/************************************* PAGINA CONTACTO *********************************************/

document.addEventListener('DOMContentLoaded', () => {
    const checkbox = document.querySelector('#terminos');

    // Solo añadir el evento si el checkbox existe
    if (checkbox) {
        const btns = document.querySelectorAll("#Formulario button");
        const formulario = document.querySelector('#Formulario');

        if (formulario) { // Comprobar si el formulario existe
            checkbox.addEventListener("change", function() {
                const checked = this.checked;

                // Habilitar o deshabilitar los botones
                for (const btn of btns) {
                    btn.disabled = !checked;
                }

                // Validar el campo "Nombre"
                const nombre = document.querySelector('#nombre').value.trim();
                const mensajeNombre = document.querySelector('#mensaje-nombre');

                if (!checked) {
                    mensajeNombre.textContent = '';
                } else {
                    if (!nombre) {
                        mensajeNombre.textContent = 'El nombre es requerido.';
                        checkbox.checked = false;
                        btns.forEach(btn => btn.disabled = true);
                    } else {
                        mensajeNombre.textContent = ''; 
                    }
                }

                // Validar el campo "Apellido"
                const apellido = document.querySelector('#apellido').value.trim();
                const mensajeApellido = document.querySelector('#mensaje-apellido');

                if (!checked) {
                    mensajeApellido.textContent = '';
                } else {
                    if (!apellido) {
                        mensajeApellido.textContent = 'El apellido es requerido.';
                        checkbox.checked = false;
                        btns.forEach(btn => btn.disabled = true);
                    } else {
                        mensajeApellido.textContent = '';
                    }
                }

                // Validar el campo "Email"
                const email = document.querySelector('#email').value.trim();
                const mensajeEmail = document.querySelector('#mensaje-email');
                const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

                if (!checked) {
                    mensajeEmail.textContent = '';
                } else {
                    if (!email) {
                        mensajeEmail.textContent = 'El Email es requerido.';
                        checkbox.checked = false;
                        btns.forEach(btn => btn.disabled = true);
                    } else if (!regexEmail.test(email)) {
                        mensajeEmail.textContent = 'El Email no es válido.';
                        checkbox.checked = false;
                        btns.forEach(btn => btn.disabled = true);
                    } else {
                        mensajeEmail.textContent = '';
                    }
                }
            });
        }
    }

    const formulario = document.querySelector('#Formulario');

    if (formulario) { // Comprobar si el formulario existe
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
                mensajeNombre.textContent = ''; 
            }

            // Validar "Apellido"
            const apellido = document.querySelector('#apellido').value.trim();
            const mensajeApellido = document.querySelector('#mensaje-apellido');
            if (!apellido) {
                mensajeApellido.textContent = 'El apellido es requerido.';
                isValid = false;
            } else {
                mensajeApellido.textContent = ''; 
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
                mensajeEmail.textContent = ''; 
            }

            // Validar "Teléfono" (opcional)
            const telefono = document.querySelector('#telefono').value.trim();
            const mensajeTelefono = document.querySelector('#mensaje-telefono');
            const regexTelefono = /^\d+$/;

            if (telefono) {
                if (!regexTelefono.test(telefono)) {
                    mensajeTelefono.textContent = 'El teléfono debe contener solo números.';
                    isValid = false;
                } else if (telefono.length < 10 || telefono.length > 15) { 
                    mensajeTelefono.textContent = 'El teléfono debe tener entre 10 y 15 dígitos.';
                    isValid = false;
                } else {
                    mensajeTelefono.textContent = ''; 
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
    }
});




 




