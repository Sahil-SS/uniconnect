import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import colors from "@/data/colors";

type ButtonProps = {
    text: string;
    onPress: () => void;
};

const Button = ({text,onPress}:ButtonProps) => {
  return (
    <TouchableOpacity
    onPress={onPress}
      style={{
        marginTop: 20,
        backgroundColor: colors.primary,
        padding: 15,
        borderRadius: 10,
      }}
    >
      <Text style={{ fontSize: 18, color: colors.white, textAlign: "center" }}>
        {text}
      </Text>
      </TouchableOpacity>
  );
};

export default Button;
