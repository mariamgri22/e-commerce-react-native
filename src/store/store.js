import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { reducer as productsReducer } from "./productsSlice";
import { reducer as cartReducer } from "./cartSlice";
import { reducer as userReducer } from "./userSlice";

const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    user: userReducer,
  },
});

export default store;