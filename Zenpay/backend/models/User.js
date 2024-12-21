import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true,unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  // Add more fields as needed
});

const User = mongoose.model('users', userSchema);

export default User;