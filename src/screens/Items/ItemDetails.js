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

const Itemdetails = ({route, navigation}) => {
  const [details, setDetails] = useState(false);

  useEffect(() => {
    fetchItemDetails();
  }, []);

  const fetchItemDetails = () => {
    fetch(navigation.state.params.url)
      .then((res) => res.json())
      .then((details) => {
        setDetails(details);
        return details;
      });
    console.log(details.category);
  };

  return details ? (
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
      <View style={styles.detailView}>
        <Image
          style={styles.image}
          source={{
            uri: navigation.state.params.image,
          }}
        />
        <View style={{top: -90, width: width * 0.8}}>
          <Text style={styles.name}>{navigation.state.params.item}</Text>
          <ProgressBar
            styleAttr="Horizontal"
            indeterminate={false}
            color="#63CB6C"
            animating={true}
            progress={1}
          />
          <View style={styles.initialInfo}>
            <View>
              <Text style={styles.info}>Effect</Text>
              <Text style={styles.text}>
                {details.effect_entries[0].effect}
              </Text>
            </View>
            <View>
              <Text style={styles.info}>Category</Text>
              <Text style={styles.text}>{details.category.name}</Text>
            </View>
            <View>
              <Text style={styles.info}>Fun Fact</Text>
              <Text style={styles.text}>
                {details.flavor_text_entries[0].text}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  ) : (
    <Loading />
  );
};

export default Itemdetails;

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
    height: height * 0.80,
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
    flexDirection: 'column',
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
    bottom: 8,
    zIndex: 1,
  },
});
