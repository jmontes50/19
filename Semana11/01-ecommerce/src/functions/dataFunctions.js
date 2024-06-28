const filterByPrice = (products, prices) => {
  const [bottomPrice, topPrice] = prices;
  const productsFiltered = products.filter((prod) => {
    return prod.precio >= bottomPrice && prod.precio <= topPrice;
  });
  return productsFiltered;
}

const orderByName = (products, order) => {
  const productsOrdered = products.toSorted((a, b) => {
    //Una manera de indicar como vamos a ordenar un arr es usando valores nùmericos -1,1,0
    //localeCompara, compara el texto y da valores position y negativos segùn considere
    return a.nombre.localeCompare(b.nombre);
    // return a.precio - b.precio;
  })
  if (order === "des") {
    return productsOrdered.toReversed();
  }
  return productsOrdered;
}

export {
  filterByPrice,
  orderByName
}