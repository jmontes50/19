
//1. el nombre del componente tiene que comenzar con mayúsculas
const App = () => {
  const titulo = "Ají de gallina";

  const saludo = () => "Hola";

  // 2. tiene que retornar JSX (html)
  return (
    // 2.1 en el return SOLAMENTE se retorna 01 SOLO ELEMENTO
    // <> es un Fragment
    <> 
      <h2>{titulo}</h2>
      <p>{saludo()} Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ullam voluptatum cupiditate.{50 + 60}</p>
    </>
  )
}

// 3. Tiene que exportarse por defecto el componente
export default App;