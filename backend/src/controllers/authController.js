const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

const generateToken = (user) => {
    return jwt.sign({ id: user._id, username: user.username }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

const signup = async (req, res) => {
    console.log('Signup request received:', req.body);
    const { username, email, password } = req.body;
    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            console.log('User already exists:', email);
            return res.status(400).json({ message: 'User already exists' });
        }
        const hashedPassword = await bcrypt.hash(password, 12);
        console.log('Password hashed:', hashedPassword);
        const user = new User({ username, email, password: hashedPassword });
        await user.save();
        console.log('User saved:', user);
        const token = generateToken(user);
        res.status(201).json({ token });
    } catch (err) {
        console.error('Error during signup:', err);
        res.status(500).json({ message: 'Something went wrong' });
    }
};

const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if (!isPasswordCorrect) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }
        const token = generateToken(user);
        res.status(200).json({ token });
    } catch (err) {
        console.error('Error during login:', err);
        res.status(500).json({ message: 'Something went wrong' });
    }
};

const forgotPassword = async (req, res) => {
    const { email } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        // Generate reset token and send email logic here
        res.status(200).json({ message: 'Reset email sent' });
    } catch (err) {
        console.error('Error during forgot password:', err);
        res.status(500).json({ message: 'Something went wrong' });
    }
};

module.exports = { signup, login, forgotPassword };
