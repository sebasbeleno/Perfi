import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';
import {isSignedInSelector} from '../Redux/Auth/selectors';
import SignInScreen from '../Screens/Signin';
import HomeNavigator from './HomeNavigator';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  const isSignedIn = useSelector(isSignedInSelector);

  if (isSignedIn) {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <>
          <Stack.Screen name="Home" component={HomeNavigator} />
        </>
      </Stack.Navigator>
    );
  } else {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <>
          <Stack.Screen name="Signin" component={SignInScreen} />
        </>
      </Stack.Navigator>
    );
  }
};

export default RootNavigator;
