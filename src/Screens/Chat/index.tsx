import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Image,
  FlatList,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors, Sizing, Typography} from '../../Styles';
import {fontWeight} from '../../Styles/Typography';
import UserService from '../../Services/UserService';
import BackArrow from '../../Icons/BackArrow';
import MessageForm from './Components/MessageForm';
import Message from './Components/Message';
import {Store} from '../../Redux/Store';
import {MessageType, userType} from '../../types';
import firestore from '@react-native-firebase/firestore';
import {addMessage} from '../../Redux/Messages/reducer';

// Render arrow back button and contact name
const Header = ({
  name,
  navigation,
  photoURL,
}: {
  name: string | null;
  photoURL: string | null;
  navigation: any;
}) => {
  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.headerContiner}>
      <TouchableHighlight
        onPress={handleBack}
        underlayColor={Colors.neutral.s100}
        style={{width: '20%'}}>
        <BackArrow />
      </TouchableHighlight>

      <View style={styles.contactInfo}>
        <ContactAvatar photoUrl={photoURL} />
        <Text style={styles.ScreenName}>{name}</Text>
      </View>
    </View>
  );
};

const ContactAvatar = ({photoUrl}: {photoUrl: string | null}) => {
  if (photoUrl) {
    return (
      <View style={styles.avatarContainer}>
        <Image source={{uri: photoUrl}} style={styles.avatar} />
      </View>
    );
  } else {
    return null;
  }
};

const ChatScreen = (props: any) => {
  const [contact, setContact] = useState<userType>();
  const [loading, setLoading] = useState(true);
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [currentUser, setCurrentUser] = useState<userType>();

  useEffect(() => {
    const FetchData = async () => {
      const contactUid = props.route.params.uid;

      if (contactUid) {
        const _contact = await UserService.getUser(contactUid);

        setContact(_contact);
        setLoading(false);
      } else {
        props.navigation.goBack();
        return;
      }
    };

    const storeUser = Store.getState().auth.user;

    if (storeUser) {
      setCurrentUser(storeUser);
    } else {
      props.navigation.goBack();
    }

    FetchData();
  }, [props.navigation, props.route.params.uid]);

  // Useeffect to listen to messages changes
  useEffect(() => {
    const subscriber = firestore()
      .collection('messages')
      .orderBy('created_at', 'desc')
      .onSnapshot(function (snapshot) {
        const _messages = snapshot.docs.map((doc: any) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });

        Store.dispatch(addMessage(_messages));
        setMessages(_messages);
      });

    // Stop listening for updates when no longer required
    return () => subscriber();
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

  if (!currentUser || !contact) {
    props.navigation.goBack();
    return null;
  }

  return (
    <SafeAreaView>
      <Header
        name={contact.name}
        navigation={props.navigation}
        photoURL={contact.photoURL}
      />
      <FlatList
        inverted
        // eslint-disable-next-line react-hooks/rules-of-hooks
        data={messages}
        keyExtractor={function (item) {
          return item.created_at + '';
        }}
        contentContainerStyle={{height: '95%'}}
        renderItem={function ({item}) {
          console.log(item.message);
          const side =
            item.user_id === Store.getState().auth.user?.uid ? 'right' : 'left';
          return <Message message={item.message} side={side} />;
        }}
      />
      <MessageForm uid={currentUser?.uid} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerContiner: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    alignContent: 'center',
    height: '5%',
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
  avatarContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  avatar: {
    width: Sizing.x40,
    height: Sizing.x40,
    borderRadius: 50,
  },
  contactInfo: {
    width: '60%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
});

export default ChatScreen;
