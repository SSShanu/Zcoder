// controllers/authController.js
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
require('dotenv').config()

const signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res.status(400).send({ message: 'Username, email, and password are required' });
    }
    const user = new User({ username, email, password });
    await user.save();
    res.status(201).send({ message: 'User created successfully' });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).send({ message: 'Email and password are required' });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).send({ message: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).send({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ userId: user._id },"secret-hello-world", { expiresIn: '1h' });
    res.status(200).send({ token });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = { signup, login };
