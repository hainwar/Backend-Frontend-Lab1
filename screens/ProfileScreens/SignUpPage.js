import React from "react";
import { Text, View, ScrollView, TextInput, Image, TouchableOpacity } from "react-native";

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
    <ScrollView style={{
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
      top:80
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
      top:70
    }}
    onPress={() => navigation.navigate('LoginPage')}> 
    <Text style={{
      flex:1,
      color:'#222222',
      fontSize:15,
      fontFamily:'MetroMedium',
    }}>
      Already have an account?
    </Text>
    </TouchableOpacity>

      <View style={{
    justifyContent:'flex-end',
    top:95,
  }}>
    <TouchableOpacity onPress={() => alert('Sign up')} style={{
      width:'100%',
      alignItems:'center',
    }}>
    <ButtonCustom color='red' text='SIGN UP' />
    </TouchableOpacity>
  </View>

    <View style={{
      alignSelf:'center',
    }}>
      <Text style={{
        color:'#222222',
        fontSize:15,
        top:160,
        fontFamily:'MetroMedium',
      }}>
        Or sign up with social account.</Text>
    </View>

    <View style={{
      alignSelf:'center',
      top:110,
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
    </ScrollView>
  )
  
  export default SignUpPage;