import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors, Sizing, Typography} from '../../Styles';
import {fontWeight} from '../../Styles/Typography';
import {Store} from '../../Redux/Store';
import {signOutUser} from '../../Redux/Auth/actions';
import UserService from '../../Services/UserService';
import {UserFields} from './Components';
import {userType} from '../../types';

const ProfileScreen = () => {
  const [user, setUser] = useState<userType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    const uid = Store.getState().auth.user?.uid;

    if (uid) {
      const _user = await UserService.getUser(uid);
      setUser(_user);
      setLoading(false);
      console.log('AAAAAAAAAA', _user);
    } else {
      console.log('No user');
    }
  };

  const handleLogout = () => {
    Store.dispatch(signOutUser());
  };

  if (!loading && user) {
    return (
      <View style={{padding: Sizing.x20}}>
        <SafeAreaView>
          <View style={styles.headerContiner}>
            <Text style={styles.ScreenName}>Profile</Text>
          </View>
          <UserFields user={user} getUser={getUser} />
          <TouchableHighlight
            onPress={handleLogout}
            underlayColor={Colors.neutral.s100}>
            <View>
              <Text style={styles.bodyText}>Logout</Text>
            </View>
          </TouchableHighlight>
        </SafeAreaView>
      </View>
    );
  } else {
    return (
      <View style={{padding: Sizing.x20}}>
        <SafeAreaView>
          <View style={styles.headerContiner}>
            <Text style={styles.ScreenName}>Profile</Text>
          </View>
          <Text>Loading...</Text>
        </SafeAreaView>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  headerContiner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Sizing.x10,
  },
  ScreenName: {
    ...fontWeight.bold,
    ...Typography.fontSize.x50,
  },

  bodyText: {
    ...Typography.fontSize.x50,
    ...Typography.fontWeight.bold,
  },
});

export default ProfileScreen;
