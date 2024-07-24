import React, { useState } from 'react';
import { Text, View, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import authService from '../services/authService';

const SignUpPage = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSignUp = async () => {
        try {
            await authService.signup(username, email, password);
            setMessage('User registered successfully');
            navigation.navigate('LoginPage');
        } catch (err) {
            setMessage('Failed to register user');
        }
    };

    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#F5F5F5' }}>
            <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start', width: '100%', paddingLeft: 14, top: 35 }}>
                <Text style={{ fontSize: 34, color: '#222222', fontFamily: 'MetroBold' }}>Sign Up</Text>
            </View>
            <View style={{ flex: 1, width: '100%', alignSelf: 'center', alignItems: 'center', justifyContent: 'center', minHeight: 250, top: 80 }}>
                <TextInput 
                    placeholder="Name" 
                    value={username} 
                    onChangeText={setUsername} 
                    style={{ borderColor: 'gray', height: 64, marginBottom: 10, paddingHorizontal: 10, color: '#666666', backgroundColor: 'white', shadowColor: 'black', shadowRadius: 1, shadowOpacity: 0.2, width: '90%', fontSize: 15, fontFamily: 'MetroLight' }} 
                />
                <TextInput 
                    placeholder="Email" 
                    value={email} 
                    onChangeText={setEmail} 
                    style={{ borderColor: 'gray', height: 64, marginBottom: 10, paddingHorizontal: 10, color: '#666666', backgroundColor: 'white', shadowColor: 'black', shadowRadius: 1, shadowOpacity: 0.2, width: '90%', fontSize: 15, fontFamily: 'MetroLight' }} 
                />
                <TextInput 
                    placeholder="Password" 
                    value={password} 
                    onChangeText={setPassword} 
                    secureTextEntry={true} 
                    style={{ borderColor: 'gray', height: 64, marginBottom: 10, paddingHorizontal: 10, color: '#666666', backgroundColor: 'white', shadowColor: 'black', shadowRadius: 1, shadowOpacity: 0.2, width: '90%', fontSize: 15, fontFamily: 'MetroLight' }} 
                />
            </View>
            <TouchableOpacity style={{ alignSelf: 'flex-end', right: 18, top: 70 }} onPress={() => navigation.navigate('LoginPage')}>
                <Text style={{ color: '#222222', fontSize: 15, fontFamily: 'MetroMedium' }}>Already have an account?</Text>
            </TouchableOpacity>
            <View style={{ justifyContent: 'flex-end', top: 95 }}>
                <TouchableOpacity onPress={handleSignUp} style={{ width: '100%', alignItems: 'center' }}>
                    <View style={{ backgroundColor: 'red', width: '90%', height: 50, borderRadius: 20, justifyContent: 'center' }}>
                        <Text style={{ textAlign: 'center', fontFamily: 'MetroBold', letterSpacing: 1, fontSize: 15, color: 'white' }}>SIGN UP</Text>
                    </View>
                </TouchableOpacity>
            </View>
            {message ? <Text style={{ textAlign: 'center', color: 'red', marginTop: 20 }}>{message}</Text> : null}
        </ScrollView>
    );
};

export default SignUpPage;
