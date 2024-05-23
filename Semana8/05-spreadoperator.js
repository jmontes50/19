let pokemon = {
    name: 'Pikachu',
    ataque: 100
}

// let pokemon2 = pokemon;
//spread = esparcir
//spread operator copia el contenido de un objeto
let pokemon2 = { ...pokemon };

pokemon2.ataque = 150;

console.log("POKEMON2: ", pokemon2);

console.log("POKEMON1: ", pokemon);
