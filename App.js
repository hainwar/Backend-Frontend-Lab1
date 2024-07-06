import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignUpPage from './assets/components/SignUpPage';
import LoginPage from './assets/components/LoginPage';
import ForgotPasswordPage from './assets/components/ForgotPasswordPage';
import { useFonts } from 'expo-font';


const HomeScreen = ({navigation}) => (
  <View style={{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  }}> 
    <Text style={{
      fontSize:25,
      marginBottom:20,
      fontFamily:'MetroBold'
    }}>Home Screen</Text>

    <TouchableOpacity style={{
      marginBottom:20
    }}
    onPress={() => navigation.navigate('Sign Up')}>
      <Text style={{
        backgroundColor:'#696969',
        padding:10,
        borderRadius:10,
        color:'white',
        fontSize:20,
        fontFamily:'MetroMedium',
        shadowColor:'black',
        shadowRadius: 10,
        shadowOpacity:0.2,

      
      }}>Go to Sign Up Page</Text>
    </TouchableOpacity>
  </View>
)

const Stack = createStackNavigator();
const App = () => {
  const [fontsLoaded] = useFonts({
    'MetroBold': require('./assets/fonts/Metropolis-Bold.otf'),
    'MetroLight': require('./assets/fonts/Metropolis-Light.otf'),
    'MetroBlack': require('./assets/fonts/Metropolis-Black.otf'),
    'MetroMedium': require('./assets/fonts/Metropolis-Medium.otf'),
    'MetroSemiBold': require('./assets/fonts/Metropolis-SemiBold.otf'),
  });

    if (!fontsLoaded) 
      return <View>
        <Text>Font Tidak Ditemukan</Text>
        </View>
    

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen name="Home Screen" component={HomeScreen} />
        <Stack.Screen name="Sign Up" component={SignUpPage} />
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Forgot Password" component={ForgotPasswordPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;