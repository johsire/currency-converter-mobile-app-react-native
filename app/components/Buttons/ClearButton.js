import React from "react";
import PropTypes from 'prop-types';
import { TouchableOpacity, View, Text, Image } from 'react-native';

import styles from './styles';

const ClaerButton = ({ text, onPress }) => (
 <TouchableOpacity style={styles.container} onPress={onPress}>
  <View style={styles.wrapper}>
   <Image style={styles.icon} source={require('./images/icon.png')} />
   <Text style={styles.text}>{text}</Text>
  </View>
 </TouchableOpacity>
);

ClearButton.propTypes = {
 text: PropTypes.string,
 onPress: PropTypes.func,
};

export default ClearButton;
