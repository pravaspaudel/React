import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/CartSlice"; // Import the reducer

const store = configureStore({
  reducer: {
    cart: cartReducer, // Use the imported reducer
  },
});

export default store;
