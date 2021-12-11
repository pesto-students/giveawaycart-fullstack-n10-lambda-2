import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = mongoose.Schema({

  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true //to ensure unique address and no duplicate users
  },
  password: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true,
    default: 'https://hope-product-profile-images.s3.ap-southeast-1.amazonaws.com/4d31c9cc8e43fcb616f2077af772ef63'
  },
  
  isAdmin: {
    type: Boolean,
    required: true,
    default: false // By default all users are not admin, only and admin can make another user as admin
  },

}, {
  timestamps: true
});

userSchema.methods.matchPassword = async function (enteredPassword){
  return await bcrypt.compare(enteredPassword, this.password);
}

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next()
  }

  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
})

// create a model in mongodb called User using userSchema
const User = mongoose.model('User', userSchema);

export default User;