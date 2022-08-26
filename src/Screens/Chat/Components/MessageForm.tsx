import React, {useState, useCallback} from 'react';
import {View, StyleSheet, TextInput, TouchableHighlight} from 'react-native';
import TelegramIcon from '../../../Icons/Telegram';
import {Colors, Outlines, Sizing} from '../../../Styles';
import {Store} from '../../../Redux/Store';
import {createMessage} from '../../../Redux/Messages/actions';

interface MessageFormProps {
  uid: string;
}

const MessageForm = (props: MessageFormProps) => {
  const [inputHeigth, setInputHeigth] = useState(0);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const onSend = useCallback(
    function () {
      setLoading(true);
      const uid = props.uid;
      Store.dispatch(createMessage({uid, content: message}));
      setMessage('');
      setLoading(false);
    },
    [message, props.uid],
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input, {height: Math.max(35, inputHeigth)}]}
        placeholder="Type a message..."
        multiline={true}
        onChangeText={text => setMessage(text)}
        onContentSizeChange={event =>
          setInputHeigth(event.nativeEvent.contentSize.height)
        }
        value={message}
      />
      <TouchableHighlight
        underlayColor={Colors.neutral.s100}
        onPress={onSend}
        disabled={loading}>
        <View style={styles.iconContainer}>
          <TelegramIcon />
        </View>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    flex: 1,
    backgroundColor: Colors.neutral.s200,
    height: Sizing.x40,
    width: '100%',
    paddingHorizontal: 10,
  },
  input: {
    height: Sizing.x40,
    borderColor: 'gray',
    borderWidth: Outlines.borderWidth.hairline,
    width: '90%',
    padding: Sizing.x10,
    borderRadius: Outlines.borderRadius.base,
    backgroundColor: Colors.neutral.white,
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '10%',
    height: Sizing.x40,
  },
});

export default MessageForm;
