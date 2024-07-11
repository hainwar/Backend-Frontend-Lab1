import { Text, View, TextInput, Image, TouchableOpacity } from "react-native";
import React from "react";

const TextInputCustom =({ name, color, secureTextEntry }) => (
    <TextInput
    placeholder={` ${name}`}
    secureTextEntry={secureTextEntry}
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
        />
      )
    
    const ButtonCustom = ({ color, text}) => (
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
          color:'white',
          fontFamily:'MetroBold',
          letterSpacing:1,
        }}> {text}

        </Text>
        </View>
    );
  
  const LoginPage = ({navigation}) => (
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
      top:35
    }}>
      <Text style={{
        fontSize:34,
        color:'#222222',
        fontFamily:'MetroBold'
      }}>Login</Text>
    </View>

  <View style={{
    flex:1,
    width:'100%',
    alignSelf:'center',
    alignItems:'center',
    minHeight:250,
    top:19
  }}>
    <TextInputCustom name='Email' color='#666666' />
    <TextInputCustom name='Password' color='#666666'secureTextEntry={true}/>
  </View>

  <TouchableOpacity
  style={{
    flex:1,
    alignSelf:'flex-end',
    bottom:80,
    right:18,
  }}
  onPress={() => navigation.navigate('ForgotPassword')}>
    <Text style={{
      color:'#222222',
      fontSize:15,
      fontFamily:'MetroMedium',
    }}>Forgot your password?</Text>
  </TouchableOpacity>

  <TouchableOpacity onPress={() => alert('Login')}>
  <View style={{

    justifyContent:'flex-end',
    alignItems:'center',
    bottom:115,
    width:'100%',
  }}>
    <ButtonCustom color='red' text='LOGIN' />
  </View>
    </TouchableOpacity>

  <View style={{
    alignSelf:'center',

  }}>
    <Text style={{
      color:'#222222',
      fontSize:15,
      bottom:50,
      fontFamily:'MetroMedium',
      fontSize:15,
    }}>Or sign up with social account</Text>
  </View>

  <View style={{
    flexDirection:'row',
    columnGap:20,
    alignSelf:'center',
    bottom:30
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

export default LoginPage
