// TIP: desestructurar al momento de recibir props
//TIP: Aplicar parámetros por defecto
const CircleColor = ({ color = "#ffffff" }) => {
  // console.log("Color: ", color);
  // color es hexadecimal
  // podemos aplicar estilos directamente y en react estos pueden utilizarse como un objeto de JS
  //ej en Vanilla JS: elem.style.color = "red" elem.style.backgroundColor = "red"
  if(!color){
    return (<p>No tiene color</p>)
  }

  return (
    <div
      style={{
        borderRadius: "50%",
        border: "1px solid gray",
        backgroundColor: color,
        width:"30px",
        height:"30px"
      }}
    ></div>
  );
};

export default CircleColor;
