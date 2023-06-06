import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { SignInSvg } from "../svg";
import Button from "../components/Button";

const SignIn = () => {
  return (
    <SafeAreaView>
      <Image
        source={require("../../assets/Sign_in.png")}
        style={{
          alignSelf: "center",
          //   alignItems: "center",
          width: 250,
          height: 250,
        }}
      />
      <Text style={styles.loginText}>Never forget your notes</Text>
      <View
        style={{ paddingHorizontal: 16, paddingVertical: 24, marginBottom: 20 }}
      >
        <TextInput placeholder="Email Address" style={styles.input} />
        <TextInput
          placeholder="Password"
          style={styles.input}
          secureTextEntry
        />
      </View>
      <View
        style={{
          //   flex: 1,
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <Button
          title="Login"
          customStyle={{ alignSelf: "center", marginTop: 20 }}
        />
        <Pressable>
          <Text>Don't have an account?</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  loginText: {
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
  },
  input: {
    height: 48,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginBottom: 20,
  },
});
