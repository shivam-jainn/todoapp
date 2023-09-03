const express = require('express');
const { User } = require('../model');

const auth_router = express.Router();


auth_router.post('/signup', async (req, res) => {
    try {
      const { username, password } = req.body;
  
      // Check if user already exists
      const existingUser = await User.findOne({ username });
      if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
      }
  
      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Create a new user
      const newUser = new User({
        username,
        password: hashedPassword
      });
      await newUser.save();
  
      return res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
      return res.status(500).json({ message: 'Error creating user' });
    }
  });

auth_router.post('/signin', async (req, res) => {
    try {
      const { username, password } = req.body;
  
      // Find user by username
      const user = await User.findOne({ username });
      if (!user) {
        return res.status(401).json({ message: 'Invalid username or password' });
      }
  
      // Compare passwords
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
        return res.status(401).json({ message: 'Invalid username or password' });
      }
  
      // Create a JWT token
      const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: '1h' });
  
      return res.json({ token });
    } catch (error) {
      return res.status(500).json({ message: 'Error logging in' });
    }
  });