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
 * TEXTO COPYRIGHT
 *****************************************/
let copyrightText = `Samuel Ramírez | CDMX 2016 - ${ new Date().getFullYear() }`;
let copyrightElem = document.getElementById('copyright-text');
copyrightElem.innerText = copyrightText;