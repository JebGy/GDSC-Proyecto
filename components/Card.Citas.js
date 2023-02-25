import { Button, Text } from "@rneui/base";
import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";

const Citas = ({ tipo, valores }) => {
    const [token, setToken] = useState(valores.token);
    const [title, setTitle] = useState(valores.title);
    const [descripcion, setDescripcion] = useState(valores.descripcion);
    const [time, setTime] = useState(valores.time);

    /*
    "token":"ka1DafLUQyffSLuSLCQGEBj4E5g1",
    "title":"Title",
    "descripcion":"lorem ipsun",
    "time":"10:00 am - 12:00 am"
    */


    return (
        <View style={styles.container}>
            <Text
                style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    color: "#5693fb",
                }}
            >
                {title}
            </Text>
            <Text
                style={{
                    fontSize: 14,
                }}
            >
                {description}
            </Text>

            <Text 
                style={{ 
                    width: "100%", 
                    backgroundColor: "#000000", 
                    borderRadius: 10, 
                    color: "#ffffff"
                    }}
            >
                {time}
            </Text>
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

export default Card.Citas;