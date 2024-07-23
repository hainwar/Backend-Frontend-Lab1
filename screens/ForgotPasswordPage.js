import { Text, View, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import LoginPage from "./LoginPage";

const TextInputCustom =({ name, color }) => (
    <TextInput
    placeholder={` ${name}`}
    style={{
      borderColor: 'gray',
      width:'90%',
      height:64,
      marginBottom:10,
      paddingHorizontal:10,
      color: color,
      backgroundColor:'white',
      shadowColor:'black',
      shadowRadius: 1,
      shadowOpacity:0.2,
      fontFamily:'MetroLight',
      fontSize:15,
    }}
    placeholderTextColor={color}
    />
  )
  
  const ButtonCustom = ({ color, text}) => (
      <View style={{
        backgroundColor: color,
        width: '90%',
        height: 50,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems:'center'
      }}>
        <Text style={{
          textAlign: 'center',
          fontSize:15,
          color:'white',
          fontFamily:'MetroBold',
          letterSpacing:1,
        }}> {text}

        </Text>
        </View>
    );
  
  const ForgotPasswordPage = ({navigation}) => (
    <View style={{

      backgroundColor:'#F5F5F5'
  }}>
    <View style={{
      flex:1,
      justifyContent:'flex-start',
      width:'100%',
      top:35,
    }}>
      <Text style={{
        alignItems:'flex-start',
        paddingLeft:14,
        fontSize:34,
        color:'#222222',
        fontFamily:'MetroBold'
      }}>Forgot Password</Text>
    
      <Text style={{
        top:20,
        paddingHorizontal:15,
        fontSize:14,
        width:'100%',
        fontFamily:'MetroLight',
      }}>Please, enter your email address. You will receive a link to create a new password via email.</Text>
    </View>

  <View style={{
    flex:1,
    justifyContent:'center',
    alignSelf:'center',
    alignItems:'center',
    minHeight:250,
    width:'100%'
  }}>
    <TextInputCustom name='Email' color='#666666' />
  </View>

  <TouchableOpacity onPress={() => navigation.navigate(LoginPage)}>
  <View style={{
    flex:1,
    justifyContent:'flex-end',
    alignItems:'center',
    width:'100%',
    bottom:50
  }}>
    <ButtonCustom color='red' text='SEND' />
  </View>
    </TouchableOpacity>
  </View>
);

export default ForgotPasswordPage
