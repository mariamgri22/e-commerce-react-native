import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import CartIcon from "./CartIcon";
import { useNavigation } from "@react-navigation/native";

const Footer = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.footer}>
      <TouchableOpacity style={styles.iconContainer}>
        <Icon
          name="home"
          size={25}
          color="#333"
          onPress={() => navigation.navigate("ProductList")}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer}>
        <Icon name="bars" size={25} color="#333" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer}>
        <CartIcon onPress={() => navigation.navigate("Cart")} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer}>
        <Icon
          name="user"
          size={25}
          color="#333"
          onPress={() => navigation.navigate("Profile")}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    backgroundColor: "#f2f2f2",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    height: 50,
    position: "sticky",
    bottom: 0,
    left: 0,
    right: 0,
  },
  iconContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Footer;
