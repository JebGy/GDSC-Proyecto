import { Text } from "@rneui/base";
import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import Header from "../components/Header";

const Home = ({ route }) => {
  console.log(route.params.user);
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView style={{ width: "100%", height:50 }}>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    display: "flex",
    paddingTop: 50,
    alignItems: "center",
  },
});

export default Home;
