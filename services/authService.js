import axios from 'axios';

const API_URL = 'http://localhost:3000/api/auth/';

const signup = (username, email, password) => {
    console.log('Sending signup request', { username, email, password }); // Tambahkan logging
    return axios.post(API_URL + 'signup', {
        username,
        email,
        password
    }).then(response => {
        return response.data;
    }).catch(error => {
        console.error('Signup error:', error.response ? error.response.data : error.message); // Tambahkan logging
        throw error;
    });
};

const login = (email, password) => {
    return axios.post(API_URL + 'login', {
        email,
        password
    }).then(response => {
        if (response.data.token) {
            localStorage.setItem('user', JSON.stringify(response.data));
        }
        return response.data;
    });
};

const forgotPassword = (email) => {
    return axios.post(API_URL + 'forgot-password', {
        email
    });
};

export default { signup, login, forgotPassword };
