import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { View, Text, Button, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { logout } from "../store/userSlice";

const Profile = () => {
  const user = useSelector((state) => state.user.user);
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  const handleLogin = () => {
    navigation.navigate("Login");
  };

  const handleRegister = () => {
    navigation.navigate("Register");
  };

  return (
    <View style={styles.container}>
      {isLoggedIn ? (
        <>
          {/* <Image
            style={styles.profilePicture}
            source={{ uri: user.profilePicture }}
          /> */}
          <Text style={styles.username}>Welcome, {user.name}!</Text>
          <Text style={styles.email}>Email: {user.email}</Text>
          <Button title="Logout" onPress={handleLogout} />
        </>
      ) : (
        <>
          <Text style={styles.message}>
            Please log in or register to view your profile.
          </Text>
          <Button title="Log In" onPress={handleLogin} />
          <Button title="Register" onPress={handleRegister} />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  message: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: "center",
  },
  profilePicture: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  username: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  email: {
    fontSize: 18,
    marginBottom: 20,
  },
});

export default Profile;
