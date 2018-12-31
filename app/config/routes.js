
import { StackNavigator } from 'react-navigation';

import Home from '../screens/Home';
import CurrencyList from '../screens/CurrencyList';

export default StackNavigator({
  Home: {
    screen: Home,
  },
  CurrencyList: {
    screen: CurrencyList,
  },
});
