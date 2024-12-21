// models/UserProfile.js

import mongoose from 'mongoose';

// Define the user profile schema
const userProfileSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    age: { type: Number, required: true, min: 18 },
    mobileNumber: { type: String, required: true, match: /^[6-9]\d{9}$/ }, // Validates Indian mobile numbers
    occupation: { 
        type: String, 
        enum: ['Student', 'Job holder', 'Business professional'], 
        required: true 
    },
    monthlyIncome: { type: Number, required: true, min: 0 },
    monthlyExpenses: { type: Number, required: true, min: 0 },
    monthlySavings: { type: Number, default: 0 }, // Auto-calculated on the frontend
    aadharCardNumber: { 
        type: [String], 
        validate: {
            validator: function(v) {
                return Array.isArray(v) && v.length === 12 && v.every((digit) => /^\d$/.test(digit));
            },
            message: 'Aadhar Card Number must contain 12 numeric digits.'
        },
        required: true,
    },
});

// Create and export the model
const Profile = mongoose.model('profiles', userProfileSchema);

export default Profile;
