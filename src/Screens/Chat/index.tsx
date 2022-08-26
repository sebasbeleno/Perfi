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
import {MessageType} from '../../types';
import firestore from '@react-native-firebase/firestore';
import {addMessage} from '../../Redux/Messages/reducer';
import MessagesService from '../../Services/MessagesService';
import {selectMessagesByUid} from '../../Redux/Messages/selectors';
import {useSelector} from 'react-redux';
import Auth from '@react-native-firebase/auth';

// Render arrow back button and contact name
const Header = ({
  name,
  navigation,
  photoURL,
}: {
  name: string;
  navigation: any;
  photoURL: string;
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

const ContactAvatar = ({photoUrl}: {photoUrl: string}) => {
  return (
    <View style={styles.avatarContainer}>
      <Image source={{uri: photoUrl}} style={styles.avatar} />
    </View>
  );
};

const ChatScreen = (props: any) => {
  const [contact, setContact] = useState({});
  const [loading, setLoading] = useState(true);
  const [messages, setMessages] = useState<MessageType[]>([]);

  console.log(Store.getState().auth);
  useEffect(() => {
    const _messages = Store.getState().messages.messages;
    const _contactMessages = _messages;
    console.log(_contactMessages);
    setMessages(_contactMessages);
  }, [loading, props.route.params]);

  useEffect(() => {
    const FetchData = async () => {
      const contactUid = props.route.params.uid;

      if (contactUid) {
        const _contact = await UserService.getUser(contactUid);

        setContact(_contact);
        setLoading(false);
      } else {
        props.navigation.goBack();
      }
    };

    FetchData();
  }, [false]);

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
  }, [false]);

  useEffect(() => {
    console.log('has un update');
    setTimeout(() => {
      const _messages = Store.getState().messages.messages;
      setMessages(_messages);
    }, 500);
  }, [Store.getState().messages.messages]);

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
      <SafeAreaView style={{justifyContent: 'space-between'}}>
        <Header
          name={contact.name}
          navigation={props.navigation}
          photoURL={contact.photoURL}
        />
        <View style={{height: Sizing.screen.height / 1.4}}>
          <View>
            <FlatList
              inverted
              // eslint-disable-next-line react-hooks/rules-of-hooks
              data={messages}
              keyExtractor={function (item) {
                return item.id;
              }}
              renderItem={function ({item}) {
                console.log(item.message);
                const side =
                  item.user_id === Store.getState().auth.user?.uid
                    ? 'right'
                    : 'left';
                return <Message message={item.message} side={side} />;
              }}
            />
          </View>
        </View>
        <MessageForm uid={Store.getState().auth.user?.uid} />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContiner: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignContent: 'center',
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
