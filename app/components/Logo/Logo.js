// Dependencies Imports----------->>>>>
import React, { Component } from 'react';
import { View, Text, ImageBackground, Image, Keyboard } from 'react-native';

// Styles Imports------------------>>>>
import styles from './styles';

// Logo Component-------------------->>>>
class Logo extends Component {
 componentDidMount() {
  this.keyboardShowListener = keyboard.addListener('keyboardWillShow', this.keyboardShow);
  this.keyboardHideListener = keyboard.addListener('keyboardWillHide', this.keyboardHide);
 };

 componentWillUnmount() {
  this.keyboardShowListener.remove();
  this.keyboardHideListener.remove();
 };

 keyboardShow = () { 
  console.log('keyboard did show');
  };

 keyboardHide = () { 
  console.log('keyboard did hide');
  };

 render() {
  return (
   <View style={styles.container}>
    <ImageBackground resizeMode="contain" style={styles.containerImage} source={require('./images/background.png')} >
     <Image resizeMode="contain" style={styles.image} source={require('./images/logo.png')} />
    </ImageBackground>
    <Text style={styles.text}>Curreny Converter</Text>
   </View>
  );
 }
};

export default Logo;
