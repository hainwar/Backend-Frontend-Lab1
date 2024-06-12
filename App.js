import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';``

const App = () => {
  const ButtonCostom = ({ color, text}) => {
    return (
      <View style={{
        backgroundColor: color,
        width: 90,
        height: 50,
        borderRadius: 20,
        justifyContent: 'center'
      }}>
        <Text style={{
          textAlign: 'center',
          color: 'white',
          fontSize:20
        }}> {text}

        </Text>
        </View>
    )
  }

  return (
    <View style={{
      flex:1,
      backgroundColor: 'black'
    }}>
      <View>
        <Text style={{
          fontSize:30,
          textAlign:'center',
          top:20,
          bottom:0,
          justifyContent:'center',
          color:'red'
        }}>
          Selamat Datang di Welcome
        </Text>
        </View>

        <View style={{
          flex:1,
          alignItems:'center',
          justifyContent:'center',
          top:200
        }}>
          <Image source={require('./assets/bg.jpg')} style={{
            width:300,
            height:300,
            resizeMode:'contain'
          }} />
        </View>

        <View style={{
          flex:1,
          alignItems:'flex-end',
          justifyContent:'center',
          flexDirection: 'row',
          justifyContent: 'spacy-evenly',
          marginBottom:100
        }}>
          <View style={{
            flex:1,
            width: 80,
            height:40,
            justifyContent:'center',
            borderRadius:25,
            flexDirection:'row',
            columnGap:20
            }}>
              <ButtonCostom color='red' text='Login'/>
              <ButtonCostom color='red' text='Sign Up'/>
          </View>

        </View>

    </View>
  )
  
}

export default App;