import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.copyright}>© 2024 AnwarStore. All rights reserved.</Text>
      <View style={styles.socialMedia}>
        <Image
          source={{ uri: 'https://your-icon-url.com/facebook.png' }}
          style={styles.icon}
        />
        <Image
          source={{ uri: 'https://your-icon-url.com/twitter.png' }}
          style={styles.icon}
        />
        <Image
          source={{ uri: 'https://your-icon-url.com/instagram.png' }}
          style={styles.icon}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    width: '100%',
    padding: 20,
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#eee',
    backgroundColor: '#fff',
  },
  copyright: {
    marginBottom: 10,
    fontSize: 14,
    color: '#888',
  },
  socialMedia: {
    flexDirection: 'row',
  },
  icon: {
    width: 30,
    height: 30,
    marginHorizontal: 10,
  },
});

export default Footer;
