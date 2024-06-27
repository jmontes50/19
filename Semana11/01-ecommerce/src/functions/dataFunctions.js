const filterByPrice = (products, prices) => {
  const [bottomPrice, topPrice] = prices;
  const productsFiltered = products.filter((prod) => {
    return prod.precio >= bottomPrice && prod.precio <= topPrice;
  });
  return productsFiltered;
}

export {
  filterByPrice
}