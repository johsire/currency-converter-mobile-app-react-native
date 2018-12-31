
import { StatusBar } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import Home from '../screens/Home';
import Themes from '../screens/Themes';
import Options from '../screens/Options';
import CurrencyList from '../screens/CurrencyList';

const HomeStack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: () => null,
    },
  },
  Options: {
    screen: Options,
    navigationOptions: {
      headerTitle: 'Options',
    },
  },
  Themes: {
    screen: Themes,
    navigationOptions: {
      headerTitle: 'Themes',
    },
  },
}, {
  headerMode: 'screen',
});

const CurrencyListStack = createStackNavigator({
  CurrencyList: {
    screen: CurrencyList,
    navigationOptions: ({ navigation }) => ({
      headerTitle: navigation.state.params.title,
    }),
  },
});

export default createStackNavigator(
  {
    Home: {
      screen: HomeStack,
    },
    CurrencyList: {
      screen: CurrencyListStack,
    },
  },
  {
    mode: 'modal',
    cardStyle: { paddingTop: StatusBar.currentHeight },
    headerMode: 'none',
  },
);
