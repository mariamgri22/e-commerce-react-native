import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import Product from "./Product";

const ProductList = ({ products, onProductPress }) => {
  const renderItem = ({ item }) => (
    
      <Product
        image={item.image}
        title={item.title}
        price={item.price}
        id={item.id}
        onPress={() => onProductPress(item)}
      />

  );

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.contentContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
  },
  contentContainer: {
    paddingTop: 10,
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
});

export default ProductList;
