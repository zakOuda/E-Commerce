import { configureStore } from "@reduxjs/toolkit";
import ProductsSlices from "./slices/ProductsSlices";
export const store = configureStore({
  reducer: {
    products: ProductsSlices,
  },
});
