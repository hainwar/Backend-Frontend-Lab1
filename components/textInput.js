import React from "react";
import { TextInput } from "react-native";

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

  export default TextInputCustom