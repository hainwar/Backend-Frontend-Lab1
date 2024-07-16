import React from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import useCustomFonts from '../../styles/Fonts';

const profileImage = require('../../assets/img/profile.jpeg');
const userName = 'Hairul Anwar';
const userEmail = 'hairulanwar@gmail.com';

const ProfilePage = ({navigation}) => {
    const [fontLoaded] = useCustomFonts();

    if (!fontLoaded) {
        return (
            <View>
                <Text>Loading...</Text>
            </View>
        );
    }

const menuItems = [
    { name: 'My Orders', screen: 'MyOrders', countText: 'Already have 12 orders' },
    { name: 'Shipping Address', screen: 'ShippingAddress', countText: '3 addresses' },
    { name: 'Payment Methods', screen: 'PaymentMethods', countText: 'Visa **34' },
    { name: 'Promo Codes', screen: 'PromoCodes', countText: 'You have special promo codes'},
    { name: 'Review', screen: 'Review', countText: 'Reviews and Ratings' },
    { name: 'Settings', screen: 'Settings', countText: 'Notifications, password' },
]

return (
    <ScrollView style={{
        backgroundColor: '#F5F5F5',
        padding: 20,
        flexGrow: 1
    }}>
        <Text style={{
            fontSize: 24,
            fontFamily: 'MetroBold',
            marginBottom: 20,
            textAlign: 'flex-start'
        }}>
            My Profile
        </Text>

        <View style={{
            alignItems: 'flex-start',
            flexDirection: 'row',
            columnGap: 15,
        }}>
            <Image source={profileImage} style={{
                width: 50,
                height: 50,
                borderRadius: 50,
                marginBottom: 20
            }} />
            <View style={{
                flexDirection: 'column',
                justifyContent: 'center',
                top: 10,

            }}>
            <Text style={{
                fontSize: 16,
                fontFamily: 'MetroBold',
                textAlign: 'left',
            }}>
                {userName}
            </Text>
            <Text style={{
                fontSize: 14,
                fontFamily: 'MetroLight',
                textAlign: 'left',
                marginTop: 3
            }}>
                {userEmail}
            </Text>
        </View>
        </View>

        {menuItems.map((item, index) => (
            <TouchableOpacity key={index} style={{
                padding: 10,
                backgroundColor: 'white',
                marginVertical: 5,
                borderRadius: 5,
                elevation: 2,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center'
            }} onPress={() => navigation.navigate(item.screen)}>
                <View>
                <Text style={{
                    fontFamily: 'MetroMedium',
                    fontSize: 14,
                }}>
                    {item.name}
                </Text>
                <Text style={{
                    fontFamily: 'MetroLight',
                    fontSize: 10,
                    marginTop: 5
                }}>
                    {item.countText}
                </Text>
                </View>
                <Icon name="chevron-right" size={24} color={'#888'}/>
            </TouchableOpacity>
        ))}

    </ScrollView>
);
}
export default ProfilePage;