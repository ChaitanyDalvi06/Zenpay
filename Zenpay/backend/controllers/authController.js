// import User from '../models/User.js';
// import bcrypt from 'bcrypt';
// import jwt from 'jsonwebtoken';
// import admin from 'firebase-admin';
// import serviceAccountKey from '../serviceAccountKey.cjs';

// // Initialize Firebase Admin SDK
// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccountKey),
//   databaseURL: 'https://slice-authh.firebaseio.com',
// });

// // Function to create a Firebase user
// const createFirebaseUser = async (email, password) => {
//   try {
//     const user = await admin.auth().createUser({
//       email,
//       password,
//     });
//     return user;
//   } catch (error) {
//     console.error('Error creating Firebase user:', error);
//     throw new Error('Error creating Firebase user');
//   }
// };

// // Function to validate if a user exists in Firebase by email
// const validateUserData = async (email) => {
//   try {
//     const user = await admin.auth().getUserByEmail(email);
//     return user;
//   } catch (error) {
//     return null; // Return null if user doesn't exist in Firebase
//   }
// };

// // Function to hash a password
// const hashPassword = async (password) => {
//   try {
//     const salt = await bcrypt.genSalt(10); // You can adjust the rounds for more security
//     return await bcrypt.hash(password, salt);
//   } catch (error) {
//     throw new Error("Error hashing password: " + error.message);
//   }
// };

// // Function to create a JWT token
// const createToken = (userId) => {
//   return jwt.sign({ userId }, 'your_jwt_secret', { expiresIn: '1h' });
// };

// // Sign up controller
// export const signup = async (req, res) => {
//   const { name, email, password } = req.body;

//   try {
//     // Check if the user already exists in MongoDB
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ error: 'Email already in use' });
//     }

//     // Check if user exists in Firebase
//     const firebaseUser = await validateUserData(email);
//     if (firebaseUser) {
//       return res.status(400).json({ error: 'Email already in use in Firebase' });
//     }

//     // Create user in Firebase
//     const firebaseCreatedUser = await createFirebaseUser(email, password);

//     // Hash the password before saving to MongoDB
//     const hashedPassword = await hashPassword(password);
    
//     // Save user to MongoDB with Firebase UID
//     const newUser = new User({ 
//       uid: firebaseCreatedUser.uid, 
//       name, 
//       email, 
//       password: hashedPassword 
//     });

//     await newUser.save();

//     // Generate JWT token
//     const token = createToken(newUser._id);
    
//     res.status(201).json({ success: true, token });
//   } catch (error) {
//     console.error('Server error:', error);
//     res.status(500).json({ error: 'Server error' });
//   }
// };

// // Login controller
// export const login = async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(400).json({ error: 'Invalid credentials' });
//     }

//     const isPasswordValid = await bcrypt.compare(password, user.password);
//     if (!isPasswordValid) {
//       return res.status(400).json({ error: 'Invalid credentials' });
//     }

//     const token = createToken(user._id);
//     res.status(200).json({ token });
//   } catch (error) {
//     console.error('Server error:', error);
//     res.status(500).json({ error: 'Server error' });
//   }
// };

// // Profile creation controller
// import Profile from '../models/UserProfile.js';

// export const createProfile = async (req, res) => {
//   const { firstName, lastName, age, mobileNumber, occupation, monthlyIncome, monthlyExpenses, aadharCardNumber, email, password } = req.body;

//   try {
//     // Check if the user already exists in Firebase
//     const firebaseUser = await validateUserData(email);
//     if (firebaseUser) {
//       return res.status(400).json({ error: 'Email already exists in Firebase' });
//     }

//     // Create Firebase user if not exists
//     const firebaseCreatedUser = await createFirebaseUser(email, password);

//     // Hash the password before saving to MongoDB
//     const hashedPassword = await hashPassword(password);
    
//     // Save the user in MongoDB with Firebase UID
//     const newUser = new User({ 
//       uid: firebaseCreatedUser.uid, 
//       name: firstName + ' ' + lastName, 
//       email, 
//       password: hashedPassword 
//     });

//     const savedUser = await newUser.save();

//     // Create and save the user's profile
//     const newProfile = new Profile({
//       firstName,
//       lastName,
//       age,
//       mobileNumber,
//       occupation,
//       monthlyIncome,
//       monthlyExpenses,
//       aadharCardNumber,
//     });

//     const savedProfile = await newProfile.save();

//     // Generate JWT token for the new user
//     const token = createToken(savedUser._id);

//     res.status(201).json({ success: true, token, profile: savedProfile });
//   } catch (error) {
//     console.error('Error creating profile:', error);
//     res.status(500).json({ message: 'Error creating profile', error: error.message });
//   }
// };
import User from '../models/User.js';
import Profile from '../models/UserProfile.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import admin from 'firebase-admin';
import serviceAccountKey from '../serviceAccountKey.cjs';

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccountKey),
  databaseURL: 'https://slice-authh.firebaseio.com',
});

// Helper Functions
const createFirebaseUser = async (email, password) => {
  try {
    const user = await admin.auth().createUser({
      email,
      password,
    });
    return user;
  } catch (error) {
    console.error('Error creating Firebase user:', error);
    throw new Error('Error creating Firebase user');
  }
};

const hashPassword = async (password) => {
  try {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
  } catch (error) {
    throw new Error("Error hashing password: " + error.message);
  }
};

const createToken = (userId) => {
  return jwt.sign({ userId }, 'your_jwt_secret', { expiresIn: '1h' });
};

// Signup Controller
export const signup = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'Email already in use' });
    }

    const firebaseCreatedUser = await createFirebaseUser(email, password);
    const hashedPassword = await hashPassword(password);

    const newUser = new User({
      uid: firebaseCreatedUser.uid,
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    const token = createToken(newUser._id);

    res.status(201).json({ success: true, message: 'User signed up successfully.', token });
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

// Login Controller
export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if the user exists in MongoDB
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: 'Invalid email or password' });
    }

    // Verify the password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ error: 'Invalid email or password' });
    }

    // Generate JWT token
    const token = createToken(user._id);

    // Return the token and user info
    res.status(200).json({ 
      success: true, 
      message: 'Login successful', 
      token, 
      user: { 
        id: user._id, 
        name: user.name, 
        email: user.email 
      } 
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


// Profile Creation Controller
export const createProfile = async (req, res) => {
  try {
    // Assuming you are checking if the profile already exists by user ID or another field.


    // Create a new profile if no existing profile is found
    const newProfile = new Profile(req.body);
    await newProfile.save();

    return res.status(201).json(newProfile);
  } catch (error) {
    console.error('Error creating profile:', error);
    return res.status(500).json({ message: 'Error creating profile', error: error.message });
  }
};
