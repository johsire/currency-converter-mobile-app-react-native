// Dependencies Imports----------->>>>>
import React, { Component } from 'react';
import { View, Text, ImageBackground, Image, Keyboard, Animated } from 'react-native';

// Styles Imports------------------>>>>
import styles from './styles';

const ANIMATION_DURATION = 250;

// Logo Component-------------------->>>>
class Logo extends Component {
 constructor(props) {
  super(props);

  this.containerImageWidth = new Animated.Value(styles.$largeImageSize);
 }
 componentDidMount() {
  this.keyboardShowListener = keyboard.addListener('keyboardWillShow', this.keyboardShow);
  this.keyboardHideListener = keyboard.addListener('keyboardWillHide', this.keyboardHide);
 };

 componentWillUnmount() {
  this.keyboardShowListener.remove();
  this.keyboardHideListener.remove();
 };

 keyboardShow = () => { 
  Animated.timing(this.containerImageWidth, {
   toValue: styles.$smallContainerSize,
   duration: ANIMATION_DURATION,
  }).start();
  };

 keyboardHide = () => { 
  console.log('keyboard did hide');
  };

 render() {
  const containerImageStyle = [
   styles.contanerImage,
   { width: this.containerImageWidth, height: this.containerImageWidth },
  ];

  const imageStyle = [
   styles.logo,
   { width: this.imageWidth },
  ];

  return (
   <View style={styles.container}>
    <Animated.ImageBackground resizeMode="contain" style={containerImageStyle} source={require('./images/background.png')}
    >
     <Animated.ImageBackground resizeMode="contain"
     style={imageStyle}
      source={require('./images/logo.png')}
      
     />
    </Animated.ImageBackground>
    <Text style={styles.text}>Curreny Converter</Text>
   </View>
  );
 }
};

export default Logo;
