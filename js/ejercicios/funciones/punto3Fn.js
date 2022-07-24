// 3- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.

// La fórmula del perímetro  es p = 2*(a +b)





var lado1 = lado2 = 0;
var perimetro = 0;

lado1 = preguntarDato();
lado2 = preguntarDato();


escribePerimetro(lado1,lado2);

       
function preguntarDato(){
    return parseFloat(window.prompt("escribe tu medida"));
}    

function escribePerimetro(a,b){
    var perimetro = 2*(a+b);
    document.write("el perimetro de un rectángulo de lados " + a + " y " + b +" es "+perimetro);
}
