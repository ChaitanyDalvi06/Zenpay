import express from 'express';
import Profile from '../models/Profile.js';
import Profile from '../models/UserProfile.js';
const router = express.Router();

// Create or update user profile
router.post('/', async (req, res) => {
  try {
    const { userId, ...profileData } = req.body;
    const profile = await Profile.findOneAndUpdate(
      { userId },
      { ...profileData },
      { new: true, upsert: true }
    );
    res.status(201).json(profile);
  } catch (error) {
    res.status(500).json({ error: 'Error saving profile' });
  }
});


router.post('/profile', async (req, res) => {
  const {
    firstName, lastName, age, mobileNumber, occupation, monthlyIncome,
    monthlyExpenses, aadharCardNumber,
  } = req.body;

  try {
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
    res.status(500).json({ error: 'Error creating profile', details: error.message });
  }
  
});

export default router;
