import React from "react";
import { Text, View, ScrollView, Image, TouchableOpacity} from "react-native";
import useCustomFonts from "../styles/Fonts";

const HomeScreen = ({navigation}) => {
    const [loaded] = useCustomFonts();
    if (!loaded) {
        return (
            <Text>Loading...</Text>
        )
}

return (
    <ScrollView style={{
        flex:1,
        backgroundColor:'#F5F5F5',
    }}>

        <View style={{
            backgroundColor:'#696969',
        }}>
        <Image source={require('../assets/img/hero-home.png')} style={{
            width:'55%',
            height:500,
            top:30,
            resizeMode:'cover',
            alignItems:'center',
            justifyContent:'center',
            alignSelf:'center',
            left: 50,
        }}/>
        </View>

        <View style={{
            flex:1,
            justifyContent:'flex-end',
            alignItems:'flex-start',
            position:'absolute',
            width:'30%',
            top:30
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
        }} onPress={() => navigation.navigate('Shop')} >
            <Text style={{
                color:'white',
                fontFamily:'MetroLight',
                fontSize:14,
                textAlign:'center',
                top:5,
            }}>Check</Text>
        </TouchableOpacity>
        </View>

        <View style={{
            flex:1,
        }}>
            <Text style={{
                fontFamily:'MetroBold',
                fontSize:34,
                color:'#222222',
                left:20,
                top:30,
            }}>
                New
            </Text>

            <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
                flexDirection:'row',
                paddingHorizontal:20,
                paddingTop:50,
                columnGap:20,
            }}>
                <View style={{
                    backgroundColor:'#C4C4C4',
                    width:150,
                    height:150,
                    borderRadius:20,
                    shadowColor:'black',
                    shadowRadius: 1,
                    shadowOpacity:0.2,
                }}>
                    <Text style={{
                        left:10,
                        top:10,
                        borderRadius:20,
                        borderWidth:1,
                        backgroundColor:'black',
                        width:50,
                        textAlign:'center',
                        color:'white',
                        fontFamily:'MetroMedium',
                        fontSize:12,
                    }}>NEW</Text>
                <Image source={require('../assets/img/product/shirt.png')} style={{
                    width:130,
                    height:130,
                    resizeMode:'contain',
                    alignSelf:'center',
                }}/>
                </View>

                <View style={{
                    backgroundColor:'#C4C4C4',
                    width:150,
                    height:150,
                    borderRadius:20,
                    shadowColor:'black',
                    shadowRadius: 1,
                    shadowOpacity:0.2,
                }}>
                    <Text style={{
                        left:10,
                        top:10,
                        borderRadius:20,
                        borderWidth:1,
                        backgroundColor:'black',
                        width:50,
                        textAlign:'center',
                        color:'white',
                        fontFamily:'MetroMedium',
                        fontSize:12,
                    }}>NEW</Text>
                <Image source={require('../assets/img/product/shirt2.png')} style={{
                    width:130,
                    height:130,
                    resizeMode:'contain',
                    alignSelf:'center',
                }}/>
                </View>

                <View style={{
                    backgroundColor:'#C4C4C4',
                    width:150,
                    height:150,
                    borderRadius:20,
                    shadowColor:'black',
                    shadowRadius: 1,
                    shadowOpacity:0.2,
                }}>
                    <Text style={{
                        left:10,
                        top:10,
                        borderRadius:20,
                        borderWidth:1,
                        backgroundColor:'black',
                        width:50,
                        textAlign:'center',
                        color:'white',
                        fontFamily:'MetroMedium',
                        fontSize:12,
                    }}>NEW</Text>
                <Image source={require('../assets/img/product/kids.png')} style={{
                    width:130,
                    height:130,
                    resizeMode:'contain',
                    alignSelf:'center',
                }}/>
                </View>

                

               

            </ScrollView>


        </View>
    </ScrollView>
);
}

export default HomeScreen;