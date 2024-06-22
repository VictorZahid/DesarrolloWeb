document.addEventListener('DOMContentLoaded', function () {
    // Variables del carrusel
    var carouselItems = document.querySelectorAll('.carousel-item');
    var currentIndex = 0;

    // Mostrar el primer elemento del carrusel
    carouselItems[currentIndex].classList.add('active');

    // Función para mostrar el elemento del carrusel anterior
    function showPrev() {
        carouselItems[currentIndex].classList.remove('active');
        currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
        carouselItems[currentIndex].classList.add('active');
    }

    // Función para mostrar el siguiente elemento del carrusel
    function showNext() {
        carouselItems[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % carouselItems.length;
        carouselItems[currentIndex].classList.add('active');
    }

    // Eventos de clic en los controles del carrusel
    document.querySelector('.carousel-control-prev').addEventListener('click', showPrev);
    document.querySelector('.carousel-control-next').addEventListener('click', showNext);

    // Evento de clic para el botón "Haz clic aquí"
    document.querySelector('#alertButton').addEventListener('click', function () {
        var modal = document.getElementById('imageModal');
        modal.style.display = 'block';
    });

    // Evento de clic para cerrar el modal
    var modal = document.getElementById('imageModal');
    var span = document.getElementsByClassName('close')[0];

    span.onclick = function () {
        modal.style.display = 'none';
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }

    // Evento de scroll para mostrar/ocultar el botón "Volver al inicio"
    window.addEventListener('scroll', function () {
        var scrollPosition = window.scrollY;
        var backToTopButton = document.getElementById('backToTopButton');
        if (scrollPosition + window.innerHeight >= document.body.offsetHeight) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    // Evento de clic para el botón "Volver al inicio"
    document.querySelector('#backToTopButton').addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Evento de scroll para ocultar/mostrar la barra de navegación
    window.addEventListener('scroll', function () {
        var scrollPosition = window.scrollY;
        var header = document.querySelector('header');
        if (scrollPosition > 100) {
            header.style.opacity = '0';
        } else {
            header.style.opacity = '1';
        }
    });

    // Evento de scroll para cambiar el color de fondo del contenido principal
    window.addEventListener('scroll', function () {
        var scrollPosition = window.scrollY;
        var mainContent = document.querySelector('main');
        if (scrollPosition > 200) {
            mainContent.style.backgroundColor = '#f0f0f0';
        } else {
            mainContent.style.backgroundColor = '';
        }
    });

    // Evento keydown para mostrar imágenes del carrusel al presionar la tecla Space
    document.addEventListener('keydown', function(event) {
        if (event.code === 'Space') {
            event.preventDefault(); // Prevenir el comportamiento por defecto de la barra espaciadora
            carouselItems.forEach(function(item) {
                item.style.display = 'block';
            });
        }
    });

     // Evento click para mostrar alerta con los datos de la página al hacer clic en "Contacto"
     document.getElementById('contactoLink').addEventListener('click', function() {
        alert('Contacto\nNombre:Página Informativa \nAutor: Marco \nDescripción: Pagina para dar a conocer sobre nosotros.');
    });

     // Evento click para mostrar alerta con los datos de la página al hacer clic en "Servicios"
     document.getElementById('serviciosLink').addEventListener('click', function() {
         alert('Servicios \nInformacion \nImagenes \nDatos de Contacto');
    });
});
