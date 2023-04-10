import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { useDispatch } from "react-redux";
import { actions } from "../store/productsSlice";
import { Ionicons } from "@expo/vector-icons";

const Header = () => {
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(actions.setSearchQuery(searchText));
  };

  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Text style={styles.logo}>Logo</Text>
      </View>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.search}
          placeholder="Search product"
          value={searchText}
          onChangeText={setSearchText}
          onSubmitEditing={handleSearch}
        />
        <TouchableOpacity onPress={handleSearch}>
          <Ionicons name="search" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#e2e2e2",
  },
  leftContainer: {},
  logo: {
    fontSize: 20,
    fontWeight: "bold",
  },
  searchContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
    marginLeft: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  search: {
    flex: 1,
    paddingVertical: 5,
    paddingHorizontal: 10,
    fontSize: 16,
  },
});

export default Header;
