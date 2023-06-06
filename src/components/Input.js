import { StyleSheet, TextInput } from "react-native";
import React from "react";

const Input = ({ placeholder, secureTextEntry }) => {
  return (
    <TextInput
      placeholder={placeholder}
      style={styles.input}
      secureTextEntry={secureTextEntry}
    />
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    height: 48,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginBottom: 20,
  },
});
