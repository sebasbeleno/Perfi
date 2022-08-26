import React from 'react';
import {View, Text, StyleSheet, Image, TouchableHighlight} from 'react-native';
import {Colors, Outlines, Sizing, Typography} from '../../../Styles';
import {navigate} from '../../../Navigation';

interface ContactCardProps {
  uid: string;
  displayName: string;
  photoURL: string;
}

const ContactProfilePhoto = ({photoURL}: any) => {
  return <Image source={{uri: photoURL}} style={Styles.avatar} />;
};

const ContactInfo = ({displayName, uid}: any) => {
  return (
    <View style={Styles.contactInfo}>
      <Text style={Styles.displayName}>{displayName}</Text>
      <Text style={Styles.lastMessage}>{uid}</Text>
    </View>
  );
};

const ContactCard = ({displayName, photoURL, uid}: ContactCardProps) => {
  const onPress = () => {
    navigate('Chat', {uid});
  };
  return (
    <TouchableHighlight onPress={onPress}>
      <View style={Styles.container} key={uid}>
        <ContactProfilePhoto photoURL={photoURL} />
        <ContactInfo displayName={displayName} uid={uid} />
      </View>
    </TouchableHighlight>
  );
};

const Styles = StyleSheet.create({
  container: {
    marginVertical: Sizing.x10,
    flexDirection: 'row',
    alignItems: 'center',
    // buttom border
    paddingVertical: Sizing.x10,
    borderBottomWidth: Outlines.borderWidth.thin / 3,
    borderBottomColor: Colors.neutral.s200,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  contactInfo: {
    marginLeft: Sizing.x20,
  },
  displayName: {
    ...Typography.fontWeight.bold,
    ...Typography.fontSize.x20,
  },
  lastMessage: {
    ...Typography.fontWeight.regular,
    ...Typography.fontSize.x10,
    color: Colors.neutral.s400,
  },
});

export default ContactCard;
