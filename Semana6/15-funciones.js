// como calcularian el precio de venta de algo, si a uds les cuesta 20
// porcentaje de ganancia
// igv
//costo + 15% + igv (18%)

//function nombreFuncion(recibir parametros)
function calcularPrecio (costo){
  let ganancia = 1.15;
  let igv = 1.18;
  let total = costo * ganancia * igv;
  console.log(`precio total es: ${total}`);
}


calcularPrecio(100);