// import * as React from 'react';
// import { View, Text, Image, TouchableOpacity } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import LoginPage from './assets/components/LoginPage';
// import SignUpPage from './assets/components/SignUpPage';
// import ForgotPasswordPage from './assets/components/ForgotPasswordPage';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import HomeAktif from './assets/img/homeAktif.jpeg';
// import HomeNonAktif from './assets/img/home.jpeg';
// import ShopAktif from './assets/img/shopAktif.jpeg';
// import ShopNonAktif from './assets/img/shop.jpeg';
// import HomeScreen from './assets/components/HomeScreen';

// const Tab = createBottomTabNavigator();

// function MyTabs(){
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Home" component={HomeScreen}
//       options={{
//         headerShown:false, tabBarIcon:({focused}) => (
//         <Image source={focused ? HomeAktif : HomeNonAktif} style={{width:30, height:30}} />
//       )
//     }}
//     />

// <Tab.Screen name="Login" component={LoginPage}
//       options={{
//         headerShown:false, tabBarIcon:({focused}) => (
//         <Image source={focused ? ShopAktif : ShopNonAktif} style={{width:30, height:30}} />
//       )
//     }}
//     />

// <Tab.Screen name="SignUp" component={SignUpPage}
//       options={{
//         headerShown:false, tabBarIcon:({focused}) => (
//         <Image source={focused ? ShopAktif : ShopNonAktif} style={{width:30, height:30}} />
//       )
//     }}
//     />
// <Tab.Screen name="ForgotPassword" component={ForgotPasswordPage}
//       options={{
//         headerShown:false, tabBarIcon:({focused}) => (
//         <Image source={focused ? ShopAktif : ShopNonAktif} style={{width:30, height:30}} />
//       )
//     }}
//     />

    
//     </Tab.Navigator>
//   )
// }


// const Stack = createNativeStackNavigator();
// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={MyTabs} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   )
// }

// export default App

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyTabs from './assets/components/MyTabs';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={MyTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;