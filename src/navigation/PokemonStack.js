import {createStackNavigator} from 'react-navigation-stack';
import MainStackConfig from './MainStackConfig';
import Pokemons from '../screens/Pokemons/Pokemons'
import Details from '../screens/Pokemons/Details'

const PokemonStack = createStackNavigator(
  {
    Pokemons: {
      screen: Pokemons,
    },
    Details: {
      screen: Details,
    },
  },
  MainStackConfig,
);

export default PokemonStack;
