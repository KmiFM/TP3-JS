// 2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

// Mostrar la longitud del arreglo.
// Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
// Añade en última posición la ciudad de París.
// Escribe por pantalla el elemento que ocupa la segunda posición.
// Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.

let nombresCiudades=[];

do {
    
  let ciudad = prompt("Ingrese una ciudad");
  
  nombresCiudades.push(ciudad);
} while (confirm("Desea seguir anotando?"));

document.write(nombresCiudades);

console.log(nombresCiudades.length);


// document.write('<br>'+nombresCiudades[0]);

console.log(nombresCiudades[0]);
console.log(nombresCiudades[2]);
console.log (nombresCiudades[nombresCiudades.length-1]);
nombresCiudades.push=('París');
document.write(nombresCiudades);
console.log(nombresCiudades[1]);

//modificar elementos de un arreglo (se coloca la posicion a cambiar entre [])
nombresCiudades[1] = 'Barcelona';
document.write(nombresCiudades);