/* SCRIPTS PERSONALIZADOS */


/******************************************
 * ESTA SECCIÓN CAMBIA EL TEXTO PRINCIPAL
 *****************************************/
let contadorTexto = 0;
let texto1 = 'Samuel Ramírez';
let texto2 = 'Desarrollador Web';
let textElem = document.getElementById('textoPrincipal');
let indexTexto = 0;
let repeticiones = 10;

/* Intercalamos los textos */
function cambiaTextoPrincipal(){
    if ( contadorTexto % 2 === 0 ) textoPrincipal( texto1 );
    if ( contadorTexto % 2 !== 0 ) textoPrincipal( texto2 );
    
    contadorTexto++;
}

cambiaTextoPrincipal();

/* Función que escribe el texto principal */
function textoPrincipal( texto ){
    if ( indexTexto < texto.length ){
        textElem.innerHTML += texto.charAt(indexTexto);
        indexTexto++;

        setTimeout(function(){
            textoPrincipal(texto);
        }, 70);
    }
    else{
        setTimeout(function(){
            borraTexto(texto);
        }, 1500);
    }
}

/* Función que borra el texto principal */
function borraTexto(texto){
    if ( contadorTexto <= repeticiones ){
        if ( indexTexto >= 0 ){
            textElem.innerHTML = textElem.innerHTML.substring(0,  indexTexto );
            indexTexto--;
    
            setTimeout(function(){
                borraTexto(texto);
            }, 50);
        }else{
            setTimeout(function(){
                cambiaTextoPrincipal();
            }, 500);
        }
    }

    if ( contadorTexto > repeticiones ) {
        return subtitulo();
    };
}

function subtitulo(){
    let encabezado = document.getElementById('encabezado');
    let subtitulo = document.createElement('h3');
    let iam = document.getElementById('iam');
    let newiam = iam;

    newiam.classList.add('animated', 'slideInUp');
    subtitulo.classList.add('white-text', 'subtitulo', 'animated', 'slideInUp');
    subtitulo.innerHTML = 'Web Developer';
    
    encabezado.removeChild(iam);
    encabezado.appendChild(newiam);
    encabezado.appendChild(subtitulo);
}


/******************************************
 * REDIMENSIONAMOS EL PARALLAX DEL HEADER
 *****************************************/
let altura = window.innerHeight-56;
let plxElement = document.getElementById('parallax-principal');

plxElement.style.height = altura+'px';


/******************************************
 * AGREGAMOS ESTILOS DEPENDIENDO EL ANCHO DE LA PANTALLA
 *****************************************/
let anchoPantalla = window.innerWidth;
let aboutContainer = document.getElementById('about-container');

if (anchoPantalla > 600) aboutContainer.classList.add('valign-wrapper');


/******************************************
 * REDIMENSIONAMOS LOS ELEMENTOS CUANDO HAYA CAMBIOS EN EL TAMAÑO DE LA PANTALLA
 *****************************************/

window.addEventListener('resize', () => {
    anchoPantalla = window.innerWidth;
    
    if (anchoPantalla > 600) {
        aboutContainer.classList.add('valign-wrapper');
    } else {
        aboutContainer.classList.remove('valign-wrapper');
    }

    altura = window.innerHeight-56;
    plxElement.style.height = altura+'px';
})


/******************************************
 * TEXTO COPYRIGHT
 *****************************************/
let copyrightText = `Samuel Ramírez | CDMX 2016 - ${ new Date().getFullYear() }`;
let copyrightElem = document.getElementById('copyright-text');
copyrightElem.innerText = copyrightText;


/******************************************
 * FUNCION QUE AVANZA EL CARRUSEL
 *****************************************/
let carouselElem = document.getElementById('carousel-tech');

function avanzaCarousel(){
    setTimeout(() => {
        let carousel = M.Carousel.getInstance(carouselElem);
        carousel.next();
        avanzaCarousel();
    }, 5000);
}
// avanzaCarousel();



/******************************************
 * CONTADORES
 *****************************************/
// redimensionamos el div
 let contadoresElem = document.getElementById('contadores');
contadoresElem.style.height = '300px';

// buscamos la posicion del div en el documento
let contadoresX = contadoresElem.offsetTop;
// console.log(contadoresX);

let altoPantalla = window.innerHeight;
let alturaDisparaA = contadoresX-(Math.round(altoPantalla/2));
let alturaDisparaB = contadoresX+(Math.round(altoPantalla/2));
// alturaPantalla, alturaDiv, alturaA, AlturaB
// console.log(altoPantalla, contadoresX, alturaDisparaA, alturaDisparaB);

let aniosTotales = (new Date().getFullYear())-(new Date('2016').getFullYear()+1);
let diasTrabajadosXanio = 20*12;

// establecemos los datos
let horasTrabajadas = 8*aniosTotales*diasTrabajadosXanio;
let proyectosTerminados = aniosTotales*18;
let lineasCodigo = proyectosTerminados*3500;
let tazasCafe = diasTrabajadosXanio*aniosTotales*3;

// determinamos si ha sido visible el div
let contadoresVisible = false;

// verificamos el scroll para disparar la funcion
document.addEventListener('scroll', function(){
    // console.log(window.pageYOffset);
    
    if( !contadoresVisible && (window.pageYOffset >= alturaDisparaA && window.pageYOffset <= alturaDisparaB) ){
        // console.log('ES AQUI');
        contadoresVisible = true;
        activaContadores();
    }
});

function activaContadores(){
    contadorHoras();
    contadorProyectos();
    contadorLineas();
    contadorTazas();
}

function contadorHoras( iteracion=0 ){
    let horasElem = document.getElementById('horas-trabajo');
    
    iteracion+=50;
    setTimeout(() => {
        horasElem.innerText=iteracion.toLocaleString('es-MX');
        if (iteracion < horasTrabajadas) {
            contadorHoras(iteracion);
        }
    }, 5);
}

function contadorProyectos( iteracion=0 ){
    let proyectosElem = document.getElementById('proyectos-terminados');
    
    iteracion+=2;
    setTimeout(() => {
        proyectosElem.innerText=iteracion.toLocaleString('es-MX');
        if (iteracion < proyectosTerminados) {
            contadorProyectos(iteracion);
        }
    }, 40);
}

function contadorLineas( iteracion=0 ){
    let lineasElem = document.getElementById('lineas-codigo');
    
    iteracion+=2000;
    setTimeout(() => {
        lineasElem.innerText=iteracion.toLocaleString('es-MX');
        if (iteracion < lineasCodigo) {
            contadorLineas(iteracion);
        }
    }, 1);
}

function contadorTazas( iteracion=0 ){
    let tazasElem = document.getElementById('tazas-cafe');
    
    iteracion+=20;
    setTimeout(() => {
        tazasElem.innerText=iteracion.toLocaleString('es-MX');
        if (iteracion < tazasCafe) {
            contadorTazas(iteracion);
        }
    }, 5);
}