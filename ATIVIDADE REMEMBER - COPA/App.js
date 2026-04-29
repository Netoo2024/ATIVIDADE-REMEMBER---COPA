import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
} from 'react-native';

const bandeiras = {
  MEX: require('./assets/MEX.png'),
  RSA: require('./assets/RSA.png'),
  KOR: require('./assets/KOR.png'),
  CZE: require('./assets/CZE.png'),
};

export default function App() {
  const dadosCopa = {
    "competicao": "Copa do Mundo FIFA 2026",
    "jogos": [
      {
        "id": 1,
        "grupo": "A",
        "data_brasilia": "2026-06-11",
        "hora_brasilia": "16:00",
        "time_casa": "México",
        "sigla_casa": "MEX", 
        "time_fora": "África do Sul",
        "sigla_fora": "RSA", 
        "estadio": "Estádio Azteca",
      },
      {
        "id": 2,
        "grupo": "A",
        "data_brasilia": "2026-06-11",
        "hora_brasilia": "23:00",
        "time_casa": "Coreia do Sul",
        "sigla_casa": "KOR",
        "time_fora": "Tchéquia",
        "sigla_fora": "CZE",
        "estadio": "Estádio Akron",
      }
    ]
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>

        <Image source={require('./assets/unicopa.png')} style={styles.logo} />
        <Text style={styles.titulo}>CALENDÁRIO</Text>

        {dadosCopa.jogos.map((jogo) => (
          <View key={jogo.id} style={styles.card}>
            
            <Text style={styles.data}>{jogo.data_brasilia}</Text>

            <View style={styles.partida}>
              <Text style={styles.grupo}>GRUPO {jogo.grupo}</Text>

              {/* Time Casa */}
              <View style={styles.timeContainer}>
                <Image source={bandeiras[jogo.sigla_casa]} style={styles.bandeira} />
                <Text style={styles.nomePais}>{jogo.time_casa}</Text>
              </View>

              <Text style={styles.vs}>VS</Text>

              {/* Time Fora */}
              <View style={styles.timeContainer}>
                <Image source={bandeiras[jogo.sigla_fora]} style={styles.bandeira} />
                <Text style={styles.nomePais}>{jogo.time_fora}</Text>
              </View>

              <Text style={styles.hora}>{jogo.hora_brasilia}</Text>
              <Text style={styles.estadio}>{jogo.estadio}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#031a38', padding: 15 },
  logo: { width: 230, height: 90, resizeMode: 'contain', alignSelf: 'center', marginVertical: 10 },
  titulo: { color: '#fff', fontSize: 30, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
  card: { backgroundColor: '#07254d', borderRadius: 18, padding: 15, marginBottom: 18 },
  data: { color: '#ffd400', fontSize: 28, fontWeight: 'bold', marginBottom: 10 },
  partida: { borderTopWidth: 1, borderTopColor: '#1d3f70', paddingTop: 12 },
  
  // Estilo para alinhar bandeira e texto
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  bandeira: {
    width: 30,
    height: 20,
    marginRight: 10,
    borderRadius: 2,
  },
  
  grupo: { color: '#8fb3e0', fontSize: 12, marginBottom: 10, fontWeight: 'bold' },
  nomePais: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
  vs: { color: '#ffd400', fontSize: 16, marginVertical: 2, fontWeight: 'bold', marginLeft: 40 },
  hora: { color: '#fff', fontSize: 24, fontWeight: 'bold', marginTop: 8 },
  estadio: { color: '#8fb3e0', marginTop: 8, fontSize: 12 },
});