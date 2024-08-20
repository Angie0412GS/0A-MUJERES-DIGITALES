let contador = 0;
for (let i = 1; i <= 10; i++) {
    console.log(i);

    if (i > 5) {
        contador++;
    }
}
console.log("El número de valores mayores que 5 es: " + contador);