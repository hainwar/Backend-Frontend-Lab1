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

import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";

const App = () => {
  const TextInputCustom =({ name, color }) => {
  return (
      <TextInput
      placeholder={`Masukkan ${name}`}
      style={{
        height:40,
        width: 200,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 10,
        padding:10, 
        marginBottom: 10,
        paddingLeft: 10,
        color: color
      }}
      />
  )
}

return (
  <View style={{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  }}>
    <TextInputCustom name='Username' color='black' />
    <TextInputCustom name='Email' color='red' />
    <TextInputCustom name='Password' color='blue' />
  </View>
)
}

export default App;