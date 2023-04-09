import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import Icon from "react-native-vector-icons/FontAwesome";

const CartIcon = ({ onPress }) => {
  const cartItems = useSelector((state) => state.cart.items);

  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.icon} onPress={onPress}>
        <Icon name="shopping-cart" size={25} color="#333" />
      </Text>
      {itemCount > 0 && (
        <View style={styles.badge}>
          <Text style={styles.count}>{itemCount}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10,
  },
  icon: {
    fontSize: 18,
    fontWeight: "bold",
    marginRight: 5,
  },
  badge: {
    backgroundColor: "red",
    borderRadius: 10,
    padding: 5,
  },
  count: {
    color: "white",
    fontWeight: "bold",
  },
});

export default CartIcon;
