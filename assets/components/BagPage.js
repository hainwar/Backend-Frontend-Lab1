import React, {useState} from 'react'
import { View, Text, ScrollView, TouchableOpacity, Image, Button, TextInput } from 'react-native'
import useCustomFonts from '../fonts/Fonts';

const BagPage = () => {
  const [fontsLoaded] = useCustomFonts();
  const [carItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Shirt Blue',
      price: 50,
      quantity: 10,
      image: require('../img/product/shirt.png')
    },
    {
      id: 2,
      name: 'Shirt Black',
      price: 50,
      quantity: 10,
      image: require('../img/product/shirt2.png')
    },
    {
      id: 3,
      name: 'Dress',
      price: 50,
      quantity: 10,
      image: require('../img/product/dress.png')
    },
    {
      id: 4,
      name: 'Dress Yellow',
      price: 50,
      quantity: 10,
      image: require('../img/product/dress2.png')
    },
    {
      id: 5,
      name: 'Shirt Kids',
      price: 50,
      quantity: 10,
      image: require('../img/product/kids.png')
    },
  ])

  const [promoCode, setPromoCode] = useState('')

  if (!fontsLoaded) {
    return (
    <Text>Loading...</Text>
    )
  }

  const removeItem = (id) => {
    setCartItems(carItems.filter(item => item.id !== id))
  }

  const incrementQuantity = (id) => {
    setCartItems(carItems.map(item => 
      item.id === id ? {...item, quantity: item.quantity + 1} : item
    ))
  }

  const decrementQuantity = (id) => {
    setCartItems(carItems.map(item =>
      item.id === id && item.quantity > 1 ? {...item, quantity: item.quantity - 1} : item
    ))
  }

  const getTotalPrice = () => {
    return carItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  return (
    <ScrollView style={{
      flex: 1,
      backgroundColor: '#F5F5F5',
      padding: 20
    }}>

      <Text style={{
        fontSize: 34,
        color: '#222222',
        fontFamily: 'MetroBold',
        marginBottom: 20
      }}>My Bag
      </Text>

      {carItems.length > 0 ? (
        carItems.map((item) => (
          <View key={item.id} style={{
            padding: 20,
            backgroundColor: '#fff',
            borderRadius: 5,
            marginVertical: 5,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>

            <Image source={item.image} style={{
              width: 100,
              height: 100,
              borderRadius: 5,
              marginBottom: 10
            }} />

            <View style={{
              flex: 1,
              marginLeft: 10
            }}>
              <Text style={{
                fontSize: 18,
                color: '#222222',
                fontFamily: 'MetroBold',
              }}>{item.name}
              </Text>

              <Text style={{
                fontSize: 16,
                color: '#222222',
                fontFamily: 'MetroLight',
              }}>${item.price} x {item.quantity}
              </Text>

              <View style={{
                flexDirection:'row',
                alignItems: 'center',
              }}>
                <TouchableOpacity onPress={() => decrementQuantity(item.id)} style={{
                  backgroundColor: '#DB3022',
                  borderRadius: 5,
                  padding: 5,
                  marginRight: 10
                }} >
                  <Text style={{
                    color: '#fff'
                  }}>
                    -
                  </Text>
                </TouchableOpacity>

                <Text style={{
                  fontSize: 16,
                  color: '#222222',
                  fontFamily: 'MetroLight',
                }}>
                  {item.quantity}
                </Text>
                <TouchableOpacity onPress={() => incrementQuantity(item.id)} style={{
                  backgroundColor: '#DB3022',
                  borderRadius: 5,
                  padding: 5,
                  marginLeft: 10
                }} >
                  <Text style={{
                    color: '#fff'
                  }}>
                    +
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

              <TouchableOpacity onPress={() => removeItem(item.id)}>
                <Text style={{
                  color: '#DB3022',
                  fontFamily: 'MetroBold',
                }}>
                  Remove
                  </Text>
              </TouchableOpacity>
            </View>
        ))
      ) : (

        <Text style={{
          fontSize: 18,
          color: '#222222',
          fontFamily: 'MetroBold',
          textAlign: 'center',
          marginTop: 20
        }}>
          Your bag is empty
        </Text>
      )}

      <View style={{
        padding: 10,
        marginTop: 20,
        backgroundColor: '#fff',
        borderRadius: 5
      }}>
        <TextInput
        placeholder='Enter promo code'
        value={promoCode}
        onChangeText={setPromoCode}
        style={{
          height: 40,
          borderColor: '#DB3022',
          borderWidth: 1,
          borderRadius: 5,
          paddingLeft: 10,
          marginVertical: 10
        }} />
          <Button title='Apply Promo Code' color='#DB3022' onPress={() => alert('Promo code ${promocode} applied')} />
        </View>

        <View style={{
          padding: 10,
          marginTop: 20,
          backgroundColor: '#fff',
          borderRadius: 5
        }}>
          <Text style={{
            fontSize: 18,
            color: '#222222',
            fontFamily: 'MetroBold',
          }}>
            Total: ${getTotalPrice()}
          </Text>
          
          <Button title='Checkout' color='#DB3022' onPress={() => alert('Checkout')} 
            style={{marginTop: 10}} />
          </View>
    </ScrollView>
  )
}

export default BagPage