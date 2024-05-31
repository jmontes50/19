import { useState } from "react";

const Contador = () => {
  // let variable = 1;
  //cuando cambia el estado o los props, se actualizara automaticamente mi componente, se volverá a ejecutar
  const [variable, setVariable] = useState(1);
  console.log("Cambio!!! ", variable)
  return (
    <>
    <span>{variable}</span>
    <br />
    {/* <button onClick={() => {variable = variable++}}> */}
    <button onClick={() => {
      setVariable(variable + 2)
    }}
    >
      Incrementar
    </button>
    </>
  )
}

export default Contador;