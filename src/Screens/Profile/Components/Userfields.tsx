import React, {useState} from 'react';
import {
  Alert,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import UserService from '../../../Services/UserService';
import {Colors, Outlines, Sizing, Typography} from '../../../Styles';
import {userType} from '../../../types';
import Field from './Field';

interface UserFieldsProps {
  user: userType;
  getUser: () => void;
}

const fields = [
  {
    label: 'Name',
    name: 'name',
  },
  {
    label: 'Age',
    name: 'age',
  },
  {
    label: 'Position',
    name: 'position',
  },
  {
    label: 'Phone',
    name: 'Phone',
  },
];

const UserFields = (props: UserFieldsProps) => {
  const [values, setValues] = useState(Object.assign({}, props.user));
  const [loading, setLoading] = useState(false);

  const RenderUserAvatar = (url: string | null) => {
    if (url) {
      return <Image source={{uri: url}} style={styles.avatar} />;
    } else {
      return (
        <Image
          source={{
            uri: 'https://external-preview.redd.it/4PE-nlL_PdMD5PrFNLnjurHQ1QKPnCvg368LTDnfM-M.png?auto=webp&s=ff4c3fbc1cce1a1856cff36b5d2a40a6d02cc1c3',
          }}
          style={styles.avatar}
        />
      );
    }
  };

  const Header = () => {
    return (
      <View style={styles.headerContiner}>
        {RenderUserAvatar(props.user.photoURL)}
        <Text style={styles.name}>{props.user.name}</Text>
      </View>
    );
  };

  const onChangeField = (value: string, label: string) => {
    setValues({...values, [label]: value});
  };

  const handleUpdateProfile = async () => {
    try {
      setLoading(true);
      await UserService.updateUser(values);
      setLoading(false);
      props.getUser();
      Alert.alert('Works!', 'Profile updated successfully');
    } catch (error) {}
  };

  const SendButton = () => {
    return (
      <View style={{marginBottom: Sizing.x50}}>
        <TouchableHighlight
          disabled={loading}
          style={styles.buttonContainter}
          onPress={handleUpdateProfile}>
          <View>
            <Text style={styles.buttonText}>
              {loading ? 'Loading' : 'Update profile'}
            </Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  };

  return (
    <View>
      <Header />
      <FlatList
        data={fields}
        ListFooterComponent={SendButton}
        renderItem={({item}) => (
          <Field
            label={item.label}
            name={item.name}
            value={values[item.name]}
            loading={loading}
            onChangeField={onChangeField}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContiner: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.neutral.white,
    borderTopLeftRadius: Outlines.borderRadius.base,
    borderTopRightRadius: Outlines.borderRadius.base,
    paddingVertical: Sizing.x10,
  },
  avatar: {
    width: Sizing.x80,
    height: Sizing.x80,
    borderRadius: 50,
  },
  name: {
    ...Typography.fontWeight.bold,
    ...Typography.fontSize.x40,
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
export default UserFields;
