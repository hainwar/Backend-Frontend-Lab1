import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import HomeScreen from '../screens/ProfileScreens/HomeScreen';
import ShopPage from '../screens/ProfileScreens/ShopPage';
import BagPage from '../screens/ProfileScreens/BagPage';
import FavoritesPage from '../screens/ProfileScreens/FavoritesPage';
import ProfilePage from '../screens/ProfileScreens/ProfilePage';
import HomeAktif from '../assets/img/icon-tabs/homeAktif.png';
import HomeNonAktif from '../assets/img/icon-tabs/home.png';
import ShopAktif from '../assets/img/icon-tabs/shopAktif.png';
import ShopNonAktif from '../assets/img/icon-tabs/shop.png';
import BagAktif from '../assets/img/icon-tabs/bagAktif.png';
import BagNonAktif from '../assets/img/icon-tabs/bag.png';
import FavoritesAktif from '../assets/img/icon-tabs/favoritesAktif.png';
import FavoritesNonAktif from '../assets/img/icon-tabs/favorites.png';
import ProfileAktif from '../assets/img/icon-tabs/profileAktif.png';
import ProfileNonAktif from '../assets/img/icon-tabs/profile.png';
import LoginPage from '../screens/ProfileScreens/LoginPage';

const Tab = createBottomTabNavigator();

const MyTabs = () => {
return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={LoginPage}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image source={focused ? HomeAktif : HomeNonAktif} style={{ width: 30, height: 30 }} />
          ),
        }}
      />
      <Tab.Screen
        name="Shop"
        component={ShopPage}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image source={focused ? ShopAktif : ShopNonAktif} style={{ width: 30, height: 30 }} />
          ),
        }}
      />
        <Tab.Screen
          name="Bag"
          component={BagPage}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <Image source={focused ? BagAktif : BagNonAktif} style={{ width: 30, height: 30 }} />
            ),
          }}
        />
      <Tab.Screen
        name="Favorites"
        component={FavoritesPage}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image source={focused ? FavoritesAktif : FavoritesNonAktif} style={{ width: 30, height: 30 }} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfilePage}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image source={focused ? ProfileAktif : ProfileNonAktif} style={{ width: 30, height: 30 }} />
          ),
        }}
      />

    </Tab.Navigator>
  );
};

export default MyTabs;
