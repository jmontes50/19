// al momento de importar ReactStuff, Librerias, Componentes //ESMODULES import export
import { useState, useEffect } from "react";
import axios from "axios";
import Select from "./Select";

const App = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [pagina, setPagina] = useState(1);
  const [totalPaginas, setTotalPaginas] = useState(1);

  // const options = (num) => {
  //   let opts = [];
  //   for(let i = 1; i <= num; i++){
  //     opts.push(<option value={i} key={i}>Página {i}</option>)
  //   }
  //   console.log("OPTS: ", opts)
  //   return opts;
  // }

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
      // terminamos lo que va a hacer el efecto y limpiamos
      return () => {
        console.log("Limpiando el componente");
      }
  }, [pagina]);

  return (
    <div>
      {/* quiero mostrar la página en la que estoy */}
      {/* componentes controlados, un input deberia estar amarrado a un estado */}
      {/* <select 
        value={pagina} 
        onChange={(evento) => {
          setPagina(+evento.target.value)
        }}
      >
        {options(totalPaginas)}
      </select> */}
      {/* levantamiento de estado
        lyfting State

      */}
      <Select 
        totalPaginas={totalPaginas} 
        pagina={pagina}
        setPagina={setPagina}
      />
      {/* renderizado de listas, de datos a JSX */}
      {usuarios.map((user, index) => (
        <div key={user.id}>{user.email}</div>
      ))}
    </div>
  );
};

export default App;
