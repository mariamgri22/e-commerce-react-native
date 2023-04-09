import React from "react";
import { View, StyleSheet } from "react-native";
import Header from "../components/Header";
import ProductList from "../components/ProductList";
import { useSelector } from "react-redux";
import { useRoute } from "@react-navigation/native";
import Footer from "../components/Footer";

const ProductListScreen = ({ navigation }) => {
  const products = useSelector((state) => state.products.items);

  const route = useRoute();
  const title = route.params?.title;

  const searchQuery = useSelector((state) => state.products.searchQuery);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleProductPress = (product) => {
    navigation.navigate("ProductDetail", { product });
  };

  return (
    <View style={styles.container}>
      <Header title={title} />
      <ProductList
        products={filteredProducts}
        onProductPress={handleProductPress}
      />
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ProductListScreen;
