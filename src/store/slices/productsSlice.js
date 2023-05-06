import { createSlice, nanoid } from '@reduxjs/toolkit';

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    searchTerm: '',
    data: [],
  },
  reducers: {
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    addProduct(state, action) {
      // Assumption:
      // action.payload === { name: 'ab', cost: 140 }
      state.data.push({
        name: action.payload.name,
        cost: action.payload.cost,
        id: nanoid(),
      });
    },
    removeProduct(state, action) {
      // Assumption:
      // action.payload === the id of the product we want to remove
      const updated = state.data.filter((product) => {
        return product.id !== action.payload;
      });
      state.data = updated;
    },
  },
});

export const { changeSearchTerm, addProduct, removeProduct } = productsSlice.actions;
export const productsReducer = productsSlice.reducer;
