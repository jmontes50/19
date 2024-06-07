import { ref, uploadBytes } from "firebase/storage";
import { storage } from "../config/Firebase";

const uploadFile = async (imagen) => {
  try {
    //referencia del archivo a subir
    const refArchivo = ref(storage, "nuevaimagen.jpg");

    const resultado = await uploadBytes(refArchivo, imagen);
    console.loig("Resultado: ", resultado)
  } catch (error) {
    console.log(error)
  }
};

export {
  uploadFile
}