import { StyleSheet, Text, View, TextInput, Image } from "react-native";
import React from "react";
import { useFonts } from 'expo-font';
import { AppLoading } from 'expo';

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
  const Login = () => {
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
      paddingLeft:14,
      top:26
    }}>
      <Text style={{
        fontSize:34,
        lineHeight:34,
        color:'#222222',
        fontFamily:'Metro-Bold'
      }}>Login</Text>
    </View>

  <View style={{
    flex:1,
    width:343,
    height:64,
    alignSelf:'center',
    alignItems:'center',
    bottom:30,
    fontFamily:'Metro-SemiBold'
  }}>
    <TextInputCustom name='Email' color='666666' />
    <TextInputCustom name='Password' color='666666' />
  </View>

  <View style={{
    alignSelf:'flex-end',
    bottom:20,
    right:17
  }}>
    <Text style={{
      color:'#222222',
      fontFamily:'Metro-Medium'
    }}>Forgot your password?</Text>
  </View>

  <View style={{
    flex:1,
    justifyContent:'flex-end',
    alignItems:'center',
    bottom:80,
    width:'100%',
  }}>
    <ButtonCustom color='red' text='LOGIN' />
  </View>

  <View style={{
    alignSelf:'center',

  }}>
    <Text style={{
      color:'#222222',
      fontSize:14,
      bottom:50,
      fontFamily:'Metro-Medium'
    }}>Or sign up with social account</Text>
  </View>

  <View style={{
    flexDirection:'row',
    columnGap:20,
    alignSelf:'center',
    bottom:35
  }}>
    <View style={{
      backgroundColor:'white',
      borderRadius:10,
      padding:10
    }}>
    <Image source={require('../img/google.png')} style={{
      height:30,
      width:50,
      resizeMode:'contain',
    }}/>
  </View>
    <View style={{
      backgroundColor:'white',
      borderRadius:10,
      padding:10
    }}>
    <Image source={require('../img/facebook.png')} style={{
      height:30,
      width:50,
      resizeMode:'contain',
    }}/>
  </View>
  </View>
  </View>
)
}

export default Login;
