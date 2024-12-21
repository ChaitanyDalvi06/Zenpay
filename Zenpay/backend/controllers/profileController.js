// profileRoutes.js (Backend Route Example)
import express from 'express';
import Profile from '../models/UserProfile.js';

const router = express.Router();

router.post('/profile', async (req, res) => {
  const {
    firstName, lastName, age, mobileNumber, occupation, monthlyIncome,
    monthlyExpenses, aadharCardNumber,
  } = req.body;

  try {
    // Create a new profile
    const newProfile = new Profile({
      firstName,
      lastName,
      age,
      mobileNumber,
      occupation,
      monthlyIncome,
      monthlyExpenses,
      aadharCardNumber,
    });

    const savedProfile = await newProfile.save();
    res.status(201).json({ success: true, message: 'Profile created successfully', profile: savedProfile });
  } catch (error) {
    console.error('Error creating profile:', error);
    res.status(500).json({ error: 'Error creating profile' });
  }
});

export default router;
