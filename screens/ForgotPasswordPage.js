import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import authService from '../services/authService';

const ForgotPasswordPage = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleForgotPassword = async () => {
        try {
            await authService.forgotPassword(email);
            setMessage('Password reset link sent');
        } catch (err) {
            setMessage('Failed to send password reset link');
        }
    };

    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#F5F5F5' }}>
            <View style={{ flex: 1, justifyContent: 'flex-start', width: '100%', top: 35 }}>
                <Text style={{ alignItems: 'flex-start', paddingLeft: 14, fontSize: 34, color: '#222222', fontFamily: 'MetroBold' }}>
                    Forgot Password
                </Text>
                <Text style={{ top: 20, paddingHorizontal: 15, fontSize: 14, width: '100%', fontFamily: 'MetroLight' }}>
                    Please, enter your email address. You will receive a link to create a new password via email.
                </Text>
            </View>
            <View style={{ flex: 1, justifyContent: 'center', alignSelf: 'center', alignItems: 'center', minHeight: 250, width: '100%' }}>
                <TextInput 
                    placeholder='Email' 
                    value={email} 
                    onChangeText={setEmail} 
                    style={{ borderColor: 'gray', height: 64, marginBottom: 10, paddingHorizontal: 10, color: '#666666', backgroundColor: 'white', shadowColor: 'black', shadowRadius: 1, shadowOpacity: 0.2, width: '90%', fontFamily: 'MetroLight', fontSize: 15 }} 
                />
            </View>
            <TouchableOpacity onPress={handleForgotPassword}>
                <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center', width: '100%', bottom: 50 }}>
                    <View style={{ backgroundColor: 'red', width: '90%', height: 50, borderRadius: 20, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ textAlign: 'center', fontSize: 15, color: 'white', fontFamily: 'MetroBold', letterSpacing: 1 }}>
                            SEND
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
            {message ? <Text style={{ textAlign: 'center', color: 'red', marginTop: 20 }}>{message}</Text> : null}
        </ScrollView>
    );
};

export default ForgotPasswordPage;
