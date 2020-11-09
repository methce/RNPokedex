import React from 'react';
import {SafeAreaView} from 'react-native';
import styles from './style';
import {connect} from 'react-redux';
import NavigationService from '../../classes/utils/NavigationService'

import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-community/google-signin';

class LoginScreen extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      googleSNSet: false,
    };
  }

  async componentDidMount() {
    await GoogleSignin.hasPlayServices();
    if (this.state.googleSNSet == false) {
      this.setState({googleSNSet: true});
      GoogleSignin.configure();
    }
    await this.checkLoggin();
  }

  async checkLoggin() {
    if (
      this.props.user != null &&
      this.props.user != undefined &&
      this.props.user.id != null &&
      this.props.user.id != undefined
    ) {
      NavigationService.navigate('MainStack');
    }
  }

  render() {
    return (
      <SafeAreaView style={styles.screen}>
        <GoogleSigninButton
          style={{width: 192, height: 48}}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={() => this.props.reduxLogin()}
          disabled={this.state.isSigninInProgress}
        />
      </SafeAreaView>
    );
  }
}

const mapState = (state) => ({
  user: state.user,
});

const mapDispatch = (dispatch) => ({
  reduxLogin: () => dispatch.user.login(),
});

export default connect(mapState, mapDispatch)(LoginScreen);
