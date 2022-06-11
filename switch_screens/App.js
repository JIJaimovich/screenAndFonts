
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import Header from './src/components/header/index';
import Screen1 from './src/screens/screen1';
import Screen2 from './src/screens/screen2';


export default function App() {
  
  let [loaded] = useFonts({
    OpenSans: require('./assets/fonts/OpenSans-Regular.ttf'),
    OpenSansBold: require('./assets/fonts/OpenSans-Bold.ttf'), 
  });
  if ( !loaded ) {
  return <AppLoading />;
  }
 
  const [isToggled, setIsToggled] = useState(false);
               
  return (
    <View style={styles.container}>
      <Header title='Switching screens!'/>
      <View className="App">
      <button onClick={() => setIsToggled(!isToggled)}>Switch Screen</button>
      {isToggled ? <Screen1 /> : <Screen2/>}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
