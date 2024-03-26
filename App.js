import { StatusBar } from 'expo-status-bar';
import { Text, Image, SafeAreaView } from 'react-native';
import { styles } from './AppStyle';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor='#61dafb' barStyle="default-content"/>
      <Image style={styles.imagens}
        source={require('./assets/imagemastro.jpg')}
      />
      <Text style={styles.texto}>Esse é um pequeno passo para o homem e um grande passo para a humanidade!</Text>
    </SafeAreaView>

  );
}