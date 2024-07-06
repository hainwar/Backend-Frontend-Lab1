# Materi LAB

## Pengenalan dan Penginstalan Expo - React Native

### Pengertian React Native dan Expo
React Native adalah framework yang dikembangkan oleh Facebook untuk membangun aplikasi menggunakan JavaScript dan React. Expo adalah alat dan platform yang dibangun di atas React Native yang menyederhanakan proses pengembangan, pengujian, dan distribusi aplikasi mobile.

### Cara Memulai

#### 1. Node.js: Pastikan Anda telah menginstal Node.js dan npm di komputer Anda. Anda dapat mendownloadnya dari nodejs.org

#### 2. Expo CLI: Instal Expo CLI secara global menggunankan npm atau yarn:
``npm install -g expo-cli``
atau
``yarn global add expo-cli``

### Membuat Proyek Baru

#### 1. Buat proyek baru dengan Expo CLI:
``expo init my-new-project``

Pilih template yang diinginkan, misalnya"blank" untuk proyek kosong.

#### 2. Masuk ke direktori proyek:
``cd my-new-project``

#### 3. Jalankan proyek:
``expo start``
atau ``npm start``


## Komponen Dasar

import { StyleSheet, View } from "react-native";
import React from "react";

const app = () => {
    return (
        <View style={{flex : 1}}>
            <View style={{
                flex = 1,
                flexDirection : 'row',
                backgroundColor: 'white',
            }}>
                <View style={{
                    flex : 1,
                    backgroundColor : 'red'
                }}>
                </View>
                <View style={{
                    flex : 1,
                    backgroundColor : 'yellow'
                }}>
            </View>
        </View>
        <View style={{
            flex : 1,
            backgroundColor : 'green'
        }}>
        </View>
        <View style={{
            flex : 1,
            backgroundColor: 'yellow'
        }}>
            </View>
    </View>
    )
}
export default app

## Button View


import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import ButtonCustom from './assets/components/buttonCustum';

const App = () => {
  return (
    <View style={{
      flex:1,
      backgroundColor: 'black'
    }}>
      <View>
        <Text style={{
          fontSize:30,
          textAlign:'center',
          top:20,
          bottom:0,
          justifyContent:'center',
          color:'red'
        }}>
          Selamat Datang di Welcome
        </Text>
        </View>

        <View style={{
          flex:1,
          alignItems:'center',
          justifyContent:'center',
          top:200
        }}>
          <Image source={require('./assets/img/bg.jpg')} style={{
            width:300,
            height:300,
            resizeMode:'contain'
          }} />
        </View>

        <View style={{
          flex:1,
          alignItems:'flex-end',
          justifyContent:'center',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          marginBottom:100,
        }}>
          <View style={{
            flex:1,
            width: 90,
            height:40,
            justifyContent:'center',
            borderRadius:25,
            flexDirection:'row',
            columnGap:20,
            }}>
              <ButtonCustom color='red' text='Login'/>
              <ButtonCustom color='red' text='Sign Up'/>
          </View>
        </View>
    </View>
  ) 
}
export default App

## Sign Up

import { StyleSheet, Text, View, TextInput, Image } from "react-native";
import React from "react";

const App = () => {
  const TextInputCustom =({ name, color }) => {
    return (
        <TextInput
        placeholder={` ${name}`}
        style={{
          borderColor: 'gray',
          width:355,
          height:64,
          marginBottom:10,
          paddingHorizontal:10,
          color: color,
          backgroundColor:'white',
          shadowColor:'black',
          shadowRadius: 1,
          shadowOpacity:0.2,
        }}
        />
    )
  }
  const ButtonCustom = ({ color, text}) => {
    return (
      <View style={{
        backgroundColor: color,
        width: '90%',
        height: 50,
        borderRadius: 20,
        justifyContent: 'center'
      }}>
        <Text style={{
          textAlign: 'center',
          fontSize:15,
          color:'white'
        }}> {text}

        </Text>
        </View>
    );
  }
return (
  <View style={{
    flex:1,
    backgroundColor:'#F5F5F5'
  }}>
    <View style={{
      flex:1,
      alignItems:'flex-start',
      justifyContent:'flex-start',
      width:'100%',
      paddingLeft:14,
      top:106
    }}>
      <Text style={{
        fontSize:34,
        lineHeight:34,
        fontWeight:'bold',
        color:'#222222'
      }}>Sign Up</Text>
    </View>

  <View style={{
    flex:1,
    width:343,
    height:64,
    alignSelf:'center',
    alignItems:'center',
  }}>
    <TextInputCustom name='Name' color='666666' />
    <TextInputCustom name='Email' color='666666' />
    <TextInputCustom name='Password' color='666666' />
  </View>

  <View style={{
    alignSelf:'flex-end',
    right:17
  }}>
    <Text style={{
      color:'#222222',
    }}>Already have an account?</Text>
  </View>

  <View style={{
    flex:1,
    justifyContent:'flex-end',
    alignItems:'center',
    bottom:110,
    width:'100%',
  }}>
    <ButtonCustom color='red' text='SIGN UP' />
  </View>

  <View style={{
    alignSelf:'center',

  }}>
    <Text style={{
      color:'#222222',
      fontSize:14,
      bottom:40
    }}>Or sign up with social account</Text>
  </View>

  <View style={{
    flexDirection:'row',
    columnGap:20,
    alignSelf:'center',
    bottom:25
  }}>
    <View style={{
      backgroundColor:'white',
      borderRadius:10,
      padding:10
    }}>
    <Image source={require('./assets/img/google.png')} style={{
      height:30,
      width:50,
      resizeMode:'contain',
    }}/>
  </View>
    <View style={{
      backgroundColor:'white',
      borderRadius:10,
      padding:10
    }}>
    <Image source={require('./assets/img/facebook.png')} style={{
      height:30,
      width:50,
      resizeMode:'contain',
    }}/>
  </View>
  </View>
  </View>
  )
}
export default App

## Login

import { StyleSheet, Text, View, TextInput, Image } from "react-native";
import React from "react";

const App = () => {
  const TextInputCustom =({ name, color }) => {
    return (
        <TextInput
        placeholder={` ${name}`}
        style={{
          borderColor: 'gray',
          width:355,
          height:64,
          marginBottom:10,
          paddingHorizontal:10,
          color: color,
          backgroundColor:'white',
          shadowColor:'black',
          shadowRadius: 1,
          shadowOpacity:0.2,
        }}
        />
    )
  }
  const ButtonCustom = ({ color, text}) => {
    return (
      <View style={{
        backgroundColor: color,
        width: '90%',
        height: 50,
        borderRadius: 20,
        justifyContent: 'center'
      }}>
        <Text style={{
          textAlign: 'center',
          fontSize:15,
          color:'white'
        }}> {text}

        </Text>
        </View>
    );
  }
return (
  <View style={{
    flex:1,
    backgroundColor:'#F5F5F5'
  }}>
    <View style={{
      flex:1,
      alignItems:'flex-start',
      justifyContent:'flex-start',
      width:'100%',
      paddingLeft:14,
      top:106
    }}>
      <Text style={{
        fontSize:34,
        lineHeight:34,
        fontWeight:'bold',
        color:'#222222'
      }}>Login</Text>
    </View>

  <View style={{
    flex:1,
    width:343,
    height:64,
    alignSelf:'center',
    alignItems:'center',
  }}>
    <TextInputCustom name='Email' color='666666' />
    <TextInputCustom name='Password' color='666666' />
  </View>

  <View style={{
    alignSelf:'flex-end',
    bottom:40,
    right:17
  }}>
    <Text style={{
      color:'#222222',
    }}>Forgot your password?</Text>
  </View>

  <View style={{
    flex:1,
    justifyContent:'flex-end',
    alignItems:'center',
    bottom:150,
    width:'100%',
  }}>
    <ButtonCustom color='red' text='LOGIN' />
  </View>

  <View style={{
    alignSelf:'center',

  }}>
    <Text style={{
      color:'#222222',
      fontSize:14,
      bottom:50
    }}>Or sign up with social account</Text>
  </View>

  <View style={{
    flexDirection:'row',
    columnGap:20,
    alignSelf:'center',
    bottom:35
  }}>
    <View style={{
      backgroundColor:'white',
      borderRadius:10,
      padding:10
    }}>
    <Image source={require('./assets/img/google.png')} style={{
      height:30,
      width:50,
      resizeMode:'contain',
    }}/>
  </View>
    <View style={{
      backgroundColor:'white',
      borderRadius:10,
      padding:10
    }}>
    <Image source={require('./assets/img/facebook.png')} style={{
      height:30,
      width:50,
      resizeMode:'contain',
    }}/>
  </View>
  </View>
  </View>
  )
}
export default App


## Forgot Password

import { StyleSheet, Text, View, TextInput, Image } from "react-native";
import React from "react";

const App = () => {
  const TextInputCustom =({ name, color }) => {
    return (
        <TextInput
        placeholder={` ${name}`}
        style={{
          borderColor: 'gray',
          width:355,
          height:64,
          marginBottom:10,
          paddingHorizontal:10,
          color: color,
          backgroundColor:'white',
          shadowColor:'black',
          shadowRadius: 1,
          shadowOpacity:0.2,
        }}
        placeholderTextColor={color}
        />
    )
  }
  const ButtonCustom = ({ color, text}) => {
    return (
      <View style={{
        backgroundColor: color,
        width: '90%',
        height: 50,
        borderRadius: 20,
        justifyContent: 'center'
      }}>
        <Text style={{
          textAlign: 'center',
          fontSize:15,
          color:'white'
        }}> {text}

        </Text>
        </View>
    );
  }
return (
  <View style={{
    flex:1,
    backgroundColor:'#F5F5F5'
  }}>
    <View style={{
      flex:1,
      justifyContent:'flex-start',
      width:'100%',
      top:106,
    }}>
      <Text style={{
        alignItems:'flex-start',
        paddingLeft:14,
        fontSize:34,
        lineHeight:34,
        fontWeight:'bold',
        color:'#222222'
      }}>Forgot Password</Text>
    
      <Text style={{
        top:40,
        paddingHorizontal:15,
        fontSize:14,
        width:'101%'
      }}>Please, enter your email address. You will receive a link to create a new password via email.</Text>
    </View>

  <View style={{
    flex:1,
    alignSelf:'center',
    alignItems:'center',
    top:10
  }}>
    <TextInputCustom name='Email' color='666666' />
  </View>

  <View style={{
    flex:1,
    justifyContent:'flex-end',
    alignItems:'center',
    bottom:250,
    width:'100%',
  }}>
    <ButtonCustom color='red' text='SEND' />
  </View>
  </View>
  )
}
export default App

## UseFonts

import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useFonts } from "expo-font";

const App = () => {
  const [fontLoaded, fontError] = useFonts({
    'Metro-Bold': require('./assets/fonts/Metropolis-Bold.otf'),
  })

  if (!fontLoaded) return <View>
    <Text>Font Tidak Ditemukan!</Text>
  </View>

  return(
    <View style={{
      flex:1,
      justifyContent:'center',
      alignItems:'center'
    }}>
      <Text style>Hello World</Text>
      <Text style={{
        fontFamily: 'Metro-Bold',
        fontSize:30
      }}>Metro Bold</Text>
    </View>
  )
}

export default App

import { StyleSheet, View, Text } from "react-native";
import React from "react";
import { useFonts } from "expo-font";

const App = () => {
  const [fontLoaded, fontError] = useFonts({
    'Metro-Bold': require('./assets/fonts/Metropolis-Bold.otf'),
    'Metro-Medium': require('./assets/fonts/Metropolis-Medium.otf'),
    'Metro-SemiBold': require('./assets/fonts/Metropolis-SemiBold.otf'),
    'Metro-Black': require('./assets/fonts/Metropolis-Black.otf'),
  })

  if (!fontLoaded) return <View>
    <Text>Font Tidak Ditemukan!</Text>
  </View>

  return(
    <View style={{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
    }}>
      <Text style={{
        fontSize:30
      }}>Font Biasa</Text>
      <Text style={{
        fontFamily:'Metro-Bold',
        fontSize:30
      }}>Font Metro Bold</Text>
      <Text style={{
        fontFamily:'Metro-Medium',
        fontSize:30
      }}>Font Metro Medium</Text>
      <Text style={{
        fontFamily:'Metro-SemiBold',
        fontSize:30
      }}>Font Metro SemiBold</Text>
      <Text style={{
        fontFamily:'Metro-Black',
        fontSize:30
      }}>Font Metro Black</Text>
    </View>
  )
}

export default App

## Navigation

import * as React from 'react';
import { View, Text, Button, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from './assets/components/Login';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeAktif from './assets/img/homeAktif.jpeg';
import HomeNonAktif from './assets/img/home.jpeg';
import ShopAktif from './assets/img/shopAktif.jpeg';
import ShopNonAktif from './assets/img/shop.jpeg';
import { useFonts } from 'expo-font';

const Tab = createBottomTabNavigator();
function MyTabs(){
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen}
      options={{headerShown:false, tabBarIcon:({focused}) => (
        <Image source={focused ? HomeAktif : HomeNonAktif} style={{width:30, height:30}} />
      )
    }}
    />

      <Tab.Screen name="Login" component={LoginPage}
      options={{headerShown:false, tabBarIcon:({focused}) => (
        <Image source={focused ? ShopAktif : ShopNonAktif} style={{width:30, height:30}} />
      )
    }}
    />
    </Tab.Navigator>
  )
}

function HomeScreen({navigation}){
    const [fontLoaded] = useFonts({
      'Metro-Bold': require('./assets/fonts/Metropolis-Bold.otf'),
      'Metro-Medium': require('./assets/fonts/Metropolis-Medium.otf'),
      'Metro-SemiBold': require('./assets/fonts/Metropolis-SemiBold.otf'),
      'Metro-Black': require('./assets/fonts/Metropolis-Black.otf'),
    })
  
    if (!fontLoaded) return <View>
      <Text>Font Tidak Ditemukan!</Text>
    </View>

  return (
    <View style={{
      flex:1,
      alignItems:'center',
      justifyContent:'center',
    }}>
      <Text style={{
        fontSize:16,
        padding:15,
        fontFamily:'Metro-Black',
      }}>Home Screen</Text>
      <Button title="Go to Login" onPress={() => navigation.navigate('Login')}
      />
    </View>
  )
}

const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={MyTabs} />
        <Stack.Screen name="Login" component={LoginPage} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

//* Navigation
import * as React from 'react';
import { View, Text, Button, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from './assets/components/LoginPage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeAktif from './assets/img/homeAktif.jpeg';
import HomeNonAktif from './assets/img/home.jpeg';
import ShopAktif from './assets/img/shopAktif.jpeg';
import ShopNonAktif from './assets/img/shop.jpeg';
import { useFonts } from 'expo-font';

const Tab = createBottomTabNavigator();
function HomeScreen({navigation}){
    const [fontLoaded] = useFonts({
      'Metro-Bold': require('./assets/fonts/Metropolis-Bold.otf'),
      'Metro-Medium': require('./assets/fonts/Metropolis-Medium.otf'),
      'Metro-SemiBold': require('./assets/fonts/Metropolis-SemiBold.otf'),
      'Metro-Black': require('./assets/fonts/Metropolis-Black.otf'),
    })
  
    if (!fontLoaded) {
      return (
        <View>
          <Text>Font Tidak Ditemukan!</Text>
          </View>
        )
      }

      return (
        <View style={{
          flex:1,
          alignItems:'center',
          justifyContent:'center',
        }}>
          <Text style={{
            fontSize:16,
            padding:15,
            fontFamily:'Metro-Black',
          }}>Home Screen</Text>
      
          <TouchableOpacity
          style={{
            backgroundColor:'blue',
            padding:10,
            marginBottom:10,
            borderRadius:5,
            alignItems:'center',

          }} 
          onPress={() => navigation.navigate('Login')}>
          <Button title="Go to Login" onPress={() => navigation.navigate('Login')}
          />
          <Text style={{
            color:'white',
            fontFamily:'Metro-Bold',
          }}>KLIK UNTUK MASUK</Text>
          </TouchableOpacity>
        </View>
      )
      }

function MyTabs(){
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen}
      options={{
        headerShown:false, tabBarIcon:({focused}) => (
        <Image source={focused ? HomeAktif : HomeNonAktif} style={{width:30, height:30}} />
      )
    }}
    />

<Tab.Screen name="Login" component={LoginPage}
      options={{
        headerShown:false, tabBarIcon:({focused}) => (
        <Image source={focused ? ShopAktif : ShopNonAktif} style={{width:30, height:30}} />
      )
    }}
    />
    </Tab.Navigator>
  )
}

const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={MyTabs} />
        <Stack.Screen name="Login" component={LoginPage} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App


//* Menghubungkan Antar Page
 // App
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

// SignUpPage
import React from "react";
import { Text, View, TextInput, Image, TouchableOpacity } from "react-native";

const TextInputCustom =({ name, color, secureTextEntry }) => (
    <TextInput
    placeholder={`${name}`}
    secureTextEntry={secureTextEntry}
    style={{
      borderColor: 'gray',
      height:64,
      marginBottom:10,
      paddingHorizontal:10,
      color: color,
      backgroundColor:'white',
      shadowColor:'black',
      shadowRadius: 1,
      shadowOpacity:0.2,
      width:'90%',
      fontSize:15,
      fontFamily:'MetroLight',
    }}
    />
  )

const ButtonCustom = ({ color, text}) => (
    <View style={{
      backgroundColor: color,
        width: '90%',
        height: 50,
        borderRadius: 20,
        justifyContent: 'center',
      }}>
        <Text style={{
          textAlign: 'center',
          fontFamily:'MetroBold',
          letterSpacing:1,
          fontSize:15,
          color:'white',
        }}> {text}

        </Text>
        </View>
    );
  
  const SignUpPage = ({navigation}) => (
    <View style={{
      flex:1,
      backgroundColor:'#F5F5F5'
    }}>

    <View style={{
      flex:1,
      alignItems:'flex-start',
      justifyContent:'flex-start',
      width:'100%',
      paddingLeft:14,
      top:35
    }}>
      <Text style={{
        fontSize:34,
        color:'#222222',
        fontFamily:'MetroBold',
      }}>
        Sign Up</Text>
    </View>

    <View style={{
      flex:1,
      width:'100%',
      alignSelf:'center',
      alignItems:'center',
      justifyContent:'center',
      minHeight:250,
      }}>
        <TextInputCustom name='Name' color='#666666' />
        <TextInputCustom name='Email' color='#666666' />
        <TextInputCustom name='Password' color='#666666' secureTextEntry={true}/>
    </View>
    
    <TouchableOpacity 
    style={{  
      flex:1,
      alignSelf:'flex-end',
      right:18,
      bottom:10
    }}
    onPress={() => navigation.navigate('Login')}> 
    <Text style={{
      color:'#222222',
      fontSize:15,
      fontFamily:'MetroMedium',
    }}>
      Already have an account?
    </Text>
    </TouchableOpacity>

    <View style={{
      flex:1,
      justifyContent:'flex-end',
      alignItems:'center',
      bottom:90,
      width:'100%',
    }}>
      <ButtonCustom color='red' text='SIGN UP' />
    </View>

    <View style={{
      alignSelf:'center',
    }}>
      <Text style={{
        color:'#222222',
        fontSize:15,
        bottom:30,
        fontFamily:'MetroMedium',
      }}>
        Or sign up with social account</Text>
    </View>

    <View style={{
      flexDirection:'row',
      columnGap:20,
      alignSelf:'center',
      bottom:15
    }}>
      <View style={{
        backgroundColor:'white',
        borderRadius:10,
        padding:10
      }}>
        <Image source={require('../img/google.png')} style={{
          width: 50,
          height: 30,
          resizeMode: 'contain'
        }}/>
      </View>
      <View style={{
        backgroundColor:'white',
        borderRadius:10,
        padding:10
      }}>
        <Image source={require('../img/facebook.png')} style={{
          width: 50,
          height: 30,
          resizeMode: 'contain'
        }}/>
      </View>
    </View>
    </View>
  )
  
  export default SignUpPage;

  // LoginPage
  import { Text, View, TextInput, Image, TouchableOpacity } from "react-native";
import React from "react";

const TextInputCustom =({ name, color, secureTextEntry }) => (
    <TextInput
    placeholder={` ${name}`}
    secureTextEntry={secureTextEntry}
    style={{
      borderColor: 'gray',
          width:'90%',
          height:64,
          marginBottom:10,
          paddingHorizontal:10,
          color: color,
          backgroundColor:'white',
          shadowColor:'black',
          shadowRadius: 1,
          shadowOpacity:0.2,
          fontFamily:'MetroLight',
          fontSize:15,
        }}
        />
      )
    
    const ButtonCustom = ({ color, text}) => (
        <View style={{
          backgroundColor: color,
          width: '90%',
          height: 50,
          borderRadius: 20,
          justifyContent: 'center'
        }}>
        <Text style={{
          textAlign: 'center',
          fontSize:15,
          color:'white',
          fontFamily:'MetroBold',
          letterSpacing:1,
        }}> {text}

        </Text>
        </View>
    );
  
  const LoginPage = ({navigation}) => (
    <View style={{
    flex:1,
    backgroundColor:'#F5F5F5'
  }}>
    <View style={{
      flex:1,
      alignItems:'flex-start',
      justifyContent:'flex-start',
      width:'100%',
      paddingLeft:14,
      top:35
    }}>
      <Text style={{
        fontSize:34,
        color:'#222222',
        fontFamily:'MetroBold'
      }}>Login</Text>
    </View>

  <View style={{
    flex:1,
    width:'100%',
    alignSelf:'center',
    alignItems:'center',
    minHeight:250,
    top:19
  }}>
    <TextInputCustom name='Email' color='#666666' />
    <TextInputCustom name='Password' color='#666666'secureTextEntry={true}/>
  </View>

  <TouchableOpacity
  style={{
    flex:1,
    alignSelf:'flex-end',
    bottom:50,
    right:18,
  }}
  onPress={() => navigation.navigate('Forgot Password')}>
    <Text style={{
      color:'#222222',
      fontSize:15,
      bottom:30,
      fontFamily:'MetroMedium',
    }}>Forgot your password?</Text>
  </TouchableOpacity>

  <View style={{
    flex:1,
    justifyContent:'flex-end',
    alignItems:'center',
    bottom:155,
    width:'100%',
  }}>
    <ButtonCustom color='red' text='LOGIN' />
  </View>

  <View style={{
    alignSelf:'center',

  }}>
    <Text style={{
      color:'#222222',
      fontSize:15,
      bottom:90,
      fontFamily:'MetroMedium',
      fontSize:15,
    }}>Or sign up with social account</Text>
  </View>

  <View style={{
    flexDirection:'row',
    columnGap:20,
    alignSelf:'center',
    bottom:75
  }}>
    <View style={{
      backgroundColor:'white',
      borderRadius:10,
      padding:10
    }}>
    <Image source={require('../img/google.png')} style={{
      height:30,
      width:50,
      resizeMode:'contain',
    }}/>
  </View>
    <View style={{
      backgroundColor:'white',
      borderRadius:10,
      padding:10
    }}>
    <Image source={require('../img/facebook.png')} style={{
      height:30,
      width:50,
      resizeMode:'contain',
    }}/>
  </View>
  </View>
  </View>
)

export default LoginPage


// ForgotPasswordPage
import { Text, View, TextInput } from "react-native";
import React from "react";

const TextInputCustom =({ name, color }) => (
    <TextInput
    placeholder={` ${name}`}
    style={{
      borderColor: 'gray',
      width:355,
      height:64,
      marginBottom:10,
      paddingHorizontal:10,
      color: color,
      backgroundColor:'white',
      shadowColor:'black',
      shadowRadius: 1,
      shadowOpacity:0.2,
      fontFamily:'MetroLight',
      fontSize:15,
    }}
    placeholderTextColor={color}
    />
  )
  
  const ButtonCustom = ({ color, text}) => (
      <View style={{
        backgroundColor: color,
        width: '90%',
        height: 50,
        borderRadius: 20,
        justifyContent: 'center'
      }}>
        <Text style={{
          textAlign: 'center',
          fontSize:15,
          color:'white',
          fontFamily:'MetroBold',
          letterSpacing:1,
        }}> {text}

        </Text>
        </View>
    );
  
  const ForgotPasswordPage = () => (
    <View style={{

      backgroundColor:'#F5F5F5'
  }}>
    <View style={{
      flex:1,
      justifyContent:'flex-start',
      width:'100%',
      top:35,
    }}>
      <Text style={{
        alignItems:'flex-start',
        paddingLeft:14,
        fontSize:34,
        color:'#222222',
        fontFamily:'MetroBold'
      }}>Forgot Password</Text>
    
      <Text style={{
        top:20,
        paddingHorizontal:15,
        fontSize:14,
        width:'100%',
        fontFamily:'MetroLight',
      }}>Please, enter your email address. You will receive a link to create a new password via email.</Text>
    </View>

  <View style={{
    flex:1,
    justifyContent:'center',
    alignSelf:'center',
    alignItems:'center',
    minHeight:250,
  }}>
    <TextInputCustom name='Email' color='#666666' />
  </View>

  <View style={{
    flex:1,
    justifyContent:'flex-end',
    alignItems:'center',
    width:'100%',
    bottom:50
  }}>
    <ButtonCustom color='red' text='SEND' />
  </View>
  </View>
);

export default ForgotPasswordPage
