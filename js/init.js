/*AQUI VAN LOS INICIADORES DE MATERIALIZE*/

/* Iniciador de sidenav */
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {
        edge: 'right'
    });
  });

/* Iniciador de parallax */
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems, {});
});

/* Iniciador de particulas */
particlesJS.load('particles-js', 'assets/particles.json', function() {
    // console.log('callback - particles.js config loaded');
  });