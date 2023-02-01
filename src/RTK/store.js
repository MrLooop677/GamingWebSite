import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";
import authSlice from "./authSlice";
import cartSlice from "./cartSlice";
const store = configureStore({
  reducer: { productSlice, authSlice, cartSlice },
  devTools: true,
});
export default store;
