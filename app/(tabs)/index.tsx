import { Image, StyleSheet, Platform, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Link } from 'expo-router';


export default function HomeScreen() {
  return (
    <View style={ViewsStyle.bodyView}>
      <View style={ViewsStyle.imgTP}>
         <Image
          source={require('@/assets/images/logoMuni.png')}
          style={imagens.partenLogo}
        />
        <Text style={textos.titulo}>
          Municipio da Beira
        </Text>
        
      </View>
      <Text style={textos.paragrafo}>
      Este app foi criado para aproximar você da administração, oferecendo um acesso rápido e prático aos serviços públicos da cidade. 
        </Text>
      <View style={ViewsStyle.footer}>
        <View style={{width: "80%", flexDirection: "column-reverse", marginBottom: 20}}>
            <Link href={"/login"} style={LinksR.LinksRR}>
              <Text>
                Entrar
              </Text>
            </Link>
            <Link href={"/login"} style={LinksR.LinksRRR}>
              Criar
            </Link>
        </View>
      </View>
      
    </View>
  );
}

const ViewsStyle = StyleSheet.create({
    bodyView: {
      backgroundColor: "white",
      height: "100%"
    },

    imgTP: {
      flexDirection: "column",
      width: "100%",
      alignItems: "center",
      justifyContent: "center",
      // padding: 40
    },

    footer: {
      position: "absolute",
      bottom:  0,
      left: 0,
      backgroundColor: "white",
      width: "100%",
      height: 80,
      flexDirection: "column-reverse",
      justifyContent: "space-between",
      alignItems: "center"
    },
});

const textos = StyleSheet.create({
  titulo: {
    color: "#1a2b36",
    fontSize: 25,
    fontWeight: "700",
    width: "85%",
    textAlign: "center",
    marginTop: 10,
    textTransform: "uppercase"
  },

  paragrafo: {
    color: "#777777",
    fontSize: 15,
    // fontWeight: "400",
    width: "85%",
    textAlign: "center",
    marginTop: 7,
    position: "absolute",
    top: "50%",
    left: "7%"
  }
})

const imagens = StyleSheet.create({
  partenLogo: {
    height: 150,
    width: 180,
   marginTop: 60
  },
})

const LinksR = StyleSheet.create({
  LinksRR: {
    display: 'flex',
    marginLeft: 0,
    backgroundColor: "#1a2b36",
    color: "white",
    height: 30,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 7, 

  }, 
  LinksRRR: {
    display: 'flex',
    backgroundColor: "#ffffff",
    color: "#1a2b36",
    height: 30,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    marginBottom: 10
  }
})
