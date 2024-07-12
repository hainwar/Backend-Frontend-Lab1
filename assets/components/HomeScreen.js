import React from "react";
import { Text, View, Image, TouchableOpacity} from "react-native";
import useCustomFonts from "../fonts/Fonts";

const HomeScreen = ({navigation}) => {
    const [loaded] = useCustomFonts();
    if (!loaded) {
        return (
            <Text>Loading...</Text>
        )
}

return (
    <View style={{
        flex:1,
        backgroundColor:'#D2B48C'
    }}>
        <Image source={require('../img/hero-home.png')} style={{
            width:'55%',
            height:550,
            top:50,
            resizeMode:'cover',
            alignItems:'center',
            justifyContent:'center',
            alignSelf:'center',
            left: 50,
        }}/>

        <View style={{
            flex:1,
            justifyContent:'flex-end',
            alignItems:'flex-start',
            position:'absolute',
            width:'30%',
            top:60
        }}>

        <Text style={{
            fontFamily:'MetroBold',
            fontSize:30,
            color: 'white',
            left: 20,
            textShadowColor: 'rgba(0, 0, 0, 0.75)',
            textShadowOffset: {width: -1, height: 1},
            textShadowRadius: 10,
        }}>Fashion Sale</Text>

        <TouchableOpacity style={{
            backgroundColor:'#DB3022',
            width:'100%',
            height:25,
            borderRadius:20,
            alignItems:'center',
            position:'absolute',
            left:20,
            top:70,
        }} onPress={() => navigation.navigate('SignUpPage')} >
            <Text style={{
                color:'white',
                fontFamily:'MetroLight',
                fontSize:14,
                textAlign:'center',
                top:5,
            }}>Check</Text>
        </TouchableOpacity>
        </View>
    </View>
);
}

export default HomeScreen;