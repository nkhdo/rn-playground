import {StackNavigator} from 'react-navigation';

import HomeScreenContainer from './HomeScreenContainer';
import SettingsScreenContainer from './SettingsScreenContainer';

export default StackNavigator({
  Home: {
    screen: HomeScreenContainer
  },
  Settings: {
    screen: SettingsScreenContainer
  }
}, {
  initialRouteName: 'Home',
});
