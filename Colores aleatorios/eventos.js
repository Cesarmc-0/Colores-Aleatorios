const boton = document.querySelector('button');
const color = document.getElementById('color');
const divArriba = document.getElementById('div-arriva');

function generarColorHexadecimal() {
    let digitos = '0123456789ABCDEF';
    let colorHex = '#';
    for (let i = 0; i < 6; i++) {
       let indiceAleatorio = Math.floor(Math.random() * 16);
         colorHex += digitos[indiceAleatorio];
    }
    return colorHex;
}
boton.addEventListener('click', function() {
    let colorAleatorio = generarColorHexadecimal();
    let colorAnterior = document.body.style.backgroundColor;
    
    color.textContent = colorAleatorio;
    divArriba.style.backgroundColor = colorAnterior;
    document.body.style.backgroundColor = colorAleatorio;
})