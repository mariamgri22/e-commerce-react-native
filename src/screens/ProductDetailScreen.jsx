import React from 'react';
import { View } from 'react-native';
import ProductDetail from '../components/ProductDetail';

const ProductDetailScreen = ({ route }) => {
  const { product } = route.params;

  return (
    <View style={{ flex: 1 }}>
      <ProductDetail product={product} />
    </View>
  );
};

export default ProductDetailScreen;
