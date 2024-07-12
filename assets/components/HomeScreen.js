import React from "react";
import { Text, View, Image, TouchableOpacity} from "react-native";
import useCustomFonts from "../fonts/Fonts";

const HomeScreen = () => {
    const [loaded] = useCustomFonts();
    if (!loaded) {
        return (
            <Text>Loading...</Text>
        )
}

return (
    <View style={{
        flex:1,
    }}>
        <Image source={require('../img/heroHome.png')} style={{
            width:'100%',
            height:'100%',
            resizeMode:'cover',
            alignItems:'center',
            justifyContent:'center',
            alignSelf:'center',
        }}/>

        <Text style={{
            fontFamily:'MetroBold',
            fontSize:30,
            color: 'white',
            position:'absolute',
            alignItems:'flex-start',
            top: 400,
            left: 20,
            width:'30%',
            textShadowColor: 'black',
            textShadowOffset: {width: 1, height: 1},
            textShadowRadius: 1,
        }}>Fashion Sale</Text>

        <TouchableOpacity style={{
            backgroundColor:'#DB3022',
            width:'30%',
            height:30,
            borderRadius:20,
            alignItems:'center',
            justifyContent:'center',
            position:'absolute',
            top:470,
            left:20,
        }}>
            <Text style={{
                color:'white',
                fontFamily:'MetroBold',
                fontSize:16,
            }}>Check</Text>
        </TouchableOpacity>
    </View>
);
}

export default HomeScreen;