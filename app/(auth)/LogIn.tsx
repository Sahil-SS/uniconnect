import { View, Text } from 'react-native'
import React from 'react'

export default function LogIn() {
  return (
    <View style={{
        paddingTop: 50,
        padding: 20,
        backgroundColor: "#fff",
    }}>
      <Text style={{
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 20,
      }}>Log In</Text>
    </View>
  )
}