import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../features/product/productlistSlice'

export const store = configureStore({
  reducer: {
    product: productReducer,
  },
});
