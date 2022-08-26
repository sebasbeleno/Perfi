import {userType} from '../../types';
import {createSlice} from '@reduxjs/toolkit';
import {GoogleSignIn} from './actions';

const initialState: {
  isSignedIn: boolean | undefined;
  loadingUser: boolean | undefined;
  user: userType | undefined;
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
} = {
  isSignedIn: false,
  user: undefined,
  loadingUser: undefined,
  loading: 'idle',
};

type Action = {
  type: string;
  payload?: any;
};

export const AuthSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    signIn: (state, action: Action) => {
      state.user = {...state.user, ...action.payload};
      state.isSignedIn = true;
    },
  },
  extraReducers: builder => {
    builder.addCase(GoogleSignIn.fulfilled, (state, action) => {
      state.user = {
        name: action.payload.user.displayName,
        uid: action.payload.user.uid,
        photoURL: action.payload.user.photoURL,
      };
      state.isSignedIn = true;
    });
    builder.addCase(GoogleSignIn.rejected, (state, action) => {
      console.log('GoogleSignIn.rejected', action.payload);
    });
  },
});

export const {signIn} = AuthSlice.actions;
export default AuthSlice.reducer;
