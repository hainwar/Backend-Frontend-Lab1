import React from "react";
import { TextInput } from "react-native";

const TextInputCustom =({ name, color }) => {
    return (
        <TextInput
        placeholder={`Masukkan ${name}`}
        style={{
          height:40,
          width: '80%',
          borderColor: 'gray',
          borderWidth: 1,
          borderRadius: 10,
          padding:10, 
          marginBottom: 10,
          paddingLeft: 10,
          color: color,
        }}
        />
    )
  }

  export default TextInputCustom