import React from 'react';
import { StyleSheet, Text, View } from 'react-native';``

const App = () => {
  return (
    <View style={{flex: 1}}>
      <View style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems : 'flex-end',
      }}>
        <View style={{
          backgroundColor: 'red',
          height: 100,
          width: 150,
          justifyContent: 'center',
          borderRadius: 10,
          marginBottom: 40,
        }}>
          <Text style={{
            fontSize: 30,
            color: 'white',
            textAlign: 'center',
          }}>
            Login
          </Text>
          
        </View>
        <View style={{
          backgroundColor: 'blue',
          height: 100,
          width: 150,
          justifyContent: 'center',
          borderRadius: 10,
          marginLeft: 10,
          marginBottom: 40,
          
        }}>
          <Text style={{
            fontSize: 30,
            color: 'white',
            textAlign: 'center',
          }}>
            Register
          </Text>
          </View>
      </View>
    </View>
  );
}

export default App;