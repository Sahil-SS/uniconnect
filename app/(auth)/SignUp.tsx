import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Entypo from "@expo/vector-icons/Entypo";
import colors from "@/data/colors";
import TextInputField from "@/components/Shared/TextInputField";
import Button from "@/components/Shared/Button";

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);

  const onBtnPress = () => {
    console.log("Sign Up Button Pressed");
  };

  return (
    <View style={{ paddingTop: 50, padding: 20 }}>
      <Text style={{ fontSize: 30, fontWeight: "bold", marginTop: 20 }}>
        Create an Account!
      </Text>

      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <View>
          <Image
            style={{ width: 100, height: 100, borderRadius: 99, marginTop: 30 }}
            source={require("./../../assets/images/profile.png")}
          />
          <Entypo
            name="camera"
            size={24}
            color={colors.primary}
            style={{
              position: "absolute",
              bottom: 0,
              right: 0,
              backgroundColor: "black",
              borderRadius: 99,
              padding: 5,
            }}
          />
        </View>
      </View>

      {/* Input fields */}
      <TextInputField
        label="Full Name"
        onChangeText={(v) => console.log("Name Entered:", v)}
      />

      <TextInputField
        label="Email ID"
        onChangeText={(v) => console.log("Email Entered:", v)}
      />

      {/* Password field with eye toggle */}
      <View style={{ position: "relative", justifyContent: "center" }}>
        <TextInputField
          label="Password"
          password={!showPassword}
          onChangeText={(v) => console.log("Password Entered:", v)}
        />
        <TouchableOpacity
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            right: 10,
            top: 20,
          }}
          onPress={() => setShowPassword(!showPassword)}
        >
          <Entypo
            name={showPassword ? "eye" : "eye-with-line"}
            size={24}
            color="gray"
          />
        </TouchableOpacity>
      </View>

      {/* Sign Up button */}
      <Button text="Sign Up" onPress={onBtnPress} />
    </View>
  );
}
