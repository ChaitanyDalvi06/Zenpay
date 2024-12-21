import express from 'express';
import { signup, login, createProfile } from '../controllers/authController.js';
const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.post('/profile', createProfile);


// middleware/authMiddleware.js
import jwt from 'jsonwebtoken';
import User from '../models/User.js'; // User model for authentication

export const protect = async (req, res, next) => {
    let token;
    
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(' ')[1];

            const decoded = jwt.verify(token, 'secretKey'); // Use your secret key here
            req.user = await User.findById(decoded.userId).select('-password'); // Exclude password from the user info
            
            next();
        } catch (error) {
            console.error(error);
            res.status(401).json({ error: 'Not authorized, token failed' });
        }
    }

    if (!token) {
        res.status(401).json({ error: 'Not authorized, no token' });
    }
};

export default router;