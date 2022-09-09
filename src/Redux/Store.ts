import {configureStore} from '@reduxjs/toolkit';
import {persistStore} from 'redux-persist';
import RootReducer from './RootReducer';

const Store = configureStore({
  reducer: RootReducer,
  devTools: true,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
      thunk: true,
    }),
});

const Persistor = persistStore(Store);

export {Store, Persistor};
