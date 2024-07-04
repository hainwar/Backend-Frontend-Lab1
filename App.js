import * as React from 'react';
import { View, Text, Button, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from './assets/components/Login';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeAktif from './assets/img/homeAktif.jpeg';
import HomeNonAktif from './assets/img/home.jpeg';
import ShopAktif from './assets/img/shopAktif.jpeg';
import ShopNonAktif from './assets/img/shop.jpeg';
import { useFonts } from 'expo-font';

const Tab = createBottomTabNavigator();
function MyTabs(){
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen}
      options={{headerShown:false, tabBarIcon:({focused}) => (
        <Image source={focused ? HomeAktif : HomeNonAktif} style={{width:30, height:30}} />
      )
    }}
    />

      <Tab.Screen name="Login" component={LoginPage}
      options={{headerShown:false, tabBarIcon:({focused}) => (
        <Image source={focused ? ShopAktif : ShopNonAktif} style={{width:30, height:30}} />
      )
    }}
    />
    </Tab.Navigator>
  )
}

function HomeScreen({navigation}){
    const [fontLoaded] = useFonts({
      'Metro-Bold': require('./assets/fonts/Metropolis-Bold.otf'),
      'Metro-Medium': require('./assets/fonts/Metropolis-Medium.otf'),
      'Metro-SemiBold': require('./assets/fonts/Metropolis-SemiBold.otf'),
      'Metro-Black': require('./assets/fonts/Metropolis-Black.otf'),
    })
  
    if (!fontLoaded) return <View>
      <Text>Font Tidak Ditemukan!</Text>
    </View>

  return (
    <View style={{
      flex:1,
      alignItems:'center',
      justifyContent:'center',
    }}>
      <Text style={{
        fontSize:16,
        padding:15,
        fontFamily:'Metro-Black',
      }}>Home Screen</Text>
      <Button title="Go to Login" onPress={() => navigation.navigate('Login')}
      />
    </View>
  )
}

const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={MyTabs} />
        <Stack.Screen name="Login" component={LoginPage} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App