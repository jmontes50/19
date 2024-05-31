import { obtenerUsuarios } from "./service.js";

const main = async () => {
  try {
    const usuarios = await obtenerUsuarios();
    console.table(usuarios.data);
    dibujarUsuarios(usuarios.data);
  } catch (error) {
    console.log(error)
  }
};

const Card = (usuario) => {
  const { first_name, email } = usuario;
  const div = document.createElement('div');
  div.innerHTML = `
  <div>
    <h2>${first_name}</h2>
    <small>${email}</small>
  </div>
  `
  return div;
}

const dibujarUsuarios = (usuarios) => {
  const divRoot = document.getElementById('root');
  usuarios.forEach((user) => {
    //la funcion Card me devuelve un div, un elemento
    const newCard = Card(user);
    //appendChild añade un elemento como hijo de otro
    divRoot.appendChild(newCard);
  });
}

main();
