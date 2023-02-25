import { Button, Text } from "@rneui/base";
import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";

const Card = ({ tipo, valores }) => {
  const [nombre, setnombre] = useState(valores.nombre);
  const [description, setdescription] = useState(valores.description);
  const [diasLaborales, setdiasLaborales] = useState([]);
  const dias=["Lun","Mar","Mie","Jue","Vie","Sab","Dom"];

  useEffect(() => {
    const lista = [];
    for (const key in valores.diasLaborales) {
        const item = valores.diasLaborales[key];
        lista.push(item);
    }
    setdiasLaborales(lista);
  }, []);

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          color: "#5693fb",
        }}
      >
        {nombre}
      </Text>
      <Text
        style={{
          fontSize: 14,
        }}
      >
        {description}
      </Text>

      <View style={
        {
            display: "flex",
            flexDirection: "row",
        }
      }>
        {diasLaborales.map((item, index) => {
          return (
            <Text
              style={{
                paddingHorizontal: 5,
                paddingVertical: 5,
                backgroundColor: item === "true" ? "#56fb95" : "#fb5656",
                marginHorizontal: 5,
                borderRadius: 10,
                marginTop: 10,
                marginVertical: 5,
                marginBottom:20,
              }}
              key={index}
            >
              {dias[index]}
            </Text>
          );
        })}
      </View>
      <Button buttonStyle={{width: "100%", backgroundColor: "#5693fb", borderRadius: 10, marginBottom: 10,}} onPress={() => {}}>
        <Text style={{color: "#ffffff"}}>Reservar</Text>
        </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "98%",
    height: "auto",
    display: "flex",
    backgroundColor: "#ffffff",
    borderRadius: 10,
    marginVertical: 10,
    alignSelf: "center",
    padding: 10,
    //drop shadow
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 3.84,
    elevation: 4,
  },
});

export default Card;
