// Dependencies Imports----------->>>>>
import React from 'react';
import { View, Text, ImageBackground, Image } from 'react-native';

// Styles Imports------------------>>>>
import { styles } from './styles';

// Logo Component-------------------->>>>
const Logo = () => (
 <View style={styles.container}>
  <ImageBackground resizeMode="contain" style={styles.containerImage} source={require('./images/background.png')} >
   <Image resizeMode="contain" style={styles.image} source={require('./images/logo.png')} />
  </ImageBackground>
  <Text style={styles.text}>Curreny Converter</Text>
 </View>
);

export default Logo;
