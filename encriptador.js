 var imagen = document.querySelector('.resultado')
 var copiar = document.querySelector('#copiar');


 function eliminarImagen(params) {
    copiar.style.display = 'block';
    imagen.style.backgroundImage  = 'none';
    imagen.style.justifyContent = 'center';
    imagen.style.alignItems = 'center'; 
    imagen.style.padding = '1rem';
 }


function clearText(element) {
        element.value = '';
  
}

function resetText(element) {
    if (element.value === '') {
        element.value = 'ingrese el texto aquí';
    }
}

function get_encriptar() {
    let elements = document.querySelector('.dato').value.toLowerCase();
    if(elements!="ingrese el texto aquí")
    {
        eliminarImagen();
        elements = encriptar(elements);
        document.querySelector(".resultado__p1").innerHTML='El mensaje ha sido encriptado con exito:<br> <br>';
        document.querySelector(".resultado__p2").innerHTML=elements;

    }
}

function get_desencriptar(){
    let elements = document.querySelector('.dato').value.toLowerCase();
    if(elements!="ingrese el texto aquí")
        {
            eliminarImagen();  
            elements = desencriptar(elements);
            document.querySelector(".resultado__p1").innerHTML='El mensaje ha sido desencriptado con exito:<br>';
            document.querySelector(".resultado__p2").innerHTML=elements;
    
        }


}



function copiarTexto(params) {
    var copyText = document.querySelector(".resultado__p2");
    if(copyText.textContent!="Ingresa el texto que desees encriptar o desencriptar.")
    {
    // Select the text field
    copyText.textContent;
    console.log(copyText.textContent)
    // Copy the text inside the text field
     navigator.clipboard.writeText(copyText.textContent).then(() => {
        console.log('Texto copiado al portapapeles');
        // Optionally provide user feedback
    }).catch(err => {
        console.error('Error al copiar texto: ', err);
    });

}
}
  
    


function desencriptar(dato) {
    dato = dato.replaceAll("ufat", "u");
    dato = dato.replaceAll("ober", "o");
    dato = dato.replaceAll("imes", "i");
    dato = dato.replaceAll("enter", "e");
    dato = dato.replaceAll("ai", "a");

    return dato;
}

function encriptar(dato){
let elements = "";
dato.split('').forEach((char) => {
    switch (char) {
        case 'a':
            elements += 'ai';
            break;
        case 'e':
            elements += 'enter';
            break;
        case 'i':
            elements += 'imes';
            break;
        case 'o':
            elements += 'ober';
            break;
        case 'u':
            elements += 'ufat';
            break;
        default:
            // Añadir el carácter tal cual si no coincide con ninguno de los casos
            elements += char;
            break;
    }})
    return elements;

}