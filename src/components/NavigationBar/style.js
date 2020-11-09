import {dimensions, colors} from '../../assets/styles';
import {StyleSheet} from 'react-native';

const navBarMenu = StyleSheet.create({
  barNav: {
    height: dimensions.fullHeight * 0.1,
    backgroundColor: colors.lightGray,
    borderTopColor: colors.lightGray,
    borderTopWidth: 1,
    justifyContent: 'space-around',
    alignItems: 'flex-end',
  },
  tabStyle: {
    borderTopWidth: 1,
    borderTopColor: colors.midGray,
    height: dimensions.fullHeight * 0.08,
    backgroundColor: colors.lightGray,
    alignItems: 'center',
    elevation: 4,
  },
  iconMenu: {
    height: dimensions.fullHeight * 0.0458,
    resizeMode: 'contain',
  },
  buttonHome: {
    width: dimensions.fullWidth * 0.15,
    resizeMode: 'contain',
  },
  iconPorter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  porterTab: {
    borderColor: colors.darkGray,
    borderWidth: 0.5,
  },
  porterBar: {
    backgroundColor: colors.lightGray,
  },
  porterIndicator: {
    borderBottomColor: colors.purple,
    borderBottomWidth: 2,
  },
});

export default navBarMenu;
