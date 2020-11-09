/**
 * @format
 */

import 'react-native-gesture-handler';
import React from 'react';
import {AppRegistry, YellowBox} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import store from './src/classes/redux/store';
import {getPersistor} from '@rematch/persist';
import {PersistGate} from 'redux-persist/lib/integration/react';
import Orientation from 'react-native-orientation-locker';

const persistor = getPersistor();

YellowBox.ignoreWarnings(['Warning: ...']);
console.disableYellowBox = true;
Orientation.lockToPortrait();

const AppContainer = () => (
  <PersistGate persistor={persistor}>
    <Provider store={store}>
      <App />
    </Provider>
  </PersistGate>
);

AppRegistry.registerComponent(appName, () => AppContainer);
