import { Text } from "@rneui/base";
import React, { useEffect, useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import Header from "../components/Header";
import Card from "../components/Card";
import { loadData } from "../api/api.consume";

const Home = ({ route }) => {
  //getSesion
  const { user } = route.params;
  const [currentuser, setcurrentuser] = useState(user.email);
  const [listaFeed, setlistaFeed] = useState([]);

  useEffect(() => {
    loadData().then((data) => {
      const lista = [];
      for (const key in data) {
        const item = data[key];
        lista.push({
          tipo: "clinica",
          valores: {
            nombre: item.nombre,
            description: item.descripcion,
            diasLaborales: item.diasLaborales,
          },
        });
      }
      setlistaFeed(lista);
    });
  }, []);

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView style={styles.scrollview}>
        {
          // Aquí se renderizarán los componentes Card
          listaFeed.map((item, index) => {
            return <Card key={index} tipo={item.tipo} valores={item.valores} />;
          })
        }
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    display: "flex",
    paddingTop: 20,
    paddingHorizontal: 10,
    width: "100%",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  scrollview: {
    width: "100%",
    height: "100%",
    //center the content
    display: "flex",
  },
});

export default Home;
