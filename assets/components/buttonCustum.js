import React from "react";
import { View, Text } from 'react-native';

const ButtonCustom = ({ color, text}) => {
    return (
      <View style={{
        backgroundColor: color,
        width: '80%',
        height: 50,
        borderRadius: 10,
        justifyContent: 'center'
      }}>
        <Text style={{
          textAlign: 'center',
          fontSize:15
        }}> {text}

        </Text>
        </View>
    );
  }

  export default ButtonCustom;