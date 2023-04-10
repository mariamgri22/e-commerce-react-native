import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, {payload}) => {
      const existingItem = state.items.find((item) => item.id === payload.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ ...payload, quantity: 1 });
      }
      console.log(state.items);
    },
    removeFromCart: (state, {payload}) => {
      state.items = state.items.filter((item) => item.id !== payload);
    },
    updateQuantity: (state, {payload}) => {
      const {itemId, quantity} = payload;
      state.items = state.items.map(item => {
        if (item.id === itemId) {
          return {
            ...item,
            quantity
          }
        }
        return item
      })
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
export const { reducer } = cartSlice;
