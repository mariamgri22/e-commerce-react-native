import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { login } from "../store/userSlice";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleLogin = () => {
    if (email === "" || password === "") {
      setErrorMessage("Please enter your email and password.");
      return;
    }

    dispatch(login({ email, password }));

    setEmail("");
    setPassword("");
    setErrorMessage("");
    navigation.navigate("Profile");
  };

  const handleRegister = () => {
    navigation.navigate("Register");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Log In</Text>
      {errorMessage !== "" && <Text style={styles.error}>{errorMessage}</Text>}
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />
      <Button title="Log In" onPress={handleLogin} />
      <Button title="Register" onPress={handleRegister} />
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
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  error: {
    color: "red",
    marginBottom: 20,
  },
});

export default Login;
