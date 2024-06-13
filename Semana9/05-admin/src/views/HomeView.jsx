import { useEffect, useState } from 'react';
import TableProducts from '../components/TableProducts';
import { obtenerProductos, eliminarProducto } from '../services/productService';
import Swal from "sweetalert2";

const HomeView = () => {
  const [productos, setProductos] = useState([]);

  const getProductos = async () => {
    const prods = await obtenerProductos();
    setProductos(prods);
  }

  const handleEliminar = async (id) => {
    console.log("handleEliminar", id);
    const resultadoUsuario = await Swal.fire({
      title:'Desea eliminar el producto?',
      text:'Esta acción es irreversible 🙀!',
      confirmButtonText:'Si, deseo eliminarlo',
      showCancelButton:true,
      cancelButtonText:'No, no deseo eliminarlo',
    });

    const { isConfirmed, isDismissed } = resultadoUsuario;

    if(isConfirmed){
      const resultadoEliminar = await eliminarProducto(id);
      
      await Swal.fire({
        title:"Producto Eliminado",
        text:"Se elimino exitosamente",
        icon:"success"
      })
      //después de eliminar vuelvo a pedir los productos
      getProductos();

    }
  }

  //la función como argumento en useEffect no puede ser async
  useEffect(() => {
    try {
      getProductos();
    } catch (error) {
      console.log(error);
    }
    
  }, [])

  return (
  <div className='container py-3'>
      <h1 className='mb-4'>Productos</h1>
      <TableProducts productos={productos} handleEliminar={handleEliminar} />
    </div>  
  )
}

export default HomeView
