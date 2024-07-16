import React from "react";
import { Text, View } from "react-native";
import useCustomFonts from "../../styles/Fonts";

const ShippingAddress = () => {
    const [loaded] = useCustomFonts();
    if (!loaded) {
        return (
            <Text>Loading...</Text>
        )
}

return (
    <View style={{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    }}>
        <Text style={{
            fontSize:26,
            padding:15,
            fontFamily:'MetroBold',
        }}>My Orders</Text>
        <Text style={{
            fontSize:16,
            padding:15,
            fontFamily:'MetroLight'
        }}>My orders</Text>
    </View>
);
}

export default ShippingAddress;