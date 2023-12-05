import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Constantes para referências de imagens
const studioImage = require('../Mobile-Matchink/matchink/assets/Tela5/fotoEstudio.png');
const instagramIcon = require('../Mobile-Matchink/matchink/assets/Tela5/instagramVermelho.svg');
const saveIcon = require('../Mobile-Matchink/matchink/assets/Tela5/Salvar.svg');
const calendarIcon = require('../Mobile-Matchink/matchink/assets/Tela5/calendarioVermelho.svg');
const mapPinIcon = require('../Mobile-Matchink/matchink/assets/Tela5/mapaPinVermelho.svg');
const accountIcon = require('../Mobile-Matchink/matchink/assets/barra de baixo/account.svg');
const homeIcon = require('../Mobile-Matchink/matchink/assets/barra de baixo/home.svg');
const favoriteIcon = require('../Mobile-Matchink/matchink/assets/barra de baixo/favorite.svg');

const ResidenteItem = ({ nome, imagemSource }) => {
    const navigation = useNavigation();
  
    const navigateToProfile = () => {
      navigation.navigate('Jenifer L.', { nome });
    };
  
    return (
      <TouchableOpacity onPress={navigateToProfile}>
        <View style={styles.residenteItemContainer}>
          <Image source={imagemSource} style={styles.residenteItemImage} />
          <Text style={styles.residenteItemText}>{nome}</Text>
        </View>
      </TouchableOpacity>
    );
};

const StudioScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View>
        <View style={styles.header}>
          <Image
            source={studioImage}
            style={styles.headerImage}
          />
        </View>
        
        <View style={styles.studioInfo}>
          <View style={styles.header}>
            <Image
              source={studioImage}
              style={styles.headerImage}
            />
            <View style={styles.headerIcons}>
              <Image
                source={instagramIcon}
                style={styles.icon}
              />
              <Image
                source={saveIcon}
                style={styles.icon}
              />
            </View>
          </View>
          <View>
            <Text style={styles.studioInfoTitle}>Sobre o studio:</Text>
            <Text style={styles.studioInfoText}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium maxime omnis nemo perspiciatis eos, reprehenderit fuga suscipit ipsa accusantium repellat ab autem velit facilis quae officiis, dolore eligendi atque quis.
            </Text>
          </View>
          <View style={styles.studioSchedule}>
            <View style={styles.scheduleItem}>
              <Image
                source={calendarIcon}
                style={styles.icon}
              />
              <View>
                <Text style={styles.scheduleText}>SEG - DOM</Text>
                <Text style={styles.scheduleText}>08h às 19h</Text>
              </View>
            </View>
            <View style={styles.scheduleItem}>
              <Image
                source={mapPinIcon}
                style={styles.icon}
              />
              <View>
                <Text style={styles.scheduleText}>Av. Conde da Boa Vista, 1410 | Recife</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Componentes para Residentes e Convidados */}
        <View id="residentes">
          <Text style={styles.sectionTitle}>Residentes</Text>
          <View style={styles.residentesContainer}>
            <ResidenteItem nome="Samuel R." imagemSource={require('../Mobile-Matchink/matchink/assets/Tela5/tattooResidente1.png')} />
          </View>
          <Text style={styles.sectionTitle}>Residentes</Text>
          <View style={styles.residentesContainer}>
            <ResidenteItem nome="Ana M." imagemSource={require('../Mobile-Matchink/matchink/assets/Tela5/tattooResidente2.png')} />
          </View>
          <Text style={styles.sectionTitle}>Residentes</Text>
          <View style={styles.residentesContainer}>
            <ResidenteItem nome="Rodrigo C." imagemSource={require('../Mobile-Matchink/matchink/assets/Tela5/tattooResidente3.png')} />
          </View>
          <Text style={styles.sectionTitle}>Residentes</Text>
          <View style={styles.residentesContainer}>
            <ResidenteItem nome="Jenifer L." imagemSource={require('../Mobile-Matchink/matchink/assets/Tela5/tattooResidente4.png')} />
          </View>
        </View>
        
        <View id="convidados">
          <Text style={styles.sectionTitle}>Convidados</Text>
          <View style={styles.residentesContainer}>
            <ResidenteItem nome="João F." imagemSource={require('../Mobile-Matchink/matchink/assets/Tela5/tattooConvidado1.png')} />
          </View>
          <Text style={styles.sectionTitle}>Convidados</Text>
          <View style={styles.residentesContainer}>
            <ResidenteItem nome="Lucas T." imagemSource={require('../Mobile-Matchink/matchink/assets/Tela5/tattooConvidado2.png')} />
          </View>
        </View>

        <View style={styles.bottomBar}>
          <TouchableOpacity>
            <Image source={accountIcon} style={styles.icon} />
          </TouchableOpacity>
          <Image source={homeIcon} style={styles.icon} />
          <TouchableOpacity>
            <Image source={favoriteIcon} style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    alignItems: 'center',
    margin: 10,
  },
  headerImage: {
    width: 250,
    height: 250,
    resizeMode: 'cover',
  },
  headerIcons: {
    flexDirection: 'row',
  },
  icon: {
    width: 24,
    height: 30,
    marginHorizontal: 5,
  },
  studioInfo: {
    margin: 15,
  },
  studioInfoTitle: {
    color: 'red',
    fontWeight: '400',
    fontSize: 16,
  },
  studioInfoText: {
    fontSize: 14,
  },
  studioSchedule: {
    flexDirection: 'row',
    marginTop: 15,
  },
  scheduleItem: {
    width: '50%',
    flexDirection: 'row',
  },
  scheduleText: {
    fontSize: 16,
  },
  sectionTitle: {
    fontWeight: '500',
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 10,
  },
  residentesContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
  residenteItemContainer: {
    alignItems: 'center',
  },
  residenteItemImage: {
    width: 120,
    height: 120,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  residenteItemText: {
    marginTop: 5,
    fontSize: 16,
  },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});

export default StudioScreen;

