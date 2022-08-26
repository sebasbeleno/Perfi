import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {StatusBar} from 'react-native';
import Navigation from './Navigation';

const RootScreen = () => {
  return (
    <SafeAreaProvider>
      <StatusBar />
      <Navigation />
    </SafeAreaProvider>
  );
};

export default RootScreen;
