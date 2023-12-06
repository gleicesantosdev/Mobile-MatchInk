import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import { RNCamera } from 'react-native-camera';

export const CadastroPro = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [isTatuador, setIsTatuador] = useState(false);
  const [instagram, setInstagram] = useState('');
  const [fotoPerfil, setFotoPerfil] = useState(null);
  const [biografia, setBiografia] = useState('');
  const [cameraModalOpened, setCameraModalOpened] = useState(false);

  const handleCadastro = async () => {
    // Lógica para enviar os dados para a API ou fazer o que for necessário
    // Normalmente, você faria uma requisição HTTP aqui para enviar os dados para o servidor
    let novoUsuario = {
      nome: nome,
      email: email,
      tatuador: isTatuador,
    }

    try {
      await fetch('https://matchink-api.onrender.com/usuarios', {
        method: 'POST',
        headers: {
          'Content-Type': "application/json"
        },
        body: JSON.stringify(novoUsuario),
      })
    } catch (e) {
      console.log(e)
    }
  };

  const handleCameraModalOpen = () => {
    setCameraModalOpened(true);
  };

  const handleCameraModalClose = () => {
    setCameraModalOpened(false);
  };

  const takePicture = async () => {
    if (camera) {
      const options = { quality: 0.5, base64: true };
      const data = await camera.takePictureAsync(options);
      setFotoPerfil(data.uri);
      handleCameraModalClose();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro Profissional</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={(text) => setNome(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <View style={styles.checkboxContainer}>
        <Text>Tatuador?</Text>
        <TouchableOpacity onPress={() => setIsTatuador(!isTatuador)}>
          <Text>{isTatuador ? 'Sim' : 'Não'}</Text>
        </TouchableOpacity>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Link do Instagram"
        value={instagram}
        onChangeText={(text) => setInstagram(text)}
      />
      <TouchableOpacity style={styles.button} onPress={handleCameraModalOpen}>
        <Text style={styles.buttonText}>Tirar Foto</Text>
      </TouchableOpacity>
      {fotoPerfil && (
        <View>
          <Text>Foto de Perfil Capturada!</Text>
        </View>
      )}
      <TextInput
        style={styles.input}
        placeholder="Biografia"
        multiline
        numberOfLines={4}
        value={biografia}
        onChangeText={(text) => setBiografia(text)}
      />

      <TouchableOpacity style={styles.button} onPress={handleCadastro}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>

      <Modal
        visible={cameraModalOpened}
        transparent={false}
        animationType="slide"
        onRequestClose={handleCameraModalClose}
      >
        <RNCamera
          ref={(ref) => {
            camera = ref;
          }}
          style={{ flex: 1 }}
          type={RNCamera.Constants.Type.back}
          autoFocus={RNCamera.Constants.AutoFocus.on}
          flashMode={RNCamera.Constants.FlashMode.off}
          androidCameraPermissionOptions={{
            title: 'Permissão para uso da câmera',
            message: 'Precisamos da permissão de uso da câmera para concluir',
            buttonPositive: 'Permitir',
            buttonNegative: 'Cancelar',
          }}
        />
        <TouchableOpacity style={styles.button} onPress={takePicture}>
          <Text style={styles.buttonText}>Capturar Foto</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleCameraModalClose}>
          <Text style={styles.buttonText}>Cancelar</Text>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
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
    backgroundColor: 'white',
    width: '85%',
  },
  checkboxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    width: '85%',
  },
  button: {
    backgroundColor: 'black',
    padding: 10,
    width: '85%',
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    color: 'white',
  },
});

export default CadastroPro;
