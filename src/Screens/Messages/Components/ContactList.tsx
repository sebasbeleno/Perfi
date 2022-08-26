import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {userType} from '../../../types';
import ContactCard from './ContactCard';

interface ContactListProps {
  contactList: userType[];
}

const ContactList = (props: ContactListProps) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={props.contactList}
        renderItem={({item}) => (
          <ContactCard
            displayName={item.name}
            photoURL={item.photoURL}
            uid={item.uid}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default ContactList;
