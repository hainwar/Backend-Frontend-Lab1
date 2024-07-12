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
        { 
            id: 1, 
            name: 'Order No.41109121', 
            date: '12/12/2021', 
            price: 100,
            tracNum : '41109121',
            quantity : 5,
            status : 'Delivered',
        },
        { 
            id: 2, 
            name: 'Order No.45643445', 
            date: '12/12/2021', 
            price: 500,
            noOrder : '5841096861',
            quantity : 6,
            status : 'Delivered',
        },
        { 
            id: 3,
            name: 'Order No.546447345', 
            date: '12/12/2021', 
            price: 80,
            noOrder : '5841109791',
            quantity : 9,
            status : 'Delivered',
        },
        { 
            id: 4, 
            name: 'Order No.58589121', 
            date: '12/12/2021', 
            price: 100,
            noOrder : '58110621',
            quantity : 7,
            status : 'Delivered',
        },

    ],
    processing: [
        { id: 4, name: 'Order No.5841109221', date: '12/12/2021', price: 400 },
    ],
    cancelled: [
        { id: 7, name: 'Order No.5841109123', date: '12/12/2021', price: 700 },
    ]
}

const displayOrders = orders[selectedCategory];

return (
    <ScrollView style={{
        flex:1,
        padding:20,
        backgroundColor:'F5F5F5',
    }}>
        <Text style={{
            fontSize:28,
            padding:5,
            fontFamily:'MetroBold',
            marginBottom:20,
        }}>My Orders</Text>

        <View style={{
            flexDirection:'row',
            marginBottom:20,
            justifyContent:'space-between',

        }}>
            <TouchableOpacity style={{
                padding:10,
                backgroundColor:selectedCategory === 'delivered' ? '#222222' : '#F8F8FF',
                borderRadius:20,
                width:'30%',
            }}
            onPress={() => setSelectedCategory('delivered')}>
                <Text style={{
                    fontSize:16,
                    fontFamily:'MetroLight',
                    textAlign:'center',
                    color:selectedCategory === 'delivered' ? 'white' : 'black',
                }}>Delivered</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{
                padding:10,
                backgroundColor:selectedCategory === 'processing' ? '#222222' : '#F8F8FF',
                borderRadius:20,
                width:'30%',
            }}
            onPress={() => setSelectedCategory('processing')}>
                <Text style={{
                    fontSize:16,
                    textAlign:'center',
                    fontFamily:'MetroLight',
                    color:selectedCategory === 'processing' ? 'white' : 'black',
                }}>Processing</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{
                padding:10,
                backgroundColor:selectedCategory === 'cancelled' ? '#222222' : '#F8F8FF',
                borderRadius:20,
                width:'30%',
            }}
            onPress={() => setSelectedCategory('cancelled')}>
                <Text style={{
                    fontSize:16,
                    textAlign:'center',
                    fontFamily:'MetroLight',
                    color:selectedCategory === 'cancelled' ? 'white' : 'black',
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
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                }}>
                    <Text style={{
                        fontSize: 15,
                        fontFamily: 'MetroMedium',
                    }}>
                        {order.name}
                    </Text>
                    <Text style={{
                        fontSize: 14,
                        fontFamily: 'MetroLight',
                        alignSelf:'flex-end',
                    }}>
                        {order.date}
                    </Text>
                    <Text style={{
                        fontSize: 14,
                        fontFamily: 'MetroLight',
                        alignSelf:'flex-end',
                        top: 40,
                    }}>
                        Total Amount:  <Text style={{fontFamily:'MetroBold'}}>{order.price}$</Text>
                    </Text>
                    <Text style={{
                        fontSize: 14,
                        fontFamily: 'MetroLight',
                    }}>
                       Tracking Number {order.tracNum}
                    </Text>
                    <Text style={{
                        fontSize: 14,
                        fontFamily: 'MetroLight',
                        marginTop: 10,
                    }}>
                        Quantity: {order.quantity}
                    </Text>
                    <Text style={{
                        fontSize: 14,
                        alignSelf: 'flex-end',
                        top:35,
                        fontFamily: 'MetroLight',
                        color: order.status === 'Delivered' ? 'green' : 'red',
                    }}>
                        {order.status}
                    </Text>

                    <TouchableOpacity style={{
                        padding: 10,
                        borderWidth: 1,
                        color: 'gray',
                        borderRadius: 20,
                        marginTop: 10,
                        width: '30%',
                    }}>
                        <Text style={{
                            fontSize: 14,
                            fontFamily: 'MetroMedium',
                            color: 'gray',
                            textAlign: 'center',
                        }}>
                            Details
                        </Text>
                    </TouchableOpacity>
                </View>
        ))
    ) : (

        <Text style={{
            fontSize: 16,
            fontFamily: 'MetroMedium',
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