import {createStackNavigator} from 'react-navigation-stack';
import MainStackConfig from './MainStackConfig';
import Items from '../screens/Items/Items'
import ItemsDetails from '../screens/Items/ItemDetails'

const ItemStack = createStackNavigator(
  {
    Items: {
      screen: Items,
    },
    ItemDetails: {
      screen: ItemsDetails,
    },
  },
  MainStackConfig,
);

export default ItemStack;
