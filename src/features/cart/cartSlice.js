// features/cart/cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      const existingItemIndex = state.findIndex(
        (item) => item.id === action.payload.id
      );
      if (existingItemIndex !== -1) {
        // If item already exists, increase its quantity
        state[existingItemIndex].quantity++;
      } else {
        // If item is new, add it to the cart with quantity 1
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    updateQuantity: (state, action) => {
      const { itemId, newQuantity } = action.payload;
      const itemToUpdate = state.find((item) => item.id === itemId);
      if (itemToUpdate) {
        itemToUpdate.quantity = newQuantity;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
