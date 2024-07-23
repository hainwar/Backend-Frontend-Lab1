import React, { useState } from 'react'
import { View, Text, ScrollView, TouchableOpacity, Image, Button } from 'react-native'
import useCustomFonts from '../styles/Fonts'

const ShopPage = ({navigation}) => {
  const [fontLoaded] = useCustomFonts();
  const [selectedCategory, setSelectedCategory] = useState('man');
  const [bagItems, setBagItems] = useState([]);

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
        image: require('../assets/img/product/shirt.png')
      },

      {
        id: 2,
        name: 'Man Shirt Black',
        price: 60,
        image: require('../assets/img/product/shirt2.png')
      },
    ],

    woman: [
      {
        id: 3,
        name: 'Woman Dress Nikon',
        price: 70,
        image: require('../assets/img/product/dress.png')
      },
        
        {
          id: 4,
          name: 'Woman Dress Canon',
          price: 80,
          image: require('../assets/img/product/dress2.png')
        },
      ],

    kids: [
        {
          id: 5,
          name: 'Kids Shirt Kodak',
          price: 30,
          image: require('../assets/img/product/kids.png')
        },

        {
          id: 6,
          name: 'Kids Shirt Sony',
          price: 40,
          image: require('../assets/img/product/kids2.png')
        },
      ],
  }

  const displayItems = items[selectedCategory];

  const addToBag = (item) => {
    const itemIndex = bagItems.findIndex((bagItem) => bagItem.id === item.id);

    if (itemIndex !== -1) {
      const updateBagItems = [...bagItems];
      updateBagItems[itemIndex] = { ...updateBagItems[itemIndex], quantity: updateBagItems[itemIndex].quantity + 1 };
      setBagItems(updateBagItems);
  } else {
    setBagItems([...bagItems, { ...item, quantity: 1 }]);
  }
  alert(`${item.name} added to bag`);
}

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

        <TouchableOpacity style={{
          backgroundColor: '#32CD32',
          padding: 10,
          borderRadius: 20,
          marginTop: 10,
          alignItems: 'center'
        }} onPress={() => addToBag(item)}>
          <Text style={{
            fontSize: 12,
            fontFamily: 'MetroMedium',
            color: 'white'
          }}>BUY/ADD</Text>
        </TouchableOpacity>
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

<TouchableOpacity style={{
  backgroundColor: '#DB3022',
  padding: 15,
  borderRadius: 20,
  marginTop: 20,
  alignItems: 'center'
}} onPress={() => navigation.navigate('Bag', {bagItems}) }>
  <Text style={{
    fontSize: 18,
    fontFamily: 'MetroBold',
    color: 'white'
  }}>
    View Bag
  </Text>

</TouchableOpacity>
</ScrollView>
  )
}

export default ShopPage