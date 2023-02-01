import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";
import postSlice from "./postSlice";
import authSlice from "./authSlice";
import cartSlice from "./cartSlice";
const store = configureStore({
  reducer: { productSlice, authSlice, cartSlice, postSlice },
  devTools: true,
});
export default store;
