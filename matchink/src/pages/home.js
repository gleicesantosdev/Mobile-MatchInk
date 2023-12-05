import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ImageBackground} from 'react-native';

const ImageBackground = '../../assets/Backgroud.jpeg'

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/Tela1/logoVermelha.png')} style={styles.logo} />
      <Text style={styles.text1}>Encontramos alguns estúdios e profissionais na sua área.</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Criar conta</Text>
      </TouchableOpacity>
      <Text style={styles.text2}>Já tem uma conta?</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      <Image source={require('google.svg')} style={styles.logoGoogle} />
      <Image source={require('../../assets/Tela1/Facebook.svg')} style={styles.logoFacebook} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
    margin: 0,
  },
  logo: {
    width: 100,
    height: 100,
  },
  text1: {
    fontSize: 16,
    marginBottom: 16,
  },
  text2: {
    fontSize: 16,
    marginBottom: 16,
  },
  button: {
    backgroundColor: 'black',
    padding: 10,
    width: '85%',
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    color: 'white',
  },
  logoGoogle: {
    width: 28,
    height: 28,
  },
  logoFacebook: {
    width: 28,
    height: 28,
  },
});
