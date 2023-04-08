import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import CartItem from "./CartItem";

const Cart = ({ cartItems }) => {
  // console.log("🚀 ~ file: Cart.jsx:6 ~ Cart ~ cartItems:", cartItems);
  // const totalPrice = cartItems.reduce(
  //   (total, item) => total + item.price * item.quantity,
  //   0
  // );
  // console.log("🚀 ~ file: Cart.jsx:11 ~ Cart ~ totalPrice:", totalPrice);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cart</Text>
      {cartItems.length > 0 ? (
        <>
          <FlatList
            data={cartItems}
            renderItem={({ item }) => <CartItem item={item} />}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.cartItemsContainer}
          />
          <View style={styles.totalContainer}>
            <Text style={styles.totalLabel}>Total:</Text>
            {/* <Text style={styles.totalPrice}>${totalPrice}</Text> */}
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
