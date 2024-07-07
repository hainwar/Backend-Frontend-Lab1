import React from "react";
import { Text, View, TextInput, Image, TouchableOpacity } from "react-native";

const TextInputCustom =({ name, color, secureTextEntry }) => (
    <TextInput
    placeholder={`${name}`}
    secureTextEntry={secureTextEntry}
    style={{
      borderColor: 'gray',
      height:64,
      marginBottom:10,
      paddingHorizontal:10,
      color: color,
      backgroundColor:'white',
      shadowColor:'black',
      shadowRadius: 1,
      shadowOpacity:0.2,
      width:'90%',
      fontSize:15,
      fontFamily:'MetroLight',
    }}
    />
  )

const ButtonCustom = ({ color, text}) => (
    <View style={{
      backgroundColor: color,
        width: '90%',
        height: 50,
        borderRadius: 20,
        justifyContent: 'center',
      }}>
        <Text style={{
          textAlign: 'center',
          fontFamily:'MetroBold',
          letterSpacing:1,
          fontSize:15,
          color:'white',
        }}> {text}

        </Text>
        </View>
    );
  
  const SignUpPage = ({navigation}) => (
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
        fontFamily:'MetroBold',
      }}>
        Sign Up</Text>
    </View>

    <View style={{
      flex:1,
      width:'100%',
      alignSelf:'center',
      alignItems:'center',
      justifyContent:'center',
      minHeight:250,
      }}>
        <TextInputCustom name='Name' color='#666666' />
        <TextInputCustom name='Email' color='#666666' />
        <TextInputCustom name='Password' color='#666666' secureTextEntry={true}/>
    </View>
    
    <TouchableOpacity 
    style={{  
      flex:1,
      alignSelf:'flex-end',
      right:18,
      bottom:10
    }}
    onPress={() => navigation.navigate('Login')}> 
    <Text style={{
      color:'#222222',
      fontSize:15,
      fontFamily:'MetroMedium',
    }}>
      Already have an account?
    </Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => alert('Akun Anda Berhasil Dibuat')}>
    <View style={{
      flex:1,
      justifyContent:'flex-end',
      alignItems:'center',
      bottom:90,
      width:'100%',
    }}>
      <ButtonCustom color='red' text='SIGN UP' />
    </View>
      </TouchableOpacity>

    <View style={{
      alignSelf:'center',
    }}>
      <Text style={{
        color:'#222222',
        fontSize:15,
        bottom:30,
        fontFamily:'MetroMedium',
      }}>
        Or sign up with social account</Text>
    </View>

    <View style={{
      flexDirection:'row',
      columnGap:20,
      alignSelf:'center',
      bottom:15
    }}>
      <View style={{
        backgroundColor:'white',
        borderRadius:10,
        padding:10
      }}>
        <Image source={require('../img/google.png')} style={{
          width: 50,
          height: 30,
          resizeMode: 'contain'
        }}/>
      </View>
      <View style={{
        backgroundColor:'white',
        borderRadius:10,
        padding:10
      }}>
        <Image source={require('../img/facebook.png')} style={{
          width: 50,
          height: 30,
          resizeMode: 'contain'
        }}/>
      </View>
    </View>
    </View>
  )
  
  export default SignUpPage;