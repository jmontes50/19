import { useEffect, useState } from 'react';
import { obtenerProductos } from '../services/productService';

const HomeView = () => {


  useEffect(() => {
    const getProductos = async () => {
      const prods = obtenerProductos();
    }
    getProductos();
  }, [])

  return (
    <div>HomeView</div>
  )
}

export default HomeView