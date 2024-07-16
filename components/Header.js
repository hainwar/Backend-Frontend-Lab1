import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Image
        source={{  }}
        style={styles.logo}
      />
      <View style={styles.menu}>
        <Text style={styles.menuItem}>Home</Text>
        <Text style={styles.menuItem}>Products</Text>
        <Text style={styles.menuItem}>Contact</Text>
      </View>
      <TouchableOpacity>
        <Image
          source={{ uri: 'https://your-icon-url.com/search.png' }}
          style={styles.searchIcon}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    backgroundColor: '#fff',
    top: 10
  },
  logo: {
    width: 40,
    height: 80,
  },
  menu: {
    flexDirection: 'row',
  },
  menuItem: {
    marginLeft: 20,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  searchIcon: {
    width: 24,
    height: 24,
  },
});

export default Header;
