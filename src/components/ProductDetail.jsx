import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";
import Header from "./Header";

const ProductDetail = () => {
  const route = useRoute();
  const { product } = route.params;

  return (
    <View style={styles.container}>
      <Header title="Product Detail" />
      <View style={styles.productContainer}>
        <Image source={{ uri: product.image }} style={styles.productImage} />
        <View style={styles.productDetails}>
          <Text style={styles.productTitle}>{product.title}</Text>
          <Text style={styles.productPrice}>{product.price}</Text>
          <Text style={styles.productDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            tincidunt nulla ac est vestibulum viverra. Proin quis lorem ac magna
            laoreet sodales eu sed ex.
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  productContainer: {
    flex: 1,
    padding: 10,
    flexDirection: "row",
    alignItems: "flex-start",
  },
  productImage: {
    width: 150,
    height: 150,
    resizeMode: "contain",
  },
  productDetails: {
    flex: 1,
    marginLeft: 10,
  },
  productTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#0066cc",
    marginBottom: 10,
  },
  productDescription: {
    fontSize: 16,
    lineHeight: 22,
  },
});

export default ProductDetail;
