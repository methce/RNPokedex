import * as React from 'react';
import {Image} from 'react-native';
import styles from '../components/NavigationBar/style';
import {colors} from '../assets/styles';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import PokemonStack from './PokemonStack';
import ItemStack from './ItemStack';
import Profile from '../screens/UserProfile/Profile';

const MainTabConfig = createBottomTabNavigator(
  {
    Pokemons: PokemonStack,
    Items: ItemStack,
    UserProfile: Profile,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused}) => {
        const {routeName} = navigation.state;
        let iconName;
        let iconStyle;
        if (routeName == 'Pokemons') {
          iconName = require('../assets/imgs/pokeball.png');
          iconStyle = styles.buttonHome;
        } else if (routeName == 'Items') {
          iconName = require('../assets/imgs/items.png');
          iconStyle = styles.iconMenu;
        } else if (routeName == 'UserProfile') {
          iconName = require('../assets/imgs/valor.png');
          iconStyle = styles.iconMenu;
        }
        return <Image source={iconName} style={iconStyle} />;
      },
    }),
    initialRouteName: 'Pokemons',
    tabBarOptions: {
      activeTintColor: colors.purple,
      inactiveTintColor: colors.white,
      style: styles.barNav,
      tabStyle: styles.tabStyle,
      safeAreaInset: {bottom: 'never'},
      showLabel: false,
    },
  },
);

export default MainTabConfig;
