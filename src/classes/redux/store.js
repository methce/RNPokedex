import {init} from '@rematch/core';
import * as models from './models';
import createRematchPersist from '@rematch/persist';
import AsyncStorage from '@react-native-community/async-storage';

const persistPlugin = createRematchPersist({
  whitelist: ['user'],
  storage: AsyncStorage,
  version: 2,
});

/**
 * Object store contaning all the models
 */
const store = init({
  models,
  plugins: [persistPlugin],
});

export default store;
