import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';
import GoogleIcon from './Components/GoogleIcon';
import {GoogleSignIn} from '../../Redux/Auth/actions';
import {Store} from '../../Redux/Store';

const SignInScreen = () => {
  console.log(Store.getState());
  const handleGooogleAuth = () => {
    Store.dispatch(GoogleSignIn());
  };

  return (
    <View style={Styles.container}>
      <View>
        <Text style={Styles.titleStyle}>Welcome Back :D</Text>
        <Text style={Styles.subTitleStyle}>Sign in to continue</Text>
      </View>
      <View style={Styles.siginWithEmailFormContainer}>
        <TextInput placeholder="Email" style={Styles.textInputStyle} />
        <TextInput
          placeholder="Password"
          style={Styles.textInputStyle}
          secureTextEntry={true}
        />
        <TouchableHighlight style={Styles.siginWithEmailButton}>
          <Text style={Styles.signInButtonTextStyle}>Sign In</Text>
        </TouchableHighlight>
      </View>
      <View style={Styles.socialAuthContainer}>
        <Text style={Styles.orTextStyle}>or</Text>
        <View style={{marginVertical: 8}}>
          <TouchableHighlight
            style={Styles.googleButton}
            onPress={handleGooogleAuth}>
            <GoogleIcon />
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleStyle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subTitleStyle: {
    fontSize: 16,
    color: 'grey',
  },
  textInputStyle: {
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
    width: '80%',
  },
  siginWithEmailFormContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  siginWithEmailButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  signInButtonTextStyle: {
    color: 'white',
  },
  orTextStyle: {
    fontSize: 12,
    color: 'grey',
  },
  googleButton: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  socialAuthContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
});
export default SignInScreen;
