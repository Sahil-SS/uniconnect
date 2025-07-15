import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import colors from "@/data/colors";
import Button from "@/components/Shared/Button";
import { useRouter } from "expo-router";

export default function LandingScreen() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      {/* Header Image */}
      <Image
        source={require("./../assets/images/login.png")}
        style={{
          width: "100%",
          height: 480,
          resizeMode: "cover",
          backgroundColor: colors.background,
        }}
      />

      {/* Welcome Section */}
      <View style={{ padding: 20, borderRadius: 20, backgroundColor: colors.card }}>
        <Text
          style={{
            fontSize: 32,
            fontWeight: "bold",
            textAlign: "center",
            color: colors.white,
            marginTop: 10,
          }}
        >
          Welcome to UniConnect
        </Text>

        <Text
          style={{
            color: colors.gray,
            fontSize: 18,
            textAlign: "center",
            marginTop: 10,
          }}
        >
          Connect with your university community
        </Text>

        <Text
          style={{
            color: colors.gray,
            fontSize: 18,
            textAlign: "center",
            marginTop: 4,
          }}
        >
          Join us and explore the possibilities
        </Text>

        {/* Get Started Button */}
        <View style={{ marginTop: 30 }}>
          <Button
            text="Get Started"
            onPress={() => router.push("/(tabs)/Home")}
            loading={false}
          />
        </View>

        {/* Already have an account */}
        <Pressable onPress={() => router.push("/(auth)/LogIn")}>
          <Text
            style={{
              color: colors.gray,
              fontSize: 16,
              textAlign: "center",
              marginTop: 20,
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
