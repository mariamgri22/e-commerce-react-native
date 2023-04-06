import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

const Product = ({ image, title, price, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <View style={styles.priceContainer}>
        <Text style={styles.price}>{price}</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    overflow: "hidden",
    elevation: 5,
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#0066cc",
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default Product;
