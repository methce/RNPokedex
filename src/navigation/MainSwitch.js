import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import AuthenticationStack from './AuthenticationStack';
import MainTabConfig from './MainTabConfig';

const MainSwitch = createSwitchNavigator(
  {
    // Auth: {screen: AuthenticationStack},
    MainStack: {screen: MainTabConfig},
  },
  {
    // initialRouteName: 'Auth',
    navigationOptions: {headerShown: false},
  },
);

export default createAppContainer(MainSwitch);
