// validate the token

import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'

// this is a middleware function so you need next parameter
const protect = asyncHandler( async (req, res, next) => {

  let token
  //console.log('what do we get in headers ',req.headers)
  // token will be passed in headers
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      token = req.headers.authorization.split(' ')[1]
      const decoded = jwt.verify(token, process.env.JWT_SECRET)
      req.user = await User.findById(decoded.id).select('-password')
      // console.log('is Authentication Successful', req.user)
      next()
    } catch (error) {
      //console.error(error)
      res.status(401)
      throw new Error('Not Authorized, token failed')
    }
  }

  if (!token) {
    res.status(401)
    throw new Error('Not Authorized, no token');
  }

})

export { protect }