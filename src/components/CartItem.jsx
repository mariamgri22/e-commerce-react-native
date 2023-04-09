import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const CartItem = ({ item, onRemove, onUpdateQuantity }) => {
  const handleRemove = () => {
    onRemove(item.id);
  };

  const handleUpdateQuantity = (value) => {
    onUpdateQuantity(item.id, value);
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>${item.price}</Text>
        <View style={styles.quantityContainer}>
          <Text style={styles.quantityLabel}>Quantity:</Text>
          <TouchableOpacity
            onPress={() => handleUpdateQuantity(item.quantity - 1)}
          >
            <Text style={styles.quantityButton}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantity}>{item.quantity}</Text>
          <TouchableOpacity
            onPress={() => handleUpdateQuantity(item.quantity + 1)}
          >
            <Text style={styles.quantityButton}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity onPress={handleRemove}>
        <Text style={styles.removeButton}>Remove</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    backgroundColor: "white",
    borderRadius: 8,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 16,
    borderRadius: 8,
  },
  infoContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#888",
    marginBottom: 8,
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
  quantityLabel: {
    fontSize: 16,
    marginRight: 8,
  },
  quantity: {
    fontSize: 16,
    fontWeight: "bold",
    paddingHorizontal: 8,
  },
  quantityButton: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#444",
    paddingHorizontal: 8,
  },
  removeButton: {
    fontSize: 16,
    fontWeight: "bold",
    color: "red",
    marginLeft: 16,
  },
});

export default CartItem;
