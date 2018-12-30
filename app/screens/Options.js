/* eslint-disable react/jsx-filename-extension */

import React, { Component } from 'react';
import { ScrollView, StatusBar } from 'react-native';
import { IonIcons } from '@expo/vector-icons';

import { ListItem, Separator } from '../components/List';

const ICON_COLOR = '868686';
const ICON_SIZE = 23;

class Options extends Component {
  handleThemesPress = () => {
    // eslint-disable-next-line no-console
    console.log('press themes');
  }

  handleSitePress = () => {
    // eslint-disable-next-line no-console
    console.log('press site');
  }

  render() {
    return (
      <ScrollView>
        <StatusBar translucent={false} barStyle="default" />
        <ListItem
          text="Themes"
          onPress={this.handleThemesPress}
          customIcon={
            <IonIcons
          }
        />
        <Separator />
        <ListItem
          text="Fixer.io"
          onPress={this.handleSitePress}
        />
      </ScrollView>
    );
  }
}

export default Options;
