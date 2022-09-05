import React, { useEffect, useState } from 'react';
import { FlatList, Text, StyleSheet } from 'react-native';

import { carregaProdutores } from '../../../services/loadInformation';
import Produtor from './Produtor';

export default function Produtores() {
    // criação de estado que será apagado quando a aplicação for fechada
    const [titulo, atualizaTitulo] = useState();
    const [lista, atualizaLista] = useState();

    useEffect(() => {
        const retorno = carregaProdutores();
        atualizaTitulo(retorno.titulo);
        atualizaLista(retorno.lista);
    }, []);

    const topoLista = () => {
        return <>
                <Text style={estilos.estiloTitulo}>{ titulo }</Text>
        </>
    }

    return <FlatList
                data={lista}
                renderItem={({ item }) => <Produtor {...item} />}
                keyExtractor={({nome}) => nome}
                ListHeaderComponent={ topoLista }/>
}

const estilos = StyleSheet.create({
    estiloTitulo: {
        fontSize: 20,
        lineHeight: 32,
        marginHorizontal: 16,
        marginTop: 16,
        fontWeight: 'bold',
        Color: '#464646'
    }
});