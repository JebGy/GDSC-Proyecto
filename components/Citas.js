import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import CardCitas from "../components/Card.Citas";
import { loadCita } from "../api/api.consume";


const Citas = () => {
    useEffect(() => {
        loadCita().then((data) => {
            const lista = [];
            for (const key in data) {
                const item = data[key];
                lista.push({
                    tipo: "citas",
                    valores: {
                        token: item.token,
                        title: item.title,
                        descripcion: item.descripcion,
                        time: item.time,
                    },
                });
            }
            setlistaFeed(lista);
        });
    }, []);

    return (
        <View style={styles.container}>
            <Header />
            <Text>Proximas Citas</Text>
            <ScrollView style={styles.scrollview}>
                {
                    // Aquí se renderizarán los componentes Card
                    listaFeed.map((item, index) => {
                        return <CardCitas key={index} tipo={item.tipo} valores={item.valores} />;
                    })
                }
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        paddingTop: 20,
        paddingHorizontal: 10,
        width: "100%",
        height: "100%",
        alignItems: "center",
        backgroundColor: "#ffffff",
    },
    scrollview: {
        width: "100%",
        height: "100%",

        //center the content
    },
});

export default Citas;


