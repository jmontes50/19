// al momento de importar ReactStuff, Librerias, Componentes //ESMODULES import export
import { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [pagina, setPagina] = useState(1);
  const [totalPaginas, setTotalPaginas] = useState(1);

  const options = (num) => {
    let opts = [];
    for(let i = 1; i <= num; i++){
      opts.push(<option value={i} key={i}>Página {i}</option>)
    }
    console.log("OPTS: ", opts)
    return opts;
  }

  useEffect(() => {
    axios
      // .get("https://reqres.in/api/users?page=2")
      .get(`https://reqres.in/api/users?page=${pagina}`)
      .then((respuesta) => {
        console.log(respuesta.status);
        console.log(respuesta.data);
        setUsuarios(respuesta.data.data);
        setTotalPaginas(respuesta.data.total_pages);
        console.log(usuarios);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      {/* quiero mostrar la página en la que estoy */}
      <select>
        {options(totalPaginas)}
      </select>
      {/* renderizado de listas, de datos a JSX */}
      {usuarios.map((user, index) => (
        <div key={user.id}>{user.email}</div>
      ))}
    </div>
  );
};

export default App;
