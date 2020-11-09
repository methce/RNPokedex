import {createStackNavigator} from 'react-navigation-stack';
import LoginScreen from '../screens/Auth/LoginScreen';

const AuthenticationStack = createStackNavigator({
  Login: {
    screen: LoginScreen,
    navigationOptions: {headerShown: false},
  }
});

export default AuthenticationStack;
