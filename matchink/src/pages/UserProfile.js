import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const UserProfile = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Image source={require('../../assets/Tela6/Vector.png')} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../../assets/Tela6/engrenagemConfig.svg')} style={styles.icon} />
        </TouchableOpacity>
      </View>

      <View style={styles.balao}>
        <View style={styles.insta}>
          <TouchableOpacity>
            <Image source={require('../../assets/Tela6/Instagram.svg')} style={styles.icon} />
          </TouchableOpacity>
        </View>
        <View style={styles.bio}>
          <Image source={require('../../assets/Tela6/fotoTatuadora.png')} style={styles.fotoPerfil} />
          <Text style={styles.nome}>Jennifer L.</Text>
          <Text style={styles.bioText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
        </View>
        <View style={styles.iconcm}>
          <TouchableOpacity>
            <Image source={require('../../assets/Tela6/calendarioPreto.svg')} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('../../assets/Tela6/mensagemPreto.svg')} style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.hr} />

      <Text style={styles.topico}>STUDIO QUE FAZ PARTE</Text>

      <View style={styles.studio}>
        <View>
          <Text>
            Studio Recife {'\n'}
            Recife | SEG - DOM {'\n'}
            08h às 19h
          </Text>
        </View>
        <View style={styles.pontos}>
          <Text style={styles.pontosText}>9.2/10</Text>
        </View>
      </View>

      <View style={styles.hr} />

      <View style={styles.portfolio}>
        <View style={styles.avaliacao}>
          <View>
            <Image source={require('../../assets/Tela6/likePreto.svg')} style={styles.icon} />
            <Text>777</Text>
          </View>
          <View>
            <Image source={require('../../assets/Tela6/visuPreto.svg')} style={styles.icon} />
            <Text>2408</Text>
          </View>
        </View>
        <View style={styles.fotosPortfolio}>
          <Image source={require('../../assets/Tela6/fotoPortfolio1.png')} style={styles.fotoPortfolio} />
          <Image source={require('./../assets/Tela6/fotoPortfolio2.png')} style={styles.fotoPortfolio} />
          <Image source={require('../../assets/Tela6/fotoPortfolio3.png')} style={styles.fotoPortfolio} />
          <Image source={require('../../assets/Tela6/fotoPortfolio4.png')} style={styles.fotoPortfolio} />
        </View>
        <View style={styles.adicionar}>
          <TouchableOpacity>
            <Image source={require('../../assets/Tela6/Add.png')} style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.barraBaixo}>
        <View style={styles.botoes}>
          <Image source={require('../../assets/barra-de-baixo/account.svg')} style={styles.icon} />
          <Image source={require('../../assets/barra-de-baixo/home.svg')} style={styles.icon} />
          <Image source={require('../../assets/barra-de-baixo/favorite.svg')} style={styles.icon} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
  icon: {
    width: 30,
    height: 30,
  },
  balao: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: 375,
    height: 180,
    borderRadius: 28,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    marginHorizontal: 'auto',
    marginVertical: -70,
    marginBottom: '6%',
    backgroundColor: 'white',
    textAlign: 'center',
  },
  insta: {
    width: 20,
    height: 20,
    bottom: -40,
  },
  iconcm: {
    position: 'relative',
    display: 'block',
    marginBottom: 25,
  },
  icon: {
    width: 24,
    height: 30,
    marginHorizontal: 5,
  },
  bio: {
    marginLeft: 15,
    marginTop: -5,
  },
  nome: {
    marginTop: '5%',
    marginLeft: '3%',
  },
  fotoPerfil: {
    marginBottom: -10,
    width: 123,
    height: 123,
    marginTop: -73,
    borderRadius: 50,
  },
  bioText: {
    fontSize: 12,
    fontWeight: '400',
    marginLeft: 15,
    marginTop: -5,
  },
  iconcm: {
    position: 'relative',
    display: 'block',
    marginBottom: 25,
    bottom: -40,
    left: 30,
  },
  hr: {
    width: '89%',
    height: 1,
    borderWidth: 1,
    borderColor: 'black',
    marginHorizontal: 'auto',
  },
  topico: {
    fontFamily: 'Poppins',
    textAlign: 'center',
    fontSize: 12,
  },
  studio: {
    backgroundImage: require('../img/Tela6/fotoEstudio.png'),
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '90%',
    height: '15vh',
    marginHorizontal: 'auto',
    borderRadius: 10,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  pontos: {
    backgroundColor: '#E82828',
    borderRadius: 10,
    height: '7.62vw',
    width: '13vw',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: -318,
    marginBottom: -40,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
  },
  pontosText: {
    color: 'white',
    fontSize: 16,
  },
  portfolio: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 'auto',
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  avaliacao: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
  },
  fotosPortfolio: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  fotoPortfolio: {
    width: '48%',
    aspectRatio: 1, // Manter a proporção quadrada
    borderRadius: 10,
  },
  adicionar: {
    height: '12vw',
    width: '12vw',
    borderRadius: 50,
    left: '43.8%',
    bottom: 70,
    position: 'fixed',
    justifyContent: 'center',
    alignItems: 'center',
  },
  barraBaixo: {
    width: '100%',
    height: '6vh',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    position: 'fixed',
    bottom: 0,
    backgroundColor: '#FFFFFF',
  },
  botoes: {
    flexDirection: 'row',
  },
});

export default UserProfile;
