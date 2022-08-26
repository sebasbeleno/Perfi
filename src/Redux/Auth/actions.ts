import types from './types';
import {userType} from '../../types';
import {createAsyncThunk} from '@reduxjs/toolkit';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import UserService from '../../Services/UserService';

GoogleSignin.configure({
  webClientId:
    '841500303290-0b0cl9634sg07ictl5sm940qam8216ef.apps.googleusercontent.com',
});

// TODO: Use Redux thunk
export const signInUser = (user: userType) => {
  const payload = {
    user,
  };

  return {
    type: types.SIGN_IN_USER,
    payload,
  };
};

export const GoogleSignIn = createAsyncThunk(types.GOOGLE_SIGN_IN, async () => {
  try {
    // Get the users ID token
    const {idToken} = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    const fire = await auth().signInWithCredential(googleCredential);

    // check if the user exists in the database

    /* const user: userType = {
      name: fire.user.displayName,
      uid: fire.user.uid,
      photoURL: fire.user.photoURL,
    };

    UserService.signInUser(user); */

    // return the user
    return fire;
  } catch (error) {
    console.log('error', error);
    return error;
  }
});

export const signOutUser = createAsyncThunk(types.SIGN_OUT_USER, async () => {
  try {
    await auth().signOut();
    return true;
  } catch (error) {
    console.log('error', error);
    return false;
  }
});
