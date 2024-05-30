console.log("Hola mundo en node.js");

const saludar = () => "Hola!!!";

console.log(saludar());

fetch("https://reqres.in/api/users?page=2")
.then(res => console.log(res))