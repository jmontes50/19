import { obtenerUsuarios } from "./service.js";

const main = async () => {
  try {
    const usuarios = await obtenerUsuarios();
    console.log(usuarios)
  } catch (error) {
    console.log(error)
  }
};

main();
