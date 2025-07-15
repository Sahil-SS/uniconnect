import { View, Text } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import colors from '@/data/colors';

export default function Header() {
  return (
    <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between', padding:20, paddingTop:40}}>
        <View>
            <Text style={{fontSize: 32, fontWeight: 'bold', color:colors.primary}}>Welcome back,</Text>
            <Text style={{fontSize: 18, fontWeight: 'bold', color:"black"}}>Dayananda Sagar College of Engineering</Text>
        </View>
        <View style={{backgroundColor:"white", padding: 5, borderRadius: 99}}>
        <Ionicons name="person-add" size={40} color="black"/>
        </View>
    </View>
  )
}