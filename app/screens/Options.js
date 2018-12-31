/* eslint-disable react/jsx-filename-extension */

import React, { Component } from 'react';
import { ScrollView, StatusBar, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { ListItem, Separator } from '../components/List';

const ICON_PREFIX = Platform.OS === 'ios' ? 'ios' : 'md';
const ICON_COLOR = '#868686';
const ICON_SIZE = 23;

class Options extends Component {
  handlePressThemes = () => {
    // eslint-disable-next-line no-console
    console.log('press themes');
  };

  handlePressSite = () => {
    // eslint-disable-next-line no-console
    console.log('press site');
  };

  render() {
    return (
      <ScrollView>
        <StatusBar translucent={false} barStyle="default" />
        <ListItem
          text="Themes"
          onPress={this.handlePressThemes}
          customIcon={(
            <Ionicons
              name={`${ICON_PREFIX}-arrow-forward`}
              color={ICON_COLOR}
              size={ICON_SIZE}
            />
          )}
        />
        <Separator />
        <ListItem
          text="Fixer.io"
          onPress={this.handlePressSite}
          customIcon={(
            <Ionicons
              name={`${ICON_PREFIX}-link`}
              color={ICON_COLOR}
              size={ICON_SIZE}
            />
          )}
        />
        <Separator />
      </ScrollView>
    );
  }
}

export default Options;
