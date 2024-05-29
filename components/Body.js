import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';

const Body = () => {
  return (
    <ScrollView style={styles.body}>
      <View style={styles.bannerContainer}>
        <Image
          source={{ uri: 'https://your-banner-url.com/banner.jpg' }}
          style={styles.banner}
        />
      </View>
      <Text style={styles.sectionTitle}>Categories</Text>
      <View style={styles.categories}>
        <Category name="Electronics" image="https://your-category-url.com/electronics.jpg" />
        <Category name="Fashion" image="https://your-category-url.com/fashion.jpg" />
        <Category name="Home" image="https://your-category-url.com/home.jpg" />
      </View>
      <Text style={styles.sectionTitle}>Popular Products</Text>
      <View style={styles.products}>
        <Product name="Product 1" price="$99" image="https://your-product-url.com/product1.jpg" />
        <Product name="Product 2" price="$199" image="https://your-product-url.com/product2.jpg" />
        <Product name="Product 3" price="$299" image="https://your-product-url.com/product3.jpg" />
      </View>
    </ScrollView>
  );
};

const Category = ({ name, image }) => (
  <View style={styles.category}>
    <Image source={{ uri: image }} style={styles.categoryImage} />
    <Text style={styles.categoryText}>{name}</Text>
  </View>
);

const Product = ({ name, price, image }) => (
  <View style={styles.product}>
    <Image source={{ uri: image }} style={styles.productImage} />
    <Text style={styles.productName}>{name}</Text>
    <Text style={styles.productPrice}>{price}</Text>
  </View>
);

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  bannerContainer: {
    width: '100%',
    height: 200,
    marginBottom: 20,
  },
  banner: {
    width: '100%',
    height: '100%',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 20,
    marginTop: 20,
  },
  categories: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  category: {
    alignItems: 'center',
  },
  categoryImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  categoryText: {
    marginTop: 10,
    fontSize: 16,
  },
  products: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    padding: 10,
  },
  product: {
    width: '45%',
    backgroundColor: '#fff',
    marginBottom: 20,
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
  },
  productImage: {
    width: '100%',
    height: 100,
    borderRadius: 10,
  },
  productName: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  productPrice: {
    marginTop: 5,
    fontSize: 14,
    color: '#888',
  },
});

export default Body;
