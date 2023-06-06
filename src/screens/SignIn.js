import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import Button from "../components/Button";
import Input from "../components/Input";

const SignIn = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Image
        source={require("../../assets/Sign_in.png")}
        style={{
          alignSelf: "center",
          // alignItems: "center",
          width: 250,
          height: 250,
        }}
      />
      <Text style={styles.loginText}>Never forget your notes</Text>
      <View style={{ paddingHorizontal: 16, paddingVertical: 24 }}>
        <Input placeholder="Email Address" />
        <Input placeholder="Password" secureTextEntry />
      </View>
      <View
        style={{
          flex: 1,
          // flexDirection: "col",
          justifyContent: "flex-end",
          alignItems: "center",
          marginBottom: 50,
        }}
      >
        <Button
          title="Login"
          customStyle={{ alignSelf: "center", marginBottom: 60 }}
        />
        <Pressable onPress={() => navigation.navigate("SignUp")}>
          <Text>
            Don't have an account?{" "}
            <Text style={{ color: "green", fontWeight: "bold" }}>Sign Up</Text>
          </Text>
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
});
