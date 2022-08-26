import {combineReducers} from '@reduxjs/toolkit';
import AuthReducer from './Auth/reducer';
import PostReducer from './Posts/reducer';
import MessageReducer from './Messages/reducer';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const RootReducer = combineReducers({
  auth: persistReducer(persistConfig, AuthReducer),
  // TODO: Rename to Feed
  posts: persistReducer(persistConfig, PostReducer),
  messages: persistReducer(persistConfig, MessageReducer),
});

export default RootReducer;
