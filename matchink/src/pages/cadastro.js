import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Cadastro() {
  const navigation = useNavigation();

  const navigateToCadastroPro = () => {
    navigation.navigate('CadastroPro');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inscreva-se</Text>
      <Text style={styles.subtitle}>Desfrute dos benefícios do MatchInk</Text>

      <TextInput style={styles.input} placeholder="Email" />
      <TextInput style={styles.input} placeholder="Senha" secureTextEntry={true} />

      <TouchableOpacity style={styles.button} onPress={navigateToCadastroPro}>
        <Text style={styles.buttonText}>Sou um tatuador</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => alert('Enviado')}>
        <Text style={styles.buttonText}>Registrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingLeft: 8,
    textAlign: 'center',
    borderRadius: 5,
    backgroundColor: 'black',
    color: 'white',
    width: '85%',
    marginTop: 5, // Removido as aspas, já que marginTop espera um número
  },
  button: {
    backgroundColor: 'black',
    padding: 15,
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
});

