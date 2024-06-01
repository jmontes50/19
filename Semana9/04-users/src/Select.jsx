const Select = (props) => {
  console.log("PROPS DE SELECT: ", props);
  
  const { totalPaginas, pagina, setPagina } = props;
  const options = (num) => {
    let opts = [];
    for(let i = 1; i <= num; i++){
      opts.push(<option value={i} key={i}>Página {i}</option>)
    }
    console.log("OPTS: ", opts)
    return opts;
  }

  return (
    <>
      <h2>Página: </h2>
      <select
        value={pagina}
        onChange={(evento) => {
          setPagina(+evento.target.value)
        }}
      >
        {options(totalPaginas)}
      </select>
    </>
  );
};

export default Select;
