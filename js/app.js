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
        }, 100);
    }
    else{
        setTimeout(function(){
            borraTexto(texto);
        }, 700);
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
            }, 70);
        }else{
            setTimeout(function(){
                cambiaTextoPrincipal();
            }, 700);
        }
    }

    if ( contadorTexto > repeticiones ) {
        document.getElementById('subtitulo').style.visibility='visible';
        return;
    };
}




/******************************************
 * REDIMENSIONAMOS EL PARALLAX DEL HEADER
 *****************************************/
let altura = window.innerHeight-56;
let plxElement = document.getElementById('parallax-principal');

plxElement.style.height = altura+'px';
