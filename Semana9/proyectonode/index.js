//en node se utiliza una sintaxis para imports q se llama CommonJS
//import axios from "axios"
const axios = require('axios');

axios.get('https://reqres.in/api/users?page=2')
.then((respuesta) => console.log(respuesta.data))
.catch((error) => console.log(error))