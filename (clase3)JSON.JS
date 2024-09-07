const pelicula = {
    "titulo": "Inception",
    "director": "Christopher Nolan",
    "Año": 2010
}
console.log(typeof pelicula);
const peliculaJSON = JSON.stringify(pelicula);
console.log(typeof peliculaJSON);
localStorage.setItem('pelicula', peliculaJSON)
const peliculaguardada = localStorage.getItem('pelicula');
const peliculaobjeto = JSON.parse(peliculaguardada);
console.log(peliculaobjeto);