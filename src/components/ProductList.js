import { useSelector, useDispatch } from 'react-redux';
import { removeProduct } from '../store';

function ProductList() {
  const dispatch = useDispatch();
  const { products, name } = useSelector(({ form, products: { data, searchTerm } }) => {
    const filteredProducts = data.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return {
      products: filteredProducts,
      name: form.name,
    };
  });

  const handleProductDelete = (product) => {
    dispatch(removeProduct(product.id));
  };

  const renderedProducts = products.map((product) => {
    const match = name && product.name.toLowerCase().includes(name.toLowerCase());

    return (
      <div key={product.id} className={`panel ${match && 'bold'}`}>
        <p>
          {product.name} - {product.cost}€
        </p>
        <button
          className="button is-danger"
          onClick={() => handleProductDelete(product)}
        >
          Delete
        </button>
      </div>
    );
  });

  return (
    <div className="product-list">
      {renderedProducts}
      <hr />
    </div>
  );
}

export default ProductList;
