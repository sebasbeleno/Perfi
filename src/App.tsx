import React from 'react';
import {AppRegistry} from 'react-native';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import {Store, Persistor} from './Redux/Store';
import Root from './Root';

const App = () => {
  return (
    <Provider store={Store}>
      <PersistGate loading={null} persistor={Persistor}>
        <Root />
      </PersistGate>
    </Provider>
  );
};

export default App;

AppRegistry.registerComponent('Perfi', () => App);
