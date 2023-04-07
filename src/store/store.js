import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { reducer as productsReducer } from "./productsSlice";
import { reducer as cartReducer } from "./cartSlice";

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
