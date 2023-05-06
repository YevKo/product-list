import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeName, changeCost, addProduct } from '../store';

function ProductForm() {
  const inputReference = useRef(null);

  const dispatch = useDispatch();
  const { name, cost } = useSelector((state) => {
    return {
      name: state.form.name,
      cost: state.form.cost,
    };
  });

  const handleNameChange = (event) => {
    dispatch(changeName(event.target.value));
  };
  const handleCostChange = (event) => {
    const productCost = parseInt(event.target.value) || 0;
    dispatch(changeCost(productCost));
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(addProduct({ name, cost }));
    inputReference.current.focus();
  };

  return (
    <div className="product-form panel">
      <h4 className="subtitle is-3">Add Product</h4>
      <form onSubmit={handleSubmit}>
        <div className="field-group">
          <div className="field">
            <label className="label">Name</label>
            <input
              ref={inputReference}
              className="input is-expanded"
              value={name}
              onChange={handleNameChange}
            />
          </div>

          <div className="field">
            <label className="label">Cost</label>
            <input
              className="input is-expanded"
              value={cost || ''}
              onChange={handleCostChange}
              type="number"
            />
          </div>
        </div>
        <div className="field">
          <button className="button is-link">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default ProductForm;
