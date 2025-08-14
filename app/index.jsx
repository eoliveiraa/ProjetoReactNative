// import { ImageBackground } from "expo-image";
import { Text, View, StyleSheet, ImageBackground, Image } from "react-native";
import { Input } from '../componentes/input/input.jsx'
import { Botao } from '../componentes/botao/botao.jsx'
import { Card } from '../componentes/card/card.jsx'
import { ScrollView } from "react-native";

export default function Index() {
  return (
    <>
      {/*Logo e imagem no fundo */}
      <ImageBackground source={require('../assets/images/ImgFundo.png')}
        style={styles.imgFundo}>
        <Image source={require('../assets/images/LogoFindCEP.png')} style={styles.Logo}></Image>
      </ImageBackground>

      {/*Campo de comnsulta */}
      <ScrollView style={styles.containerScroll}>
        <View style={styles.container}>

          {/*Titulo*/}
          <Text style={styles.titulo}>Consulte seu CEP</Text>

          {/*Input */}
          <Input />

          {/*Botao*/}
          <Botao tituloBotao='Consultar' />

          {/*Card de informaçao*/}
          <Card />

        </View>
      </ScrollView>

    </>
  );
}

//estilos dos meus componentes
const styles = StyleSheet.create({
  imgFundo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%'
  },
  Logo: {
    width: 100,
    height: 120

  },
  container: {
    alignItems: 'center',
    minHeight: "100%",
    width: "100%",
    gap: 40
    // flex: 1.5,
    // paddingTop: 50,
    // paddingBottom: 50,
  },

  containerScroll: {
    flex: 1.5,
    paddingTop: 50,
    paddingBottom: 200,
    height: "100%"
  },

  titulo: {
    fontFamily: 'Poppins-Bold',
    fontSize: 22,
    color: 'black'
  }

})