// import { ImageBackground } from "expo-image";
import { Text, View, StyleSheet, ImageBackground, Image} from "react-native";
import { Input } from '../componentes/input/input.jsx'

export default function Index() {
  return (
    <>
      {/*Logo e imagem no fundo */}
      <ImageBackground source={require('../assets/images/ImgFundo.png')}
        style={styles.imgFundo}>
        <Image source={require('../assets/images/LogoFindCEP.png')} style={styles.Logo}></Image>
      </ImageBackground>

      {/*Campo de comnsulta */}
      <View style={styles.container}>
        {/*Titulo*/}
        <Text style={styles.titulo}>Consulte seu CEP</Text>
        {/*Input */}
        <Input/>
        {/*Botao*/}
        {/*Card de informaçao*/}
      </View>
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
    flex: 1.5,
    alignItems: "center",
    paddingTop: 50,
    paddingBottom: 50,
    gap: 40
  },
  titulo: {
    fontSize: 25
  }
})