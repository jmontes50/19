import { useEffect, useState } from 'react';
import TableProducts from '../components/TableProducts';
import { obtenerProductos } from '../services/productService';

const HomeView = () => {
  const [productos, setProductos] = useState([]);

  //la función como argumento en useEffect no puede ser async
  useEffect(() => {
    try {
      const getProductos = async () => {
        const prods = await obtenerProductos();
        setProductos(prods);
      }
      getProductos();
    } catch (error) {
      console.log(error);
    }
    
  }, [])

  return (
  <div className='container py-3'>
      <h1 className='mb-4'>Productos</h1>
      <TableProducts productos={productos}/>
    </div>  
  )
}

export default HomeView
