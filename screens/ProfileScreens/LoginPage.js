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
    top:120,
  }}>
    <TextInputCustom name='Email' color='#666666' />
    <TextInputCustom name='Password' color='#666666'secureTextEntry={true}/>
  </View>

  <TouchableOpacity
  style={{
    flex:1,
    alignSelf:'flex-end',
    right:19,
    top:25,
  }}
  onPress={() => navigation.navigate('ForgotPassword')}>
    <Text style={{
      color:'#222222',
      fontSize:15,
      fontFamily:'MetroMedium',
    }}>Forgot your password?</Text>
  </TouchableOpacity>

  <View style={{
    justifyContent:'flex-end',
    top:70,
  }}>
    <TouchableOpacity onPress={() => alert('Login')} style={{
      width:'100%',
      alignItems:'center',
    }}>
    <ButtonCustom color='red' text='LOGIN' />
    </TouchableOpacity>
  </View>

  <View style={{
    alignSelf:'center',

  }}>
    <Text style={{
      color:'#222222',
      fontSize:15,
      top:130,
      fontFamily:'MetroMedium',
      fontSize:15,
    }}>Or sign up with social account</Text>
  </View>

  <View style={{
      alignSelf:'center',
      top:80,
    }}>
      <Image source={require('../../assets/img/go-log.png')} style={{
        width: 180,
        height: 180,
        resizeMode: 'contain'
      }}/>
      <Image source={require('../../assets/img/fb-log.png')} style={{
        bottom: 140,
        width: 180,
        height: 180,
        resizeMode: 'contain'
      }}/>
      <Image source={require('../../assets/img/apple-log.png')} style={{
        bottom: 280,
        width: 180,
        height: 180,
        resizeMode: 'contain'
      }}/>
  </View>
  </View>
)

export default LoginPage
