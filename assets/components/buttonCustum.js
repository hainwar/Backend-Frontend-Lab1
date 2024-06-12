import React from "react";
import { View, Text } from 'react-native';

const ButtonCustom = ({ color, text}) => {
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
    );
  }

  export default ButtonCustom;