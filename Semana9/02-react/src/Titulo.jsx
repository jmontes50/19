const Titulo = (props) => {
  console.log(props)
  return (
    <>
      <h2>
        {props.texto}
      </h2>
      <button onClick={props.accion}>
        Ejecutar!
      </button>
    </>
  )
}

export default Titulo