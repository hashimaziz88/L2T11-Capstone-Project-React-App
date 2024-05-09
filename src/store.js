// store.js
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice";
import authReducer from "./features/auth/authSlice"; // Import authSlice reducer

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer, // Add auth reducer to the store configuration
    // Add other reducers if needed
  },
});

export default store;
