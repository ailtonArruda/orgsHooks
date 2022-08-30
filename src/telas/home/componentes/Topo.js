import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";

import logo from "../../../assets/logo.png";


export default function Topo() {
    return  <View style={estilos.topo}>
                <Image source={logo} style={estilos.imagem}/>
                <Text style={estilos.boaVindas}>Olá!</Text>
                <Text style={estilos.legenda}>Encontra os melhores produtores</Text>
            </View>
}

const estilos = StyleSheet.create({
    topo: {
        backgroundColor: "#F6F6F6",
        padding: 16,
    },
    imagem: {
        width: 70,
        height: 28,
    },
    boaVindas: {
        fontWeight: "bold",
        fontSize: 26,
        marginTop: 24,
        lineHeight: 42,
        
    },
    legenda: {
        fontSize: 16,
        lineHeight: 26,
    }
})