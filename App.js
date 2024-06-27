// import React from 'react';
// import { StyleSheet, Text, View, Image } from 'react-native';
// import ButtonCustom from './assets/components/buttonCustum';

// const App = () => {
//   return (
//     <View style={{
//       flex:1,
//       backgroundColor: 'black'
//     }}>
//       <View>
//         <Text style={{
//           fontSize:30,
//           textAlign:'center',
//           top:20,
//           bottom:0,
//           justifyContent:'center',
//           color:'red'
//         }}>
//           Selamat Datang di Welcome
//         </Text>
//         </View>

//         <View style={{
//           flex:1,
//           alignItems:'center',
//           justifyContent:'center',
//           top:200
//         }}>
//           <Image source={require('./assets/img/bg.jpg')} style={{
//             width:300,
//             height:300,
//             resizeMode:'contain'
//           }} />
//         </View>

//         <View style={{
//           flex:1,
//           alignItems:'flex-end',
//           justifyContent:'center',
//           flexDirection: 'row',
//           justifyContent: 'space-evenly',
//           marginBottom:100,
//         }}>
//           <View style={{
//             flex:1,
//             width: 90,
//             height:40,
//             justifyContent:'center',
//             borderRadius:25,
//             flexDirection:'row',
//             columnGap:20,
//             }}>
//               <ButtonCustom color='red' text='Login'/>
//               <ButtonCustom color='red' text='Sign Up'/>
//           </View>
//         </View>
//     </View>
//   )
  
// }

// export default App;


// //*Sign Up

// import { StyleSheet, Text, View, TextInput, Image } from "react-native";
// import React from "react";

// const App = () => {
//   const TextInputCustom =({ name, color }) => {
//     return (
//         <TextInput
//         placeholder={` ${name}`}
//         style={{
//           borderColor: 'gray',
//           width:355,
//           height:64,
//           marginBottom:10,
//           paddingHorizontal:10,
//           color: color,
//           backgroundColor:'white',
//           shadowColor:'black',
//           shadowRadius: 1,
//           shadowOpacity:0.2,
//         }}
//         />
//     )
//   }
//   const ButtonCustom = ({ color, text}) => {
//     return (
//       <View style={{
//         backgroundColor: color,
//         width: '90%',
//         height: 50,
//         borderRadius: 20,
//         justifyContent: 'center'
//       }}>
//         <Text style={{
//           textAlign: 'center',
//           fontSize:15,
//           color:'white'
//         }}> {text}

//         </Text>
//         </View>
//     );
//   }
// return (
//   <View style={{
//     flex:1,
//     backgroundColor:'#F5F5F5'
//   }}>
//     <View style={{
//       flex:1,
//       alignItems:'flex-start',
//       justifyContent:'flex-start',
//       width:'100%',
//       paddingLeft:14,
//       top:106
//     }}>
//       <Text style={{
//         fontSize:34,
//         lineHeight:34,
//         fontWeight:'bold',
//         color:'#222222'
//       }}>Sign Up</Text>
//     </View>

//   <View style={{
//     flex:1,
//     width:343,
//     height:64,
//     alignSelf:'center',
//     alignItems:'center',
//   }}>
//     <TextInputCustom name='Name' color='666666' />
//     <TextInputCustom name='Email' color='666666' />
//     <TextInputCustom name='Password' color='666666' />
//   </View>

//   <View style={{
//     alignSelf:'flex-end',
//     right:17
//   }}>
//     <Text style={{
//       color:'#222222',
//     }}>Already have an account?</Text>
//   </View>

//   <View style={{
//     flex:1,
//     justifyContent:'flex-end',
//     alignItems:'center',
//     bottom:110,
//     width:'100%',
//   }}>
//     <ButtonCustom color='red' text='SIGN UP' />
//   </View>

//   <View style={{
//     alignSelf:'center',

//   }}>
//     <Text style={{
//       color:'#222222',
//       fontSize:14,
//       bottom:40
//     }}>Or sign up with social account</Text>
//   </View>

//   <View style={{
//     flexDirection:'row',
//     columnGap:20,
//     alignSelf:'center',
//     bottom:25
//   }}>
//     <View style={{
//       backgroundColor:'white',
//       borderRadius:10,
//       padding:10
//     }}>
//     <Image source={require('./assets/img/google.png')} style={{
//       height:30,
//       width:50,
//       resizeMode:'contain',
//     }}/>
//   </View>
//     <View style={{
//       backgroundColor:'white',
//       borderRadius:10,
//       padding:10
//     }}>
//     <Image source={require('./assets/img/facebook.png')} style={{
//       height:30,
//       width:50,
//       resizeMode:'contain',
//     }}/>
//   </View>
//   </View>
//   </View>
// )
// }

// export default App;

// //* Login

// import { StyleSheet, Text, View, TextInput, Image } from "react-native";
// import React from "react";

// const App = () => {
//   const TextInputCustom =({ name, color }) => {
//     return (
//         <TextInput
//         placeholder={` ${name}`}
//         style={{
//           borderColor: 'gray',
//           width:355,
//           height:64,
//           marginBottom:10,
//           paddingHorizontal:10,
//           color: color,
//           backgroundColor:'white',
//           shadowColor:'black',
//           shadowRadius: 1,
//           shadowOpacity:0.2,
//         }}
//         />
//     )
//   }
//   const ButtonCustom = ({ color, text}) => {
//     return (
//       <View style={{
//         backgroundColor: color,
//         width: '90%',
//         height: 50,
//         borderRadius: 20,
//         justifyContent: 'center'
//       }}>
//         <Text style={{
//           textAlign: 'center',
//           fontSize:15,
//           color:'white'
//         }}> {text}

//         </Text>
//         </View>
//     );
//   }
// return (
//   <View style={{
//     flex:1,
//     backgroundColor:'#F5F5F5'
//   }}>
//     <View style={{
//       flex:1,
//       alignItems:'flex-start',
//       justifyContent:'flex-start',
//       width:'100%',
//       paddingLeft:14,
//       top:106
//     }}>
//       <Text style={{
//         fontSize:34,
//         lineHeight:34,
//         fontWeight:'bold',
//         color:'#222222'
//       }}>Login</Text>
//     </View>

//   <View style={{
//     flex:1,
//     width:343,
//     height:64,
//     alignSelf:'center',
//     alignItems:'center',
//   }}>
//     <TextInputCustom name='Email' color='666666' />
//     <TextInputCustom name='Password' color='666666' />
//   </View>

//   <View style={{
//     alignSelf:'flex-end',
//     bottom:40,
//     right:17
//   }}>
//     <Text style={{
//       color:'#222222',
//     }}>Forgot your password?</Text>
//   </View>

//   <View style={{
//     flex:1,
//     justifyContent:'flex-end',
//     alignItems:'center',
//     bottom:150,
//     width:'100%',
//   }}>
//     <ButtonCustom color='red' text='LOGIN' />
//   </View>

//   <View style={{
//     alignSelf:'center',

//   }}>
//     <Text style={{
//       color:'#222222',
//       fontSize:14,
//       bottom:50
//     }}>Or sign up with social account</Text>
//   </View>

//   <View style={{
//     flexDirection:'row',
//     columnGap:20,
//     alignSelf:'center',
//     bottom:35
//   }}>
//     <View style={{
//       backgroundColor:'white',
//       borderRadius:10,
//       padding:10
//     }}>
//     <Image source={require('./assets/img/google.png')} style={{
//       height:30,
//       width:50,
//       resizeMode:'contain',
//     }}/>
//   </View>
//     <View style={{
//       backgroundColor:'white',
//       borderRadius:10,
//       padding:10
//     }}>
//     <Image source={require('./assets/img/facebook.png')} style={{
//       height:30,
//       width:50,
//       resizeMode:'contain',
//     }}/>
//   </View>
//   </View>
//   </View>
// )
// }

// export default App;


// //* Forgot Password

// import { StyleSheet, Text, View, TextInput, Image } from "react-native";
// import React from "react";

// const App = () => {
//   const TextInputCustom =({ name, color }) => {
//     return (
//         <TextInput
//         placeholder={` ${name}`}
//         style={{
//           borderColor: 'gray',
//           width:355,
//           height:64,
//           marginBottom:10,
//           paddingHorizontal:10,
//           color: color,
//           backgroundColor:'white',
//           shadowColor:'black',
//           shadowRadius: 1,
//           shadowOpacity:0.2,
//         }}
//         placeholderTextColor={color}
//         />
//     )
//   }
//   const ButtonCustom = ({ color, text}) => {
//     return (
//       <View style={{
//         backgroundColor: color,
//         width: '90%',
//         height: 50,
//         borderRadius: 20,
//         justifyContent: 'center'
//       }}>
//         <Text style={{
//           textAlign: 'center',
//           fontSize:15,
//           color:'white'
//         }}> {text}

//         </Text>
//         </View>
//     );
//   }
// return (
//   <View style={{
//     flex:1,
//     backgroundColor:'#F5F5F5'
//   }}>
//     <View style={{
//       flex:1,
//       justifyContent:'flex-start',
//       width:'100%',
//       top:106,
//     }}>
//       <Text style={{
//         alignItems:'flex-start',
//         paddingLeft:14,
//         fontSize:34,
//         lineHeight:34,
//         fontWeight:'bold',
//         color:'#222222'
//       }}>Forgot Password</Text>
    
//       <Text style={{
//         top:40,
//         paddingHorizontal:15,
//         fontSize:14,
//         width:'101%'
//       }}>Please, enter your email address. You will receive a link to create a new password via email.</Text>
//     </View>

//   <View style={{
//     flex:1,
//     alignSelf:'center',
//     alignItems:'center',
//     top:10
//   }}>
//     <TextInputCustom name='Email' color='666666' />
//   </View>

//   <View style={{
//     flex:1,
//     justifyContent:'flex-end',
//     alignItems:'center',
//     bottom:250,
//     width:'100%',
//   }}>
//     <ButtonCustom color='red' text='SEND' />
//   </View>
//   </View>
// )
// }

// export default App;


//* UseFonts

// import { StyleSheet, Text, View } from "react-native";
// import React from "react";
// import { useFonts } from "expo-font";

// const App = () => {
//   const [fontLoaded, fontError] = useFonts({
//     'Metro-Bold': require('./assets/fonts/Metropolis-Bold.otf'),
//   })

//   if (!fontLoaded) return <View>
//     <Text>Font Tidak Ditemukan!</Text>
//   </View>

//   return(
//     <View style={{
//       flex:1,
//       justifyContent:'center',
//       alignItems:'center'
//     }}>
//       <Text style>Hello World</Text>
//       <Text style={{
//         fontFamily: 'Metro-Bold',
//         fontSize:30
//       }}>Metro Bold</Text>
//     </View>
//   )
// }

// export default App

// import { StyleSheet, View, Text } from "react-native";
// import React from "react";
// import { useFonts } from "expo-font";

// const App = () => {
//   const [fontLoaded, fontError] = useFonts({
//     'Metro-Bold': require('./assets/fonts/Metropolis-Bold.otf'),
//     'Metro-Medium': require('./assets/fonts/Metropolis-Medium.otf'),
//     'Metro-SemiBold': require('./assets/fonts/Metropolis-SemiBold.otf'),
//     'Metro-Black': require('./assets/fonts/Metropolis-Black.otf'),
//   })

//   if (!fontLoaded) return <View>
//     <Text>Font Tidak Ditemukan!</Text>
//   </View>

//   return(
//     <View style={{
//       flex:1,
//       justifyContent:'center',
//       alignItems:'center',
//     }}>
//       <Text style={{
//         fontSize:30
//       }}>Font Biasa</Text>
//       <Text style={{
//         fontFamily:'Metro-Bold',
//         fontSize:30
//       }}>Metro Bold</Text>
//       <Text style={{
//         fontFamily:'Metro-Medium',
//         fontSize:30
//       }}>Metro Medium</Text>
//       <Text style={{
//         fontFamily:'Metro-SemiBold',
//         fontSize:30
//       }}>Metro SemiBold</Text>
//       <Text style={{
//         fontFamily:'Metro-Black',
//         fontSize:30
//       }}>Metro Black</Text>
//     </View>
//   )
// }

// export default App

import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from './node_modules/@react-navigation/native';
import { createNativeStackNavigator } from './node_modules/@react-navigation/native-stack';
import LoginPage from './assets/components/Login';
import { createBottomTabNavigator } from './node_modules/@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
function MyTabs(){
  return(
    <Tab.Navigator>
      <Tab.Screen options={{
        headerShown:false
      }}
      name="Home" component={HomeScreen} />

      <Tab.Screen name='Login' component={LoginPage} />
    </Tab.Navigator>
  )
}

function HomeScreen({navigation}){
  return (
    <View style={{
      flex:1,
      alignItems:'center',
      justifyContent:'center',
    }}>
      <Text style={{
        fontSize:16,
        fontWeight:'bold',
        padding:15
      }}>Home Screen</Text>
      <Button title="Go to Login" onPress={() => navigation.navigate('Login')}
      />
    </View>
  )
}

const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={MyTabs} />
        <Stack.Screen name="Login" component={LoginPage} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App