import React, { useState } from "react";
import { View, StyleSheet, Alert } from "react-native";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  createUserWithGoogle,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import firebaseConfig from "../firebase.config";
import { Button, Input, Text } from "@rneui/base";
import { useNavigation } from "@react-navigation/native";

const Formulario = () => {
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [user, setuser] = useState("");
  const navigation = useNavigation();

  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        Alert.alert("Correcto", "Usuario creado correctamente");
        setuser(userCredential.user);
        navigation.navigate("Home", {user: userCredential.user});
      })
      .catch((error) => {
        Alert.alert("Error", error.message);
      });
  };

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        Alert.alert("Correcto", "Usuario logueado correctamente");
        navigation.navigate("Home", { user: userCredential.user });
      })
      .catch((error) => {
        Alert.alert("Error", error.message);
      });
  };

  return (
    <View style={styles.container}>
      <Input
        placeholder="nombre"
        onChangeText={(text) => {
          setemail(text);
        }}
      />
      <Input
        placeholder="email"
        onChangeText={(text) => {
          setemail(text);
        }}
      />
      <Input
        placeholder="password"
        secureTextEntry={true}
        onChangeText={(text) => {
          setpassword(text);
        }}
      />
      <Button
        buttonStyle={styles.buttons}
        title="Crear Cuenta"
        onPress={handleSignUp}
      />
      <Button
        buttonStyle={styles.buttons}
        title="Iniciar Sesión"
        onPress={handleSignIn}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    paddingTop: 50,
  },
  buttons: {
    marginTop: 10,
    marginHorizontal: 30,
    padding: 20,
    borderRadius: 10,
    color: "#ffffff",
    backgroundColor: "#0067c6",
  },
});

export default Formulario;
