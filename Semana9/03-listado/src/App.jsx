import { useState, useEffect } from "react"

const App = () => {
  const [contador, setContador] = useState(0);

  return (
    <>
      <h1>App</h1>
      <h2>Contador: {contador}</h2>
      <button onClick={() => {setContador(contador + 1)}}>
        Incrementar
      </button>
    </>
  )
}

export default App;