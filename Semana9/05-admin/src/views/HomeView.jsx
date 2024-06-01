import { useEffect, useState } from 'react';
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
    <div>HomeView</div>
  )
}

export default HomeView
