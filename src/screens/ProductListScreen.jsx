import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '../components/Header';
import ProductList from '../components/ProductList';

const products = [
  {
    id: '1',
    image: 'https://picsum.photos/400/300?random=1',
    title: 'Product 1',
    price: '$9.99',
  },
  {
    id: '2',
    image: 'https://picsum.photos/400/300?random=2',
    title: 'Product 2',
    price: '$19.99',
  },
  {
    id: '3',
    image: 'https://picsum.photos/400/300?random=3',
    title: 'Product 3',
    price: '$29.99',
  },
  {
    id: '4',
    image: 'https://picsum.photos/400/300?random=4',
    title: 'Product 4',
    price: '$39.99',
  },
  {
    id: '5',
    image: 'https://picsum.photos/400/300?random=5',
    title: 'Product 5',
    price: '$49.99',
  },
  {
    id: '6',
    image: 'https://picsum.photos/400/300?random=6',
    title: 'Product 6',
    price: '$59.99',
  },
];

const ProductListScreen = ({ navigation }) => {
  const handleProductPress = (product) => {
    navigation.navigate('ProductDetail', { product });
  };

  return (
    <View style={styles.container}>
      <Header title="Products" />
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
