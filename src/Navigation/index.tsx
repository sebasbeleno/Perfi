import React from 'react';
import {
  createNavigationContainerRef,
  NavigationContainer,
} from '@react-navigation/native';
import RootNavigator from './RootNavigator';

export const navigationRef = createNavigationContainerRef();

const Navigation = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <RootNavigator />
    </NavigationContainer>
  );
};

export default Navigation;

export function navigate(name: string, params: {[key: string]: any}) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}
