import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import CartIcon from "./CartIcon";
import { useNavigation } from "@react-navigation/native";

const Header = () => {
//  const cart = useSelector((state) => state.cart.items);
//   console.log("🚀 ~ file: Header.jsx:8 ~ Header ~ cart:", cart);

//  const itemCount = cart.reduce((total, item) => total + item.quantity, 0);
//   console.log("🚀 ~ file: Header.jsx:11 ~ Header ~ itemCount:", itemCount);
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Text style={styles.logo}>Logo</Text>
      </View>
      <View style={styles.rightContainer}>
        <Text style={styles.icon}>Menu Icon</Text>
        <CartIcon onPress={() => navigation.navigate("Cart")} />
      </View>
      <View style={styles.searchContainer}>
        <Text style={styles.search}>Search Bar</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#fff",
  },
  leftContainer: {
    flex: 1,
  },
  logo: {
    fontSize: 20,
    fontWeight: "bold",
  },
  rightContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    fontSize: 16,
    marginLeft: 10,
  },
  searchContainer: {
    flex: 2,
    marginLeft: 20,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  search: {
    fontSize: 16,
  },
});

export default Header;
