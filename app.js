const texto = document.getElementById("texto");
const botonEncriptar = document.querySelector(".boton-primario");
const botonDesencriptar = document.querySelector(".boton-secundario");
const mensaje = document.querySelector(".mensaje-encriptado");
const botonCopiar = document.querySelector(".boton-copiar");

// Funcion a ejecutarse cuando se detecte un click en el boton de encriptar
botonEncriptar.addEventListener('click', () => {
    // Mensaje en blanco donde se ira concatenando el mensaje encriptado
    let mensajeEncriptado = '';
    // For para evaluar cada caracter de la cadena de texto
    for (let i = 0; i < texto.value.length; i++) {
        switch (texto.value[i]) { // Dependiendo del valor del caracter se concatenara el equivalente encriptado 
            case "a":
                mensajeEncriptado += "ai";
                break;
            case "e":
                mensajeEncriptado += "enter";
                break;
            case "i":
                mensajeEncriptado += "imes";
                break;
            case "o":
                mensajeEncriptado += "ober";
                break;
            case "u":
                mensajeEncriptado += "ufat";
                break;
            default:
                mensajeEncriptado += texto.value[i];
                break;
        } 
    }
    mensaje.textContent = mensajeEncriptado; //Se pasa el mensaje encriptado al contenido del elemento correspondiente
    if (!(mensajeEncriptado.length == 0)) { // El mensaje se mostrara solo si no esta vacio
        document.querySelector(".contenedor-no-encontrado").style.display = "none"
        document.querySelector(".contenedor-encriptador").style.justifyContent = "space-between";
        mensaje.style.display = "block";
        botonCopiar.style.display = "block";
    } else { // Caso contrario no se mostrara el mensaje ni el boton de copiar al portapapeles
        document.querySelector(".contenedor-no-encontrado").style.display = "block";
        document.querySelector(".contenedor-encriptador").style.justifyContent = "center";
        mensaje.style.display = "none";
        botonCopiar.style.display = "none";
    }
});

// Funcion a ejecutarse cuando se detecte un click en el boton de desencriptar
botonDesencriptar.addEventListener('click', () => {
    let mensajeDesencriptado = ''; // Mensaje en blanco donde se concatenara el mensaje desencriptado
    var i = 0;
    while (i < texto.value.length) { // Se evaluara partes del texto para detectar los caracteres encriptados
        if (texto.value.substring(i, i + 2) === 'ai') { // La funcion substring toma una parte del string
            mensajeDesencriptado += "a"; // Si esa parte del string coincide con el caracter encriptado 
            i += 2;                      // este se reemplazara con el caracter correspondiente y se saltara esa parte del string
        } else if (texto.value.substring(i, i + 5) === "enter") {
            mensajeDesencriptado += "e";
            i += 5;
        } else if (texto.value.substring(i, i + 4) === "imes") {
            mensajeDesencriptado += "i";
            i += 4;
        } else if (texto.value.substring(i, i + 4) === "ober") {
            mensajeDesencriptado += "o";
            i += 4;
        } else if (texto.value.substring(i, i + 4) === "ufat") {
            mensajeDesencriptado += "u";
            i += 4;
        } else {
            mensajeDesencriptado += texto.value[i];
            i++;
        }
    }
    mensaje.textContent = mensajeDesencriptado; // Mensaje desencriptado pasa al elemento correspondiente
    if (!(mensajeDesencriptado.length == 0)) { // El mensaje se mostrara solo si no esta vacio
        document.querySelector(".contenedor-no-encontrado").style.display = "none";
        document.querySelector(".contenedor-encriptador").style.justifyContent = "space-between";
        mensaje.style.display = "block";
        botonCopiar.style.display = "block";
    } else { // Caso contrario no se mostrara el mensaje ni el boton de copiar al portapapeles
        document.querySelector(".contenedor-no-encontrado").style.display = "block";
        document.querySelector(".contenedor-encriptador").style.justifyContent = "center";
        mensaje.style.display = "none";
        botonCopiar.style.display = "none";
    }
});

// Funcion para copiar al portapapeles lo que este en el elemento donde se muestra el mensaje
botonCopiar.addEventListener('click', () => {
    navigator.clipboard.writeText(mensaje.textContent);
    // Alerta de texto copiado
    alert("Texto copiado");
});

mensaje.style.display = "none"; // El mensaje y el boton de copiar no se muestran al cargar la pagina
botonCopiar.style.display = "none";
