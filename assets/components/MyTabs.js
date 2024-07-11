import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import HomeScreen from './HomeScreen';
import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';
import ForgotPasswordPage from './ForgotPasswordPage';
import ProfilePage from './ProfilePage';
import HomeAktif from '../img/homeAktif.jpeg';
import HomeNonAktif from '../img/home.jpeg';
import ShopAktif from '../img/shopAktif.jpeg';
import ShopNonAktif from '../img/shop.jpeg';

const Tab = createBottomTabNavigator();

const MyTabs = () => {
return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image source={focused ? HomeAktif : HomeNonAktif} style={{ width: 30, height: 30 }} />
          ),
        }}
      />
      <Tab.Screen
        name="SignUp"
        component={SignUpPage}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image source={focused ? ShopAktif : ShopNonAktif} style={{ width: 30, height: 30 }} />
          ),
        }}
      />
        <Tab.Screen
          name="Login"
          component={LoginPage}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <Image source={focused ? ShopAktif : ShopNonAktif} style={{ width: 30, height: 30 }} />
            ),
          }}
        />
      <Tab.Screen
        name="ForgotPassword"
        component={ForgotPasswordPage}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image source={focused ? ShopAktif : ShopNonAktif} style={{ width: 30, height: 30 }} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfilePage}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image source={focused ? ShopAktif : ShopNonAktif} style={{ width: 30, height: 30 }} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MyTabs;
