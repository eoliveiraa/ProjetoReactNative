// import { ImageBackground } from "expo-image";
import axios from "axios";
import { useState } from "react";
import { Image, ImageBackground, ScrollView, StyleSheet, Text, View } from "react-native";
import { Botao } from '../componentes/botao/botao.jsx';
import { Card } from '../componentes/card/card.jsx';
import { Input } from '../componentes/input/input.jsx';

export default function Index() {

  const [cep, setCep] = useState("");
  const [jsonCep, setJsonCep] = useState({});

  async function ConsultarCep(e) {
    e.preventDefault();
    try {

      if (cep !== "" && cep.length === 8) {
        const resposta = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
        setJsonCep(resposta.data);
        // console.log(jsonCep);

      } else {
        alert("O CEP esta incorreto! Verifique os digitos");
      }

    } catch (error) {
      console.log(error);

    }
  }


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
          <Input
            valorCep={cep}
            onChangeValorCep={e => setCep(e)}
          />

          {/*Botao*/}
          <Botao tituloBotao='Consultar' onPress={ConsultarCep} />

          {/*Card de informaçao*/}
          {jsonCep.cep && (
          <Card
            cep={jsonCep.cep}
            logradouro={jsonCep.logradouro}
            bairro={jsonCep.bairro}
            uf={jsonCep.uf}
            estado={jsonCep.estado}
            regiao={jsonCep.regiao}
          />
          )}

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