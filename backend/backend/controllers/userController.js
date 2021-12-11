import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js'
import generateToken from '../utils/generateToken.js'
import multer from 'multer'
import { uploadFileToS3 } from '../s3.js';

// @desc Auth user and get token
// @route POST /api/users/login
// @access  public
const authUser = asyncHandler( async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email })
  
  if (user && (await user.matchPassword(password))) {

    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      image: user.image,
      token: generateToken(user._id)
    })
  } else {
    res.status(401)
    throw new Error('Invalid Username and Password')
  }
})

// @desc Register a user
// @route POST /api/users
// @access  public
const registerUser = asyncHandler( async (req, res) => {
  const { name, email, password } = req.body;
  const image = 'https://hope-product-profile-images.s3.ap-southeast-1.amazonaws.com/userprofileplaceholder.jpg';
  const userExists = await User.findOne({ email })

  if (userExists) {
    res.status(400)
    throw new Error('User Exists')
  }

  const user = await User.create({
    name,
    email,
    password,
    image
  })
//s3setup - aws user name
  if (user) {
    res.status(201)
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      image: user.image,
      isAdmin: user.isAdmin,
      token: generateToken(user._id)
    })
  } else {
    res.status(400)
    throw new Error('Invalid user data')
  }
  
})

// @desc Get User Profile
// @route GET /api/users/profile
// @access  private
const getUserProfile = asyncHandler( async (req, res) => {
  // console.log('this function is being called', req)
  const user = await User.findById(req.user._id)
// const { email } = req.body;
  // console.log('This is at Server', email, password)
//   const user = await await User.findOne({ email })
  // const user1 = await User.find()
  // console.log('will it print all users?', user1)
  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      image: user.image,
      isAdmin: user.isAdmin,      
    })
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})

// @desc Update User Profile
// @route PUT /api/users/profile
// @access  private
const updateUserProfile = asyncHandler( async (req, res) => {
  const user = await User.findById(req.body.id)
  
  if (user) {
    user.name = req.body.name || user.name
    user.email = req.body.email || user.email
  
    const { password } = req.body.password
      // console.log('does it have password', req.body)
    if (req.body.password) {
      // console.log('does it have password1', password)
      user.password = req.body.password   
    }
    

    const UpdatedUser = await user.save();
    // console.log('fetch?', user)

    res.json({
      _id: UpdatedUser._id,
      name: UpdatedUser.name,
      email: UpdatedUser.email,
      isAdmin: UpdatedUser.isAdmin,
      token: generateToken(UpdatedUser._id)
    })
    
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})

// @desc Update User Profile Image
// @route PUT /api/users/profile/images
// @access  private
const updateUserProfileImage = asyncHandler(async (req, res) => {
  
  // console.log('Header insider the profile Image update', req)
  

  const user = await User.findById(req.user._id)
  if (user) {
    // console.log('User info able to fetch')
    const result = await uploadFileToS3(req.file)
    // console.log('S3 info able to fetch1', result)

    if (result) {
      user.image = result.Location
      
      const UpdatedUser = await user.save();
      const updatedUserWithToken = {
      _id: UpdatedUser._id,
      name: UpdatedUser.name,
      email: UpdatedUser.email,
      isAdmin: UpdatedUser.isAdmin,
      image: UpdatedUser.image,
      token: generateToken(UpdatedUser._id)
      }
      // console.log('sample', updatedUserWithToken)
      if (UpdatedUser) {
        // console.log('S3 info able to fetch', UpdatedUser)
        res.send(updatedUserWithToken)
    //     res.json({
    //       _id: UpdatedUser._id,
    //       name: UpdatedUser.name,
    //       email: UpdatedUser.email,
    //       image: updateUser.image,
    //       isAdmin: UpdatedUser.isAdmin,
    //       token: generateToken(UpdatedUser._id)
    // })
      } else {
        res.status(500)
        throw new Error('Failed at saving to database')
      }
    } else {
      res.status(500)
      throw new Error('Unable to upload image')
    }
    
  } else {
    res.status(404)
    throw new Error('Unable to find User')
  }  
})

// @desc Get All Users
// @route GET /api/users
// @access  private
const getUsers = asyncHandler( async (req, res) => {

  const users = await User.find()
  if (users) {
    res.json({
      users     
    })
  } else {
    res.status(404)
    throw new Error('No Users found')
  }
})

// @desc Delete user
// @route DELETE /api/users/:id
// @access  private/admin
const deleteUserById = asyncHandler( async (req, res) => {

  const user = await User.findById(req.body.userId)
  if (user) {
    await user.remove()
     const users = await User.find()
    res.json({
      users,
      message: 'User Removed'
    })
  } else {
    res.status(404)
    throw new Error('User not found')
  }

})

export {authUser, getUserProfile, registerUser, updateUserProfile, updateUserProfileImage, getUsers, deleteUserById}