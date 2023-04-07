import React from "react";
import { View } from "react-native";
import { useSelector } from "react-redux";
import Cart from "../components/Cart";

const CartScreen = () => {
  const cartItems = useSelector((state) => state.cart.items);
  console.log(
    "🚀 ~ file: CartScreen.jsx:8 ~ CartScreen ~ cartItems:",
    cartItems
  );

  return (
    <View style={{ flex: 1 }}>
      <Cart cartItems={cartItems} />
    </View>
  );
};

export default CartScreen;
