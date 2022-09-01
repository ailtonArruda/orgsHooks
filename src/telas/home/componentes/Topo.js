import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";

import logo from "../../../assets/logo.png";
import { carregaTopo } from "../../../services/loadInformation";

class Topo extends React.Component {

    state = {
        topo: {
            boasVindas: '',
            legenda: '',
        }
    }

    atualizaTopo() {
        const retorno = carregaTopo();
        this.setState({ topo: retorno })
    }

    // carrega dados apenas uma vez
    componentDidMount() {
        this.atualizaTopo();
    }
    
    // renderizar tela
    render() {
        return  <View style={estilos.topo}>
                <Image source={logo} style={estilos.imagem}/>
                <Text style={estilos.boasVindas}>{this.state.topo.boasVindas}</Text>
                <Text style={estilos.legenda}>{this.state.topo.legenda}</Text>
            </View>
    }
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
    boasVindas: {
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

export default Topo;