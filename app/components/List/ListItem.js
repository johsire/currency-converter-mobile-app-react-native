/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableHighlight } from 'react-native';

import styles from './styles';

const ListItem = ({ text, onPress, selected }) => (
  <TouchableHighlight onPress={onPress}>
    <View style={styles.row}>
      <Text style={styles.text}>{ text }</Text>
      {selected ? <Text>Selected</Text> : null}
    </View>
  </TouchableHighlight>
);

ListItem.propTypes = {
  text: PropTypes.string,
  onPress: PropTypes.func,
  selected: PropTypes.bool,
};

export default ListItem;
