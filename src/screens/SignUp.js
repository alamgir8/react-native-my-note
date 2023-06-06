import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import Button from "../components/Button";
import Input from "../components/Input";

const genderOptions = ["Male", "Female"];

const SignUp = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ paddingHorizontal: 16, paddingVertical: 24 }}>
        <Input placeholder="Full Name" />
        <Input placeholder="Email Address" />
        <Input placeholder="Age" />
        <Input placeholder="Password" secureTextEntry />
        {genderOptions.map((option) => (
          <Pressable key={option} style={styles.radioContainer}>
            <View style={[styles.outerCircle, styles.selectedOuterCircle]}>
              <View
                style={[styles.innerCircle, styles.selectedInnerCircle]}
              ></View>
            </View>
            <Text style={styles.radioText}>{option}</Text>
          </Pressable>
        ))}
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

const styles = StyleSheet.create({
  radioContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  outerCircle: {
    height: 30,
    width: 30,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#cfcfcf",
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  innerCircle: {
    height: 15,
    width: 15,
    borderRadius: 7.5,
    borderWidth: 1,
    borderColor: "#cfcfcf",
  },
  selectedOuterCircle: {
    borderColor: "orange",
  },
  selectedInnerCircle: {
    borderColor: "orange",
    backgroundColor: "orange",
  },
});
