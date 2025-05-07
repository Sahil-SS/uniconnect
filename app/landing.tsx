import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import colors from "@/data/colors";
import Button from "@/components/Shared/Button";
import { useRouter } from "expo-router";

export default function LandingScreen() {
  const router = useRouter();
  return (
    <View>
      <Image
        source={require("./../assets/images/login.png")}
        style={{ width: "100%", height: 480,  backgroundColor: colors.background  }}
      />
      <View style={{ padding: 20,}}>
        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
            textAlign: "center",
            marginTop: 20,
          }}
        >
          Welcome to UniConnect
        </Text>
        <Text
          style={{
            color: colors.gray,
            fontSize: 20,
            textAlign: "center",
            marginTop: 10,
          }}
        >
          Connect with your university community
        </Text>
        <Text
          style={{
            color: colors.gray,
            fontSize: 20,
            textAlign: "center",
            marginTop: 10,
          }}
        >
          Join us and explore the possibilities
        </Text>
        <Button
          text="Get Started"
          // onPress={() => router.push("/(auth)/SignUp")}
          onPress={() => router.push("/(auth)/LogIn")}

        />
        <Pressable onPress={() => router.push("/(auth)/LogIn")}>
          <Text
            style={{
              color: colors.gray,
              fontSize: 16,
              textAlign: "center",
              marginTop: 10,
            }}
          >
            Already have an account?{" "}
            <Text style={{ color: colors.primary }}>Login Here</Text>
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
