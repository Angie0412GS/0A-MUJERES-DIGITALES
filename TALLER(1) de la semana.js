//Angie Gonzalez primer taller de la semana

//1. Variables & Condicionales: 

let Temperatura = 40;
if (Temperatura > 30){
    console.log("Hace calor")
}else {
    console.log("Hace Frío")
}

//2. Ciclos:  

for( let numero = 1; numero <= 10; numero++){
console.log  (numero);
}

//3. Arreglos: 

let colorfa = ['Rosa', 'Negro', 'Azul'];
console.log (colorfa [0])

//4. Funciones:  

function suma (a, b){
    return a + b;
}
 console.log(suma(12, 4));

 //5. JSON: 
const libro ={
    "Título" : "La lluvia sabe por qué",
    "Autor" : "María Fernanda Heredia",
    "Año de la pubicación" : 2013
}
console.log(typeof libro);
console.log(libro);
//convercsion a string
const libroJSON = JSON.stringify (libro);
console.log(typeof libroJSON);
console.log(libroJSON);

//Desafío final:  

function retornarNumerosPares(numeros) {
    let numerosPares = []; 
    for (let i = 0; i < numeros.length; i++) {
      if (numeros[i] % 2 === 0) {
        numerosPares.push(numeros[i]); 
      }
    }
    return numerosPares; 
  }
  
  let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let numerosPares = retornarNumerosPares(numeros);
  console.log(numerosPares); 