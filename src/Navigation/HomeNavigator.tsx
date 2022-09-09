import React from 'react';
const TabNavigator = createBottomTabNavigator();
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  MomentsScreen,
  MessagesScreen,
  ProfileScreen,
  ChatSreen,
  NotificationsScreen,
} from '../Screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AddPost from '../Screens/AddPost';
import HomeIcons from '../Icons/HomeIcon';
import {Colors} from '../Styles';
import Messagesicons from '../Icons/MessagesIcon';
import ProfileIcon from '../Icons/Profile';

const Stack = createNativeStackNavigator();

const FeedNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Group>
        <Stack.Screen name="Moments" component={MomentsScreen} />
        <Stack.Screen
          options={{headerShown: true}}
          name="Notifications"
          component={NotificationsScreen}
        />
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
    </Stack.Navigator>
  );
};

const HomeNavigator = () => {
  return (
    <TabNavigator.Navigator>
      <TabNavigator.Screen
        options={{
          headerShown: false,
          title: 'Home',
          tabBarIcon: ({size, focused}) => {
            const _color = focused ? Colors.primary.brand : '#ccc';
            return <HomeIcons color={_color} size={size} />;
          },
        }}
        name="Feed"
        component={FeedNavigator}
      />
      <TabNavigator.Screen
        options={{
          headerShown: false,
          title: 'Messages',
          tabBarIcon: ({size, focused}) => {
            const _color = focused ? Colors.primary.brand : '#ccc';
            return <Messagesicons color={_color} size={size} />;
          },
        }}
        name="Messages"
        component={MessagesNavigator}
      />
      <TabNavigator.Screen
        options={{
          headerShown: false,
          title: 'Profile',
          tabBarIcon: ({size, focused}) => {
            const _color = focused ? Colors.primary.brand : '#ccc';
            return <ProfileIcon color={_color} size={size} />;
          },
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </TabNavigator.Navigator>
  );
};

export default HomeNavigator;
