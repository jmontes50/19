// importar el componente, no necesita ponerse la extensión, no hay necesidad de poner .jsx .js
import Titulo from "./Titulo";

//1. el nombre del componente tiene que comenzar con mayúsculas
const App = () => {
  const titulo = "Ají de gallina";

  const saludo = () => "Hola";

  const adios = () => {
    alert("Byes!!!!")
  }

  // 2. tiene que retornar JSX (html)
  return (
    // 2.1 en el return SOLAMENTE se retorna 01 SOLO ELEMENTO
    // <> es un Fragment
    <> 
      {/* <h2 className="red">{titulo}</h2> */}
      <Titulo texto="Denys" numero={1}/>
      {/* Titulo({texto: "nombre", numero: 1}) */}
      <Titulo texto="Christian" numero={2}/>
      <Titulo texto="Renzo" numero={3}/>
      <Titulo texto="Roy" numero={4}/>
      <p>{saludo()} Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ullam voluptatum cupiditate.{50 + 60}</p>
      <label htmlFor="nombre">Nombre:</label>
      {/* TODA ETIQUETA TIENE QUE TENER SU CIERRE */}
      <input id="nombre" />
      {/* onClick, onSubmit, onDoubleClick, onChange */}
      <button onClick={(evento) => {alert("Hola!!!! " + evento.target.innerHTML)}}>
        Click!
      </button>
      <button onClick={adios}>
        Byes!!
      </button>
    </>
  )
}

// 3. Tiene que exportarse por defecto el componente
export default App;