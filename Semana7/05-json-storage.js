let perro = {
    nombre: "San fernando",
    raza: "Salchicha",
    color: "Café"
}

console.log(typeof perro);

//Tenemos disponible un objeto JSON con métodos para trabajar con jsons
let perroJSON = JSON.stringify(perro);

console.log(perroJSON);

console.log("typeof perroJSON: ", typeof perroJSON);