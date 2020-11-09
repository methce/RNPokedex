import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
  Animated
} from 'react-native';

const Items = ({navigation}) => {
  const [items, setItems] = useState([]);
  const [scrollY] = useState(new Animated.Value(0));
  const [itemsList, setItemsList] = useState(25);

  useEffect(() => {
    fetchItems(itemsList);
  }, []);

  const fetchItems = (number) => {
    fetch(`https://pokeapi.co/api/v2/item?limit=${number}`)
      .then((response) => response.json())
      .then((items) => setItems(items.results));
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
            setItemsList(itemsList + 25);
            fetchItems(itemsList);
          }
        }}
        style={styles.pokeWrapper}>
        <View style={styles.container}>
          {items.map((item, index) => {
            return (
              <TouchableOpacity
                activeOpacity={0.5}
                key={index}
                style={styles.card}
                onPress={() =>
                  navigation.navigate('ItemDetails', {
                    item: item.name,
                    image: `https://img.pokemondb.net/sprites/items/${item.name}.png`,
                    url: item.url,
                  })
                }>
                <View style={styles.CpCont}>
                  <Text style={{color: 'grey', fontSize: 10, top: 5}}>PD</Text>
                  <Text
                    style={{fontSize: 22, color: 'darkgreen', marginLeft: 3}}>
                    {item.name.length * 150}
                  </Text>
                </View>
                <Image
                  style={styles.image}
                  source={{
                    uri: `https://img.pokemondb.net/sprites/items/${item.name}.png`,
                  }}
                />
                <Text>{item.name}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default Items;

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
