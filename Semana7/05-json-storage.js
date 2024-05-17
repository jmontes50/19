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

let platos = ["Ají de Gallina", "Pachamanca", "Filete de Lagarto", "Chanfainita", "Mostrito"];

let platosJSON = JSON.stringify(platos)

console.log(platosJSON);

//--------------------------

let perroJS = JSON.parse(perroJSON);

console.log("perroJS", perroJS);

let platosJS = JSON.parse(platosJSON);

console.log("platosJS", platosJS);