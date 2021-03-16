import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';

const InputData = ({
    label, 
    placeholder, 
    keyboardType, 
    isTextArea,
    onChangeText,
    namaState,
    value,
}) => {
  if (isTextArea) {
    return (
      <>
        <Text style={styles.label}>{label}</Text>
        <TextInput
          multiline={true}
          numberOfLines={4}
          placeholder={placeholder}
          style={styles.textInputArea}
          keyboardType={keyboardType}
          onChangeText={(text)=>onChangeText(namaState,text)}
          value={value}></TextInput>
      </>
    );
  }
  return (
    <>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        style={styles.textInput}
        keyboardType={keyboardType}
        onChangeText={(text)=>onChangeText(namaState,text)}
          value={value}></TextInput>
    </>
  );
};

export default InputData;

const styles = StyleSheet.create({
  label: {
    fontSize: 19,
    marginBottom: 5,
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  textInputArea: {
    textAlignVertical: 'top',
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
});
