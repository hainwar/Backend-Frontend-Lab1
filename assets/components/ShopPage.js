import React, { useState } from 'react'
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import useCustomFonts from '../fonts/Fonts'

const ShopPage = () => {
  const [fontLoaded] = useCustomFonts();
  const [selectedCategory, setSelectedCategory] = useState('man');

  if (!fontLoaded) {
    return (
      <Text>Loading...</Text>
    )
  }
  
  const items = {
    man: [
      {
        id: 1,
        name:'Man Shirt Blue',
        price: 50,
        image: require('../img/product/shirt.png')
      },

      {
        id: 2,
        name: 'Man Shirt Black',
        price: 60,
        image: require('../img/product/shirt2.png')
      },
    ],

    woman: [
      {
        id: 3,
        name: 'Woman Dress Nikon',
        price: 70,
        image: require('../img/product/dress.png')
      },
        
        {
          id: 4,
          name: 'Woman Dress Canon',
          price: 80,
          image: require('../img/product/dress2.png')
        },
      ],

    kids: [
        {
          id: 5,
          name: 'Kids Shirt Kodak',
          price: 30,
          image: require('../img/product/kids.png')
        },

        {
          id: 6,
          name: 'Kids Shirt Sony',
          price: 40,
          image: require('../img/product/kids2.png')
        },
      ],
  }

  const displayItems = items[selectedCategory];

  return (
    <ScrollView style={{
      flex:1,
      backgroundColor:'#F5F5F5',
      padding:20
    }}>

      <Text style={{
        fontSize:34,
        color:'#222222',
        fontFamily:'MetroBold',
        marginBottom:20
      }}>Categories</Text>

      <View style={{
        justifyContent:'space-between',
        marginBottom:20,
        flexDirection:'row'
      }}>

        <TouchableOpacity style={{
          padding:10,
          backgroundColor:selectedCategory === 'man' ? '#DB3022' : 'white',
          borderRadius:20,
          width:'30%',
        }}
        onPress={() => setSelectedCategory('man')}>
        
        <Text style={{
          fontSize:15,
          fontFamily: 'MetroLight',
          textAlign:'center',
          color: selectedCategory === 'man' ? 'white' : '#222222'
        }}>
          Man
        </Text>
        </TouchableOpacity>

        <TouchableOpacity style={{
          padding:10,
          backgroundColor:selectedCategory === 'woman' ? '#DB3022' : 'white',
          borderRadius:20,
          width:'30%',
        }}
        onPress={() => setSelectedCategory('woman')}>
        
        <Text style={{
          fontSize:15,
          fontFamily: 'MetroLight',
          textAlign:'center',
          color: selectedCategory === 'woman' ? 'white' : '#222222'
        }}>
          Woman
        </Text>
        </TouchableOpacity>

        <TouchableOpacity style={{
          padding:10,
          backgroundColor:selectedCategory === 'kids' ? '#DB3022' : 'white',
          borderRadius:20,
          width:'30%',
        }}
        onPress={() => setSelectedCategory('kids')}>
        
        <Text style={{
          fontSize:15,
          fontFamily: 'MetroLight',
          textAlign:'center',
          color: selectedCategory === 'kids' ? 'white' : '#222222'
        }}>
          Kids
        </Text>
        </TouchableOpacity>
      </View>

{displayItems.length > 0 ? (
  displayItems.map((item) => (
    <View key={item.id} style={{
      padding:10,
      backgroundColor:'white',
      borderRadius:5,
      marginVertical:5,
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems:'flex-start'
    }}>

      <Image
        source={item.image}
        style={{
          width: '50%',
          height: 200,
          borderRadius: 5,
          marginBottom: 10,
          alignSelf: 'center',
        }} />

        <Text style={{
          fontSize: 18,
          fontFamily: 'MetroBold',
          color: '#222222'
        }}>
          {item.name} 
        </Text>

        <Text style={{
          fontSize: 18,
          fontFamily: 'MetroBold',
          color: '#222222'
        }}>
           ${item.price} 
        </Text>
    </View>
  ))
) : (
  <Text style={{
    fontSize: 18,
    fontFamily: 'MetroBold',
    color: '#222222',
    textAlign: 'center',
    marginTop: 20
  }}>
    No items in this category
  </Text>
)}
</ScrollView>
  )
}

export default ShopPage