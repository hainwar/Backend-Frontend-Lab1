import React from "react";
import { Text, View } from "react-native";

const HomeScreen = () => (
    <View style={{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    }}>
        <Text style={{
            fontSize:16,
            padding:15,
            fontFamily:'Metro-Black',
        }}>Home Screen</Text>
    </View>
);

export default HomeScreen;