// import { View, Text, Image, TouchableOpacity, ToastAndroid } from "react-native";
// import React, { useState } from "react";
// import Entypo from "@expo/vector-icons/Entypo";
// import colors from "@/data/colors";
// import TextInputField from "@/components/Shared/TextInputField";
// import Button from "@/components/Shared/Button";
// import * as ImagePicker from "expo-image-picker";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { auth } from "@/configs/FirebaseConfigs";

// export default function SignUp() {
//   const [profileImage, setProfileImage] = useState<string | undefined>();
//   const [email, setEmail] = useState<string | undefined>();
//   const [password, setPassword] = useState<string | undefined>();
//   const [name, setName] = useState<string | undefined>();
//   const [showPassword, setShowPassword] = useState(false);

//   const onBtnPress = () => {
//     if (!email || !password || !name) {
//       ToastAndroid.show("Please fill all the fields", ToastAndroid.LONG);
//       return;
//     }
//     createUserWithEmailAndPassword(auth, email, password)
//   .then(async (userCredential) => {
//     console.log(userCredential);
//     //Upload the Profile Image to Firebase Storage

//     //Save to Database
//   })
//   .catch((error) => {
//     const errMsg = error?.message || "Signup failed";
//     ToastAndroid.show(errMsg, ToastAndroid.LONG);
//   });
  

//   };

//   const pickImage = async () => {
//     // No permissions request is necessary for launching the image library
//     let result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ["images"],
//       allowsEditing: true,
//       aspect: [4, 4],
//       quality: 0.5,
//     });

//     console.log(result);

//     if (!result.canceled) {
//       setProfileImage(result.assets[0].uri);
//     }
//   };

//   return (
//     <View style={{ paddingTop: 50, padding: 20 }}>
//       <Text style={{ fontSize: 30, fontWeight: "bold", marginTop: 20 }}>
//         Create an Account!
//       </Text>

//       <View style={{ alignItems: "center", justifyContent: "center" }}>
//         <View>
//           <TouchableOpacity onPress={()=>pickImage()}>
//           {/* Profile Image Picker */}
//           {/* If profileImage is set, show it, otherwise show default image */}
//           {profileImage ? (
//             <Image
//               source={{ uri: profileImage }}
//               style={{
//                 width: 100,
//                 height: 100,
//                 borderRadius: 99,
//                 marginTop: 30,
//               }}
//             />
//           ) : (
//             <Image
//               style={{
//                 width: 100,
//                 height: 100,
//                 borderRadius: 99,
//                 marginTop: 30,
//               }}
//               source={require("./../../assets/images/profile.png")}
//             />
//           )}

//           <Entypo
//             name="camera"
//             size={24}
//             color={colors.primary}
//             style={{
//               position: "absolute",
//               bottom: 0,
//               right: 0,
//               backgroundColor: "white",
//               borderRadius: 99,
//               padding: 5,
//             }}
//           />
//           </TouchableOpacity>
//         </View>
//       </View>

//       {/* Input fields */}
//       <TextInputField label="Full Name" onChangeText={(v) => setName(v)} />

//       <TextInputField label="Email ID" onChangeText={(v) => setEmail(v)} />

//       {/* Password field with eye toggle */}
//       <View style={{ position: "relative", justifyContent: "center" }}>
//         <TextInputField
//           label="Password"
//           password={!showPassword}
//           onChangeText={(v) => setPassword(v)}
//         />
//         <TouchableOpacity
//           style={{
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             position: "absolute",
//             right: 10,
//             top: 20,
//           }}
//           onPress={() => setShowPassword(!showPassword)}
//         >
//           <Entypo
//             name={showPassword ? "eye" : "eye-with-line"}
//             size={24}
//             color="gray"
//           />
//         </TouchableOpacity>
//       </View>

//       {/* Sign Up button */}
//       <Button text="Sign Up" onPress={onBtnPress} />
//     </View>
//   );
// }
