import { useSelector } from 'react-redux';

function ProductValue() {
  const totalCost = useSelector(({ products: { data, searchTerm } }) =>
    data
      .filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .reduce((acc, product) => acc + product.cost, 0)
  );

  return <div className="product-value">Total Cost: ${totalCost}</div>;
}

export default ProductValue;
