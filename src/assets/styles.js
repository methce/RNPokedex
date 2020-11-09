import {Dimensions, PixelRatio} from 'react-native';
/**dimensions object of the device with fullHeight and fullWidth acessible properties */
export const dimensions = {
  fullHeight: PixelRatio.roundToNearestPixel(Dimensions.get('window').height),
  fullWidth: PixelRatio.roundToNearestPixel(Dimensions.get('window').width),
};
/**colors object with app color patterns*/
export const colors = {
  green: '#44b08f',
  red: '#d55454',
  yellow: '#d6c729',
  purple: '#5944b0',
  darkGray: '#bcbcbc',
  midGray: '#e3e2e2',
  lightGray: '#f5f6f6',
  white: '#ffffff',
  blue: '#408fec',
  black: '#17112d',
};
/**padding object with app padding patterns */
export const padding = {
  sm: 10,
  md: 20,
  lg: 30,
  xl: 40,
};
/**fonts object with size, fontFamily and weight according to app patterns*/
export const fonts = {
  weight: '400',
  sm: dimensions.fullWidth * 0.035,
  md: dimensions.fullWidth * 0.045,
  lg: dimensions.fullWidth * 0.055,
  primary: 'Lexend Deca',
};

export const safeAreaView = {
  flex: 1,
  backgroundColor: '#f5f6f6',
};
