/*AQUI VAN LOS INICIADORES DE MATERIALIZE*/

/* En cuanto carga la pagina inicializamos los componentes Materialize */
document.addEventListener('DOMContentLoaded', function() {
  /* Iniciador de sidenav */
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems, {
      edge: 'right'
  });

  /* Iniciador de parallax */
  var elems = document.querySelectorAll('.parallax');
  var instances = M.Parallax.init(elems, {});

  /* Inicializador de Carrusel */
  var carouselElem = document.querySelectorAll('.carousel');
  var carouselInstance = M.Carousel.init(carouselElem, {
    numVisible:5,
    shift: 50,
    dist: -40,
    padding:50
  });
});

/* Iniciador de particulas */
particlesJS.load('particles-js', 'assets/particles.json', function() {});