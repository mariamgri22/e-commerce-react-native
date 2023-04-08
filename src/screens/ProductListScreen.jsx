import React from "react";
import { View, StyleSheet } from "react-native";
import Header from "../components/Header";
import ProductList from "../components/ProductList";
import { useSelector } from "react-redux";
import { useRoute } from "@react-navigation/native";

const ProductListScreen = ({ navigation }) => {
  const products = useSelector((state) => state.products.items);
  console.log(
    "🚀 ~ file: ProductListScreen.jsx:10 ~ ProductListScreen ~ products:",
    products
  );
  const route = useRoute();
  const title = route.params?.title;

  const handleProductPress = (product) => {
    navigation.navigate("ProductDetail", { product });
  };

  return (
    <View style={styles.container}>
      <Header title={title} />
      <ProductList products={products} onProductPress={handleProductPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ProductListScreen;
