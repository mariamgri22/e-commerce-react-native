import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { reducer as productsReducer } from "./productsSlice";
import { reducer as cartReducer } from "./cartSlice";
import { reducer as userReducer } from "./userSlice";

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  user: userReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
