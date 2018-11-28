import React, { Component } from 'react';
import { StatusBar } from 'react-native';

import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput'

export default class Home extends Component {
 render() {
  return (
    <Container>
     <StatusBar translucent={false} barStyle="light-content" />
     <Logo />
     <InputWithButton 
      // buttonText={}
      // onPress={}
     />
     <InputWithButton 
      // buttonText={}
      // onPress={}
      editable={false}
     />
    </Container>
  );
 }
}
