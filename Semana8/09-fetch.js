//fetch utiliza promesas
//fetch requiere una url obligatoriamente y puede recibir configuración
fetch("https://reqres.in/api/users?page=2")
    .then((response) => {
        console.log(response);
        //aqui tienes la respuesta
        //pero tienes que convertir el JSON
        // fetch ya tiene el metodo .json() para poder convertir la respuesta a JS
        //ese método devuelve una promesa
        if (response.status === 200) {
            return response.json();
        } else {
            //es como un return pero para errores
            throw new Error("Error al pedir datos")
        }

    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        //algun error de red, implementación
        //no me dice si es que el http fue mal, 404 x ej
        console.log(error);
    });