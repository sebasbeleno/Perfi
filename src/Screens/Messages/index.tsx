import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import MessagesService from '../../Services/MessagesService';
import {Typography} from '../../Styles';
import {fontWeight} from '../../Styles/Typography';
import {userType} from '../../types';
import ContactList from './Components/ContactList';
import {Store} from '../../Redux/Store';
import {loadMessages} from '../../Redux/Messages/actions';

const MessagesScreen = () => {
  const [contactList, setContactList] = useState<userType[] | []>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetContactList = async () => {
      Store.dispatch(loadMessages());
      const ContactList_ = await MessagesService.getContactList();
      setContactList(ContactList_);
      setLoading(false);
    };

    fetContactList();
  }, []);

  if (loading) {
    return (
      <View>
        <SafeAreaView>
          <View style={styles.headerContiner}>
            <Text style={styles.ScreenName}>Loading</Text>
          </View>
        </SafeAreaView>
      </View>
    );
  }

  return (
    <View>
      <SafeAreaView>
        <View style={styles.headerContiner}>
          <Text style={styles.ScreenName}>Messages</Text>
        </View>

        <View style={styles.bodyContainer}>
          <ContactList contactList={contactList} />
        </View>
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
});

export default MessagesScreen;
