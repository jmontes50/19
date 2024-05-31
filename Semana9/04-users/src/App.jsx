// al momento de importar ReactStuff, Librerias, Componentes //ESMODULES import export
import { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    axios
      .get("https://reqres.in/api/users?page=2")
      .then((respuesta) => {
        console.log(respuesta.status);
        console.log(respuesta.data);
        setUsuarios(respuesta.data.data);
        console.log(usuarios);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <select>

      </select>
      {/* renderizado de listas, de datos a JSX */}
      {usuarios.map((user, index) => (
        <div key={user.id}>{user.email}</div>
      ))}
    </div>
  );
};

export default App;
