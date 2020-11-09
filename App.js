import React, {Component, useEffect} from 'react';
import {SafeAreaView} from 'react-navigation';
import MainSwitch from './src/navigation/MainSwitch';
import NavigationService from './src/classes/utils/NavigationService';
import {StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {colors} from './src/assets/styles';

if (!__DEV__) {
  console.log = () => {};
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <SafeAreaView style={styles.app}>
        <MainSwitch
          ref={(navigatorRef) =>
            NavigationService.setTopLevelNavigator(navigatorRef)
          }
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: colors.lightGray,
  },
});

const mapState = (state) => ({
  callManager: state.callManager,
});

export default connect(mapState, null)(App);
