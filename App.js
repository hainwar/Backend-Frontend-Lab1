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

import { StyleSheet, Text, View, TextInput, Image } from "react-native";
import React from "react";

const App = () => {
  const TextInputCustom =({ name, color }) => {
    return (
        <TextInput
        placeholder={` ${name}`}
        style={{
          borderColor: 'gray',
          width:'390px',
          height:'64px',
          marginBottom:10,
          padding:10,
          color: color,
          backgroundColor:'white',
          shadowColor:'black',
          shadowRadius: 1,
          shadowOpacity:0.2,
        }}
        />
    )
  }
  const ButtonCustom = ({ color, text}) => {
    return (
      <View style={{
        backgroundColor: color,
        width: '90%',
        height: 50,
        borderRadius: 20,
        justifyContent: 'center'
      }}>
        <Text style={{
          textAlign: 'center',
          fontSize:15,
          color:'white'
        }}> {text}

        </Text>
        </View>
    );
  }
return (
  <View style={{
    flex:1,
    backgroundColor:'#F5F5F5'
  }}>
    <View style={{
      flex:1,
      alignItems:'flex-start',
      justifyContent:'flex-start',
      width:'100%',
      paddingLeft:'14px',
      top:'106px',
    }}>
      <Text style={{
        fontSize:'34px',
        lineHeight:'34px',
        fontWeight:'bold',
        color:'#222222'
      }}>Forgot Password</Text>
    
      <Text style={{
        top:90,
        padding:8,
        fontSize:14
      }}>Please, enter your email address. You will receive a link to create a new password via email.</Text>
    </View>

  <View style={{
    flex:1,
    width:'343px',
    height:'64px',
    alignSelf:'center',
    alignItems:'center',
  }}>
    <TextInputCustom name='Email' color='666666' />
  </View>

  <View style={{
    flex:1,
    justifyContent:'flex-end',
    alignItems:'center',
    bottom:392,
    width:'100%',
  }}>
    <ButtonCustom color='red' text='SEND' />
  </View>
  </View>
)
}

export default App;
