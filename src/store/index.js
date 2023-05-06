import { configureStore } from '@reduxjs/toolkit';
import {
  productsReducer,
  addProduct,
  removeProduct,
  changeSearchTerm,
} from './slices/productsSlice';
import { formReducer, changeName, changeCost } from './slices/formSlice';

const store = configureStore({
  reducer: {
    products: productsReducer,
    form: formReducer,
  },
});

export { store, changeName, changeCost, addProduct, removeProduct, changeSearchTerm };
