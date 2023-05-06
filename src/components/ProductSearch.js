import { useDispatch, useSelector } from 'react-redux';
import { changeSearchTerm } from '../store';

function ProductSearch() {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => {
    return state.products.searchTerm;
  });

  const handleSearchTermChange = (event) => {
    dispatch(changeSearchTerm(event.target.value));
  };

  return (
    <div className="list-header">
      <h3 className="title is-3">My Products</h3>
      <div className="search field is-horizontal">
        <label className="label">Search</label>
        <input
          className="input"
          value={searchTerm}
          onChange={handleSearchTermChange}
        />
      </div>
    </div>
  );
}

export default ProductSearch;
