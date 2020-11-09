import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
  Animated,
} from 'react-native';

import {ProgressBar} from '@react-native-community/progress-bar-android';

const Pokemons = ({navigation}) => {
  const [pokemons, setPokemons] = useState([]);
  const [scrollY] = useState(new Animated.Value(0));
  const [pokemonsList, setPokemonsList] = useState(25);

  useEffect(() => {
    fetchPokemons(pokemonsList);
  }, []);

  const fetchPokemons = (number) => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=${number}`)
      .then((response) => response.json())
      .then((pokemons) => setPokemons(pokemons.results));
  };

  const getNumber = (num) => {
    num = num.toString();
    const paddednum = num.padStart(3, '0');
    return paddednum;
  };

  const isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
    const paddingToBottom = 20;
    return (
      layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom
    );
  };

  return (
    <View style={{backgroundColor: 'lightgreen'}}>
      <ScrollView
        scrollEventThrottle={16}
        onScroll={Animated.event([
          {nativeEvent: {contentOffset: {y: scrollY}}},
        ])}
        onMomentumScrollEnd={({nativeEvent}) => {
          if (isCloseToBottom(nativeEvent)) {
            setPokemonsList(pokemonsList + 25);
            fetchPokemons(pokemonsList);
          }
        }}
        style={styles.pokeWrapper}>
        <View style={styles.container}>
          {pokemons.map((pokemon, index) => {
            return (
              <TouchableOpacity
                activeOpacity={0.5}
                key={index}
                style={styles.card}
                onPress={() =>
                  navigation.navigate('Details', {
                    pokemon: pokemon.name,
                    image: `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${getNumber(
                      index + 1,
                    )}.png`,
                  })
                }>
                <View style={styles.CpCont}>
                  <Text style={{color: 'grey', fontSize: 10, top: 5}}>CP</Text>
                  <Text
                    style={{fontSize: 22, color: 'darkgreen', marginLeft: 3}}>
                    {pokemon.name.length * 75}
                  </Text>
                </View>
                <Image
                  style={styles.image}
                  source={{
                    uri: `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${getNumber(
                      index + 1,
                    )}.png`,
                  }}
                />
                <Text>{pokemon.name}</Text>
                <ProgressBar
                  styleAttr="Horizontal"
                  indeterminate={false}
                  color="#63CB6C"
                  animating={true}
                  progress={1}
                />
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default Pokemons;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    marginTop: 10,
  },
  pokeWrapper: {
    backgroundColor: '#fff',
    marginHorizontal: 7,
  },
  card: {
    display: 'flex',
    alignItems: 'center',
    padding: 20,
    marginHorizontal: 5,
  },
  image: {
    width: 70,
    height: 70,
  },
  pokeball: {
    position: 'absolute',
    right: '45%',
    bottom: 0,
    zIndex: 1,
  },
  CpCont: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    position: 'relative',
  },
});
