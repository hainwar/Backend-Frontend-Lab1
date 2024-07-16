import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import React, {useState} from 'react';
import useCustomFonts from '../../styles/Fonts';

const FavoritesPage = () => {
  const [fontLoaded] = useCustomFonts();
  const [favoritesItems, setFavoritesItems] = useState([
    {
      id: 1,
      name: 'Man Shirt Blue',
      price: 50,
      image: require('../../assets/img/product/shirt.png')
    },
    {
      id: 2,
      name: 'Man Shirt Black',
      price: 60,
      image: require('../../assets/img/product/shirt2.png')
    },
    {
      id: 3,
      name: 'Dress Nikon',
      price: 70,
      image: require('../../assets/img/product/dress.png')
    }, 
  ]);

  if (!fontLoaded) {
    return (
      <Text>Loading...</Text>
    )
  }

  const removeFavoriteItem = (id) => {
    setFavoritesItems(favoritesItems.filter(item => item.id !== id));
  };

  return (
    <ScrollView style={{
      flex: 1,
      backgroundColor: '#F5F5F5',
      padding: 20
    }}>
      <Text style={{
        fontSize:34,
        color: '#222222',
        fontFamily: 'MetroBold'
      }}>
        Favorites
      </Text>

      {favoritesItems.length > 0 ? (
        favoritesItems.map((item) => (
          <View key={item.id} style={{
            padding: 10,
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
            }}/>

            <View style={{
              flex: 1,
              marginLeft: 10
            }}>
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

            <TouchableOpacity onPress={() => removeFavoriteItem(item.id)} >
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
          fontFamily: 'MetroBold',
          color: '#222222',
          textAlign: 'center',
          marginTop: 20
        }}>
          No favorites items
        </Text>
      )}
    </ScrollView>
  )
}

export default FavoritesPage