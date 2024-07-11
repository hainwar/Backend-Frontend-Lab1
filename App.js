import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyTabs from './assets/components/MyTabs';
import LoginPage from './assets/components/LoginPage';
import MyOrders from './assets/components/profilePage/MyOrders';
import ShippingAddress from './assets/components/profilePage/ShippingAddress';
import PaymentMethods from './assets/components/profilePage/PaymenMethods';  
import PromoCodes from './assets/components/profilePage/PromoCodes';
import Review from './assets/components/profilePage/Review';
import Settings from './assets/components/profilePage/Settings';

const primaryColor = '#FF6C44';
const white = '#FFFFFF';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: primaryColor,
      },
      headerTintColor: white,
      headerTitleStyle: {
        fontWeight: 'bold'
    }
  }}
    >
        <Stack.Screen name="anwarStore" component={MyTabs}/>
        <Stack.Screen name="LoginPage" component={LoginPage}/>
        <Stack.Screen name="MyOrders" component={MyOrders}/>
        <Stack.Screen name="ShippingAddress" component={ShippingAddress}/>
        <Stack.Screen name="PaymentMethods" component={PaymentMethods}/>
        <Stack.Screen name="PromoCodes" component={PromoCodes}/>
        <Stack.Screen name="Review" component={Review}/>
        <Stack.Screen name="Settings" component={Settings}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;