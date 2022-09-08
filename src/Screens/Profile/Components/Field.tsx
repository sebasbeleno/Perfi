import React from 'react';
import {View, TextInput, Text, StyleSheet} from 'react-native';
import {Typography} from '../../../Styles';

interface FieldProps {
  label: string;
  value: string;
  name: string;
  loading: boolean;
  onChangeField: (value: string, label: string) => void;
}

const Field = (props: FieldProps) => {
  return (
    <View>
      <Text style={Styles.label}>{props.label}</Text>
      <TextInput
        style={Styles.input}
        editable={!props.loading}
        value={'' + props.value === 'undefined' ? '' : '' + props.value}
        onChangeText={text => props.onChangeField(text, props.name)}
      />
    </View>
  );
};

const Styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
  },
  label: {
    fontSize: Typography.fontSize.x20,
    ...Typography.bold.x30,
  },
});
export default Field;
