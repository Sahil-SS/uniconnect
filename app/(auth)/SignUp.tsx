import { View, Text, Image } from 'react-native'
import React from 'react'

export default function SignUp() {
  return (
    <View style={{
            paddingTop: 50,
            padding: 20,
        }}>
          <Text style={{
            fontSize: 30,
            fontWeight: "bold",
            marginTop: 20,
          }}>Create an Account !</Text>

          <Image style={{}} source={require("./../../assets/images/profile.png")} />
        </View>
  )
}