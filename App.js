import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Home from './src/telas/home';

export default function App() {
  return  <SafeAreaView style={estilos.tela}>
            <Home />
          </SafeAreaView>
}  

const estilos = StyleSheet.create({
  tele: {
    flex: 1,
  }
})