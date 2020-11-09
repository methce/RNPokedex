import {colors} from '../../assets/styles';
import {StyleSheet} from 'react-native';

const defaultScreen = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.lightGray,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  saveView: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flex: 1,
  },
});

export default defaultScreen;
