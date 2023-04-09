import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import CartItem from "./CartItem";
import { useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../store/cartSlice";

const Cart = ({ cartItems }) => {
  const dispatch = useDispatch();
  const totalPrice = cartItems.reduce(
    (accumulator, item) =>
      accumulator + item.price.substring(1) * item.quantity,
    0
  );

  const handleRemoveItem = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  const handleUpdateQuantity = (itemId, newQuantity) => {
    dispatch(updateQuantity({ itemId, quantity: newQuantity }));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cart</Text>
      {cartItems.length > 0 ? (
        <>
          <FlatList
            data={cartItems}
            renderItem={({ item }) => (
              <CartItem
                item={item}
                onRemove={() => handleRemoveItem(item.id)}
                onUpdateQuantity={(newQuantity) => {
                  handleUpdateQuantity(item.id, newQuantity);
                  console.log(
                    "🚀 ~ file: Cart.jsx:40 ~ Cart ~ newQuantity:",
                    newQuantity
                  );
                }}
              />
            )}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.cartItemsContainer}
          />
          <View style={styles.totalContainer}>
            <Text style={styles.totalLabel}>Total:</Text>
            <Text style={styles.totalPrice}>${totalPrice}</Text>
          </View>
        </>
      ) : (
        <Text style={styles.emptyMessage}>Your cart is empty.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "white",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  cartItemsContainer: {
    paddingBottom: 16,
  },
  totalContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: "#ccc",
  },
  totalLabel: {
    fontSize: 18,
    fontWeight: "bold",
    marginRight: 8,
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: "bold",
  },
  emptyMessage: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Cart;
