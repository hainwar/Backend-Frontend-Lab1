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
      }}>Login</Text>
    </View>

  <View style={{
    flex:1,
    width:'343px',
    height:'64px',
    bottom:'100px',
    alignSelf:'center',
    alignItems:'center',
  }}>
    <TextInputCustom name='Email' color='666666' />
    <TextInputCustom name='Password' color='666666' />
  </View>

  <View style={{
    bottom:232,
    left:263,
  }}>
    <Text style={{
      color:'#222222',
    }}>Forgot your password?</Text>
  </View>

  <View style={{
    flex:1,
    justifyContent:'flex-end',
    alignItems:'center',
    bottom:432,
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
      bottom:270
    }}>Or sign up with social account</Text>
  </View>

  <View style={{
    flexDirection:'row',
    columnGap:20,
    alignSelf:'center',
    bottom:250
  }}>
    <View style={{
      backgroundColor:'white',
      borderRadius:10,
      padding:10
    }}>
    <Image source={require('./assets/img/google.png')} style={{
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
    <Image source={require('./assets/img/facebook.png')} style={{
      height:30,
      width:50,
      resizeMode:'contain',
    }}/>
  </View>
  </View>
  </View>
)
}

export default App;
