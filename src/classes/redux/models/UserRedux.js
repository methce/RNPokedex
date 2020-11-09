import {GoogleSignin} from '@react-native-community/google-signin';

const initialState = {
  email: undefined,
  id: undefined,
  givenName: undefined,
  familyName: undefined,
  photo: undefined,
  name: undefined,
};

const user = {
  state: initialState,
  reducers: {
    setUser(state, payload) {
      return {
        ...state,
        ...payload,
      };
    },
    clearModel() {
      return initialState;
    },
  },
  effects: (dispatch) => ({
    async login() {
      try {
        const userInfo = await GoogleSignin.signIn();
        if (userInfo) {
          dispatch.user.setUser(userInfo.user);
        }
        return true;
      } catch (error) {
        console.log('UserRedux: login: error', error);
      }
    },
  }),
};

export default user;
