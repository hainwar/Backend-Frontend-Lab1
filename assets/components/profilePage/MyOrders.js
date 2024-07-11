import React, {useState} from "react";
import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import useCustomFonts from "../../fonts/Fonts";

const MyOrders = () => {
    const [loaded] = useCustomFonts();
    const [selectedCategory, setSelectedCategory] = useState('delivered');
    if (!loaded) {
        return (
            <Text>Loading...</Text>
        )
}

const orders = {
    delivered: [
        { id: 1, name: 'Order 1', date: '12/12/2021', price: 100 },
        { id: 2, name: 'Order 2', date: '12/12/2021', price: 200 },
    ],
    processing: [
        { id: 4, name: 'Order 4', date: '12/12/2021', price: 400 },
    ],
    cancelled: [
        { id: 7, name: 'Order 7', date: '12/12/2021', price: 700 },
    ]
}

const displayOrders = orders[selectedCategory];

return (
    <ScrollView style={{
        flex:1,
        padding:15,
        backgroundColor:'F5F5F5',
    }}>
        <Text style={{
            fontSize:26,
            padding:15,
            fontFamily:'MetroBold',
        }}>My Orders</Text>

        <View style={{
            flexDirection:'row',
            marginBottom:15,
            justifyContent:'space-between',
        }}>
            <TouchableOpacity style={{
                padding:10,
                backgroundColor:selectedCategory === 'delivered' ? 'blue' : 'white',
                borderRadius:5,
            }}
            onPress={() => setSelectedCategory('delivered')}>
                <Text style={{
                    fontSize:16,
                    fontFamily:'MetroBold',
                }}>Deliverd</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{
                padding:10,
                backgroundColor:selectedCategory === 'processing' ? 'blue' : 'white',
                borderRadius:5,
            }}
            onPress={() => setSelectedCategory('processing')}>
                <Text style={{
                    fontSize:16,
                    fontFamily:'MetroBold',
                }}>Processing</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{
                padding:10,
                backgroundColor:selectedCategory === 'cancelled' ? 'blue' : 'white',
                borderRadius:5,
            }}
            onPress={() => setSelectedCategory('cancelled')}>
                <Text style={{
                    fontSize:16,
                    fontFamily:'MetroBold',
                }}>Cancelled</Text>
            </TouchableOpacity>
        </View>
        
        {displayOrders.length > 0 ? (
            displayOrders.map((order) => (
                <View key={order.id} style={{
                    padding: 15,
                    backgroundColor: 'white',
                    borderRadius: 5,
                    marginVertical: 5,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}>
                    <Text style={{
                        fontSize: 16,
                        fontFamily: 'MetroBold',
                    }}>
                        {order.name}
                    </Text>
                    <Text style={{
                        fontSize: 16,
                        fontFamily: 'MetroBold',
                    }}>
                        {order.date}
                    </Text>
                </View>
        ))
    ) : (

        <Text style={{
            fontSize: 16,
            fontFamily: 'MetroBold',
            textAlign: 'center',
            marginTop: 10,
        }}>
            No Orders {selectedCategory}
        </Text>
    )}
        </ScrollView>
);
}

export default MyOrders;