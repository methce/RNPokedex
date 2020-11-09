import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Loading from '../../components/Indicator/Loading';

import {ProgressBar} from '@react-native-community/progress-bar-android';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Details = ({route, navigation}) => {
  const [details, setDetails] = useState([]);
  const [type, setType] = useState(null);

  useEffect(() => {
    fetchPokemonDetails();
  }, []);

  const fetchPokemonDetails = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${navigation.state.params.pokemon}`)
      .then((res) => res.json())
      .then((details) => {
        setDetails(details);
        return details;
      })
      .then((details) => setType(details.types[0].type.name));
  };

  return details.name ? (
    <View style={{flex: 1}}>
      <TouchableOpacity
        style={styles.close}
        activeOpacity={0.5}
        onPress={() => navigation.goBack()}>
        <Image
          source={require('../../assets/imgs/close.jpg')}
          style={{width: 40, height: 40}}
        />
      </TouchableOpacity>
      <Image
        source={
          type === 'water'
            ? require('../../assets/imgs/water-type.png')
            : type === 'fire'
            ? require('../../assets/imgs/fire-type2.jpg')
            : type === 'electric'
            ? require('../../assets/imgs/electric-type.jpg')
            : type === 'grass'
            ? require('../../assets/imgs/grass-type.png')
            : type === 'psychic'
            ? require('../../assets/imgs/psychic-type.jpg')
            : require('../../assets/imgs/normal-type.jpg')
        }
        style={{resizeMode: 'cover', width: width, height: height}}
      />
      <View style={styles.detailView}>
        <Image
          style={styles.image}
          source={{
            uri: navigation.state.params.image,
          }}
        />
        <View style={{top: -90, width: width * 0.8}}>
          <Text style={styles.name}>{details.name}</Text>
          <ProgressBar
            styleAttr="Horizontal"
            indeterminate={false}
            color="#63CB6C"
            animating={true}
            progress={1}
          />
          <View style={styles.initialInfo}>
            <View>
              <Text style={styles.text}>{details.weight}</Text>
              <Text style={styles.info}>Weight</Text>
            </View>
            <View>
              <Text style={styles.text}>{details.types[0].type.name}</Text>
              <Text style={styles.info}>Type</Text>
            </View>
            <View>
              <Text style={styles.text}>{details.height}</Text>
              <Text style={styles.info}>Height</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  ) : (
    <Loading />
  );
};

export default Details;

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
    top: -100,
  },
  name: {
    fontSize: 30,
    color: 'darkgreen',
    marginBottom: 5,
    textAlign: 'center',
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    color: 'darkgreen',
  },
  info: {
    color: 'grey',
    textAlign: 'center',
  },
  detailView: {
    backgroundColor: '#fff',
    width: width * 0.95,
    height: height * 0.65,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginHorizontal: 10,
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
  },
  initialInfo: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    margin: 15,
    padding: 10,
    borderWidth: 0.5,
    borderColor: 'grey',
    borderRadius: 5,
  },

  shadow: {
    elevation: 3,
    shadowOffset: {width: 1, height: 1},
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  indicator: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  close: {
    position: 'absolute',
    right: '45%',
    bottom: 10,
    zIndex: 1,
  },
});
