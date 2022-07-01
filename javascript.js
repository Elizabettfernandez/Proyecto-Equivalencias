function kelvin(){
   let dato = parseFloat (prompt('Ingrese temperatura en Celsius'));
         
    let modulo = dato+273.15;
    console.log(modulo);
        
    let equivalencias = document.getElementById('mensaje');
    equivalencias.innerHTML = modulo;
    }


function fahrenheit(){
    let dato = parseFloat (prompt('Ingrese temperatura en Celsius'));
              
    let modulo = ( dato*9/5)+ 32;
    console.log(modulo);
             
    let equivalencias = document.getElementById('mensaje');
    equivalencias.innerHTML = modulo;
}

function reseteo() {
    let reset = 0;
    let calculos = document.getElementById('mensaje');
    calculos.innerHTML = reset;
}
            