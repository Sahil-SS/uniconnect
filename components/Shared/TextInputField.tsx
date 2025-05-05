import { View, Text, TextInput } from 'react-native'
import React from 'react'

type TextInputFieldProps = {
  label: string,
  onChangeText:(text:string) => void,
  password?: boolean,
}

export default function TextInputField({label,onChangeText,password=false}:TextInputFieldProps) {
  return (
    <View>
      <Text style={{marginTop:15}}>{label}</Text>
      <TextInput placeholder={label} style={{padding:15, borderWidth:0.2, borderRadius:5, marginTop:5, fontSize:17}} secureTextEntry={password} />
    </View>
  )
}