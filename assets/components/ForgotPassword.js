import { StyleSheet, Text, View, TextInput, Image } from "react-native";
import React from "react";

const ForgotPassword = () => {
  const TextInputCustom =({ name, color }) => {
    return (
        <TextInput
        placeholder={` ${name}`}
        style={{
          borderColor: 'gray',
          width:355,
          height:64,
          marginBottom:10,
          paddingHorizontal:10,
          color: color,
          backgroundColor:'white',
          shadowColor:'black',
          shadowRadius: 1,
          shadowOpacity:0.2,
        }}
        placeholderTextColor={color}
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
      justifyContent:'flex-start',
      width:'100%',
      top:106,
    }}>
      <Text style={{
        alignItems:'flex-start',
        paddingLeft:14,
        fontSize:34,
        lineHeight:34,
        fontWeight:'bold',
        color:'#222222'
      }}>Forgot Password</Text>
    
      <Text style={{
        top:40,
        paddingHorizontal:15,
        fontSize:14,
        width:'101%'
      }}>Please, enter your email address. You will receive a link to create a new password via email.</Text>
    </View>

  <View style={{
    flex:1,
    alignSelf:'center',
    alignItems:'center',
    top:10
  }}>
    <TextInputCustom name='Email' color='666666' />
  </View>

  <View style={{
    flex:1,
    justifyContent:'flex-end',
    alignItems:'center',
    bottom:250,
    width:'100%',
  }}>
    <ButtonCustom color='red' text='SEND' />
  </View>
  </View>
)
}

export default ForgotPassword;
