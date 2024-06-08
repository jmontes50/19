import { v4 as uuidv4 } from 'uuid';

const nameFileUUID = (nombreArchivo) => {
  const [, extension] = nombreArchivo.split(".");
  const newUUID = uuidv4();
  const newName = `${newUUID}.${extension}`
  return newName;
}

const convertDateToLocal = (fechaYHora, zonaHoraria = "es-ES") => {
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      };

    const fecha = new Date(fechaYHora);
    return fecha.toLocaleDateString(zonaHoraria, options);
    //'viernes, 31 de mayo de 2024'
}

export {
    convertDateToLocal,
    nameFileUUID
}

/*
const fecha = new Date("2024-05-31T21:33:58.336Z")
                       
console.log(fecha)

console.log(fecha.getFullYear())

console.log(fecha.getDate())

console.log(fecha.getMinutes())

const options = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

console.log(fecha.toLocaleDateString('es-ES', options))

const hoy = new Date()

console.log(hoy)
//mes dia año
const navidad = new Date("11-25-24")

console.log(navidad)

*/