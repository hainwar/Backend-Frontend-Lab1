import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import HomeScreen from './HomeScreen';
import ShopPage from './ShopPage';
import BagPage from './BagPage';
import FavoritesPage from './FavoritesPage';
import ProfilePage from './ProfilePage';
import HomeAktif from '../img/icon-tabs/homeAktif.png';
import HomeNonAktif from '../img/icon-tabs/home.png';
import ShopAktif from '../img/icon-tabs/shopAktif.png';
import ShopNonAktif from '../img/icon-tabs/shop.png';
import BagAktif from '../img/icon-tabs/bagAktif.png';
import BagNonAktif from '../img/icon-tabs/bag.png';
import FavoritesAktif from '../img/icon-tabs/favoritesAktif.png';
import FavoritesNonAktif from '../img/icon-tabs/favorites.png';
import ProfileAktif from '../img/icon-tabs/profileAktif.png';
import ProfileNonAktif from '../img/icon-tabs/profile.png';

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
