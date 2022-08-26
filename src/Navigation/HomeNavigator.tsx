import React from 'react';
const TabNavigator = createBottomTabNavigator();
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  MomentsScreen,
  MessagesScreen,
  ProfileScreen,
  ChatSreen,
} from '../Screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AddPost from '../Screens/AddPost';

const Stack = createNativeStackNavigator();

const FeedNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Group>
        <Stack.Screen name="Moments" component={MomentsScreen} />
      </Stack.Group>
      <Stack.Group screenOptions={{presentation: 'modal'}}>
        <Stack.Screen name="AddPost" component={AddPost} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

const MessagesNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Contacts" component={MessagesScreen} />
      <Stack.Screen name="Chat" component={ChatSreen} />
    </Stack.Navigator>
  );
};

const HomeNavigator = () => {
  return (
    <TabNavigator.Navigator>
      <TabNavigator.Screen
        options={{headerShown: false}}
        name="Feed"
        component={FeedNavigator}
      />
      <TabNavigator.Screen
        options={{headerShown: false}}
        name="Messages"
        component={MessagesNavigator}
      />
      <TabNavigator.Screen
        options={{headerShown: false}}
        name="Profile"
        component={ProfileScreen}
      />
    </TabNavigator.Navigator>
  );
};

export default HomeNavigator;
