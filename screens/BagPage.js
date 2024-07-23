import React, {useEffect, useState} from "react";
import { View, Text, ScrollView, TouchableOpacity, Image, TextInput } from "react-native";
import useCustomFonts from "../styles/Fonts";

const BagPage = ({route}) => {
  const [fontLoaded] = useCustomFonts();
  const {bagItems} = route.params;

  const [promoCode, setPromoCode] = useState('');
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(bagItems);
  }, [bagItems]);

if (!fontLoaded) {
  return (
    <Text>Loading...</Text>
  )
}

const removeItem = (id) => {
  const updateItems = items.filter((item) => item.id !== id);
  setItems(updateItems);
}

const incrementQuantity = (id) => {
  const updateItems = items.map((item) => 
    item.id === id ? {...item, quantity: item.quantity + 1} : item
  );
  setItems(updateItems);
}

const decrementQuantity = (id) => {
  const updateItems = items.map((item) =>
    item.id === id && item.quantity > 1 ? {...item, quantity: item.quantity - 1} : item
  )
  setItems(updateItems);
}

const getTotalPrice = () => {
  return items.reduce((total, item) => total + item.price * item.quantity, 0);
}

return (
  <ScrollView style={{
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 20
  }}>

    <Text style={{
      fontSize:34,
      fontFamily:'MetroBold',
      color:'#222222',
      marginBottom:20
    }}>
      My Bag
    </Text>
    {items.length > 0 ? (
      items.map((item) => (
        <View key={item.id} style={{
          padding:20,
          backgroundColor:'white',
          borderRadius:5,
          marginVertical:5,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems:'center'
        }}>

          <Image source={item.image} style={{
            width:80,
            height:90,
            borderRadius:5,
            resizeMode:'contain',
            marginBottom:10
          }} />

          <View style={{
            flex:1,
            marginLeft:10
          }}>
            <Text style={{
              fontSize:18,
              fontFamily:'MetroBold',
              color:'#222222'
            }}>
              {item.name}
            </Text>

            <Text style={{
              fontSize:16,
              fontFamily:'MetroLight',
              color:'#222222'
            }}>
              ${item.price} x {item.quantity}
            </Text>

            <View style={{
              flexDirection:'row',
              alignItems:'center'
            }}>
              <TouchableOpacity onPress={() => decrementQuantity(item.id)} style={{
                padding:5,
                backgroundColor:'#DB3022',
                borderRadius:5,
                marginRight:10
              }}>
                <Text style={{color:'white'}}>
                  -
                </Text>
              </TouchableOpacity>

              <Text style={{
                fontSize:16,
                fontFamily:'MetroLight',
                color:'#222222'
              }}>
                {item.quantity}
              </Text>
              <TouchableOpacity onPress={() => incrementQuantity(item.id)} style={{
                padding:5,
                backgroundColor:'#DB3022',
                borderRadius:5,
                marginLeft:10
              }}>
                <Text style={{color:'white'}}>
                  +
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity onPress={() => removeItem(item.id)}>
            <Text style={{
              color:'#DB3022',
              fontFamily:'MetroBold',
            }}>
              Remove
              </Text>
            </TouchableOpacity>
        </View>
      ))
    ) : (

      <Text style={{
        fontSize:18,
        fontFamily:'MetroBold',
        color:'#222222',
        textAlign:'center',
        marginTop:20
      }}>
        Your bag is empty
      </Text>
    )}

    <View style={{
      padding:10,
      backgroundColor:'white',
      borderRadius:5,
      marginTop:20
    }}>
      <TextInput
      placeholder="Enter promo code" 
      value={promoCode}
      onChangeText={(text) => setPromoCode(text)}
      style={{
        height:40,
        borderColor:'gray',
        borderWidth:1,
        borderRadius:5,
        paddingLeft:10,
        marginVertical:10
      }} />

      <TouchableOpacity style={{
        backgroundColor: 'gray',
        padding:10,
        borderRadius:5,
        alignItems:'center'
      }} onPress={() => alert(`Promo code ${promoCode}`)} >
        <Text style={{
          color:'white',
          fontFamily:'MetroMedium'
        }}>
          Apply Promo Code
        </Text>
      </TouchableOpacity>
    </View>

    <View style={{
      padding: 10,
      marginTop: 20,
      backgroundColor: 'white',
      borderRadius: 5
    }}>
      <Text style={{
        fontSize: 18,
        fontFamily: 'MetroBold',
        color: '#222222',
        marginBottom: 10
      }}>
        Total Price: ${getTotalPrice()}
      </Text>

      <TouchableOpacity style={{
        backgroundColor: '#DB3022',
        padding: 15,
        borderRadius: 20,
        alignItems: 'center'
      }} onPress={() => alert('Checkout pressed')} >
        <Text style={{
          fontSize: 16,
          fontFamily: 'MetroBold',
          color: 'white'
        }}>
          CHECK OUT
        </Text>
      </TouchableOpacity>
    </View>
  </ScrollView>
)
}


export default BagPage;