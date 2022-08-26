import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';
import {Colors, Outlines, Sizing, Typography} from '../../Styles';
import {Store} from '../../Redux/Store';
import {addPost} from '../../Redux/Posts/actions';

const AddPost = (props: any) => {
  const [content, setContent] = useState('');

  const handleAddPost = () => {
    Store.dispatch(addPost(content));
    props.navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View>
        <View>
          <Text style={styles.headerTitle}>Add Post</Text>
        </View>
        <View style={styles.textAreaContainer}>
          <TextInput
            onChangeText={newText => setContent(newText)}
            style={styles.textArea}
            underlineColorAndroid="transparent"
            placeholder="Type something"
            placeholderTextColor="grey"
            numberOfLines={10}
            multiline={true}
          />
        </View>
        <View>
          <Text style={styles.textCount}>{content.length}/280</Text>
        </View>
      </View>
      <View style={{marginBottom: Sizing.x50}}>
        <TouchableHighlight
          style={styles.buttonContainter}
          onPress={handleAddPost}>
          <View>
            <Text style={styles.buttonText}>Post</Text>
          </View>
        </TouchableHighlight>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: Sizing.x10,
    paddingVertical: Sizing.x10,
    justifyContent: 'space-between',
  },
  headerTitle: {
    ...Typography.fontWeight.bold,
    ...Typography.fontSize.x50,
  },
  textAreaContainer: {
    ...Outlines.shadow.base,
    marginTop: Sizing.x30,
    borderColor: Colors.neutral.s200,
    borderWidth: 0.3,
    padding: Sizing.x10,
    borderRadius: Outlines.borderRadius.base,
  },
  textArea: {
    height: 150,
    justifyContent: 'flex-start',
    textAlignVertical: 'top',
  },
  textCount: {
    ...Typography.fontWeight.regular,
    ...Typography.fontSize.x20,
    textAlign: 'right',
    marginTop: Sizing.x10,
  },
  buttonContainter: {
    ...Outlines.shadow.base,
    backgroundColor: Colors.primary.s400,
    borderRadius: Outlines.borderRadius.base,
    marginTop: Sizing.x30,
    padding: Sizing.x10,
  },
  buttonText: {
    ...Typography.fontWeight.bold,
    ...Typography.fontSize.x20,
    color: Colors.neutral.white,
    textAlign: 'center',
  },
});

export default AddPost;
