import mongoose from 'mongoose';

const profileSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'users', required: true },
  // Add other profile fields here
});

const Profile = mongoose.model('profiles', profileSchema);

export default Profile;