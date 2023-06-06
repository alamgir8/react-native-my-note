import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import Button from "../components/Button";
import Input from "../components/Input";

const SignUp = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ paddingHorizontal: 16, paddingVertical: 24 }}>
        <Input placeholder="Full Name" />
        <Input placeholder="Email Address" />
        <Input placeholder="Age" />
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
          title="Signup"
          customStyle={{ alignSelf: "center", marginBottom: 60 }}
        />
        <Pressable onPress={() => navigation.navigate("SignIn")}>
          <Text>
            Have an account?{" "}
            <Text style={{ color: "green", fontWeight: "bold" }}>Sign In</Text>
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({});
