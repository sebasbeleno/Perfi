import React from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors, Typography} from '../../Styles';
import {fontWeight} from '../../Styles/Typography';
import {Store} from '../../Redux/Store';
import {signOutUser} from '../../Redux/Auth/actions';

const ProfileScreen = () => {
  const handleLogout = () => {
    Store.dispatch(signOutUser());
  };

  return (
    <View>
      <SafeAreaView>
        <View style={styles.headerContiner}>
          <Text style={styles.ScreenName}>Profile</Text>
        </View>

        <TouchableHighlight
          onPress={handleLogout}
          underlayColor={Colors.neutral.s100}>
          <View style={styles.bodyContainer}>
            <Text style={styles.bodyText}>Logout</Text>
          </View>
        </TouchableHighlight>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContiner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  ScreenName: {
    ...fontWeight.bold,
    ...Typography.fontSize.x50,
  },
  bodyContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  bodyText: {
    ...Typography.fontSize.x50,
    ...Typography.fontWeight.bold,
  },
});

export default ProfileScreen;
