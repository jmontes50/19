import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../config/Firebase";
import { nameFileUUID } from "../utils/utils";

const uploadFile = async (imagen) => {
  try {
    const nameWithExt = nameFileUUID(imagen.name);
    console.log({nameWithExt})
    //referencia del arch vo a subir
    const refArchivo = ref(storage, nameWithExt);
    // const refArchivo = ref(storage, `fotos/${nameWithExt}`);

    const resultado = await uploadBytes(refArchivo, imagen);
    const urlArchivo = await getDownloadURL(refArchivo);
    
    return urlArchivo;
  } catch (error) {
    console.log(error)
  }
};

export {
  uploadFile
} 