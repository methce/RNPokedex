import {Easing, Animated} from 'react-native';

const MainStackConfig = {
  headerMode: 'none',
  mode: 'modal',
  defaultNavigationOptions: {
    gesturesEnabled: false,
  },
  transitionConfig: (transitionProps, prevTransitionProps) => ({
    transitionSpec: {
      duration: 750,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
      useNativeDriver: true,
    },
    screenInterpolator: sceneProps => {
      const {layout, position, scene} = sceneProps;

      const thisSceneIndex = scene.index;
      const width = layout.initWidth;

      const translateX = position.interpolate({
        inputRange: [thisSceneIndex - 1, thisSceneIndex],
        outputRange: [width, 0],
      });

      return {transform: [{translateX}]};
    },
  }),
};

export default MainStackConfig;
