import express from 'express'
import { authUser, getUserProfile, getUsers, registerUser, updateUserProfile, deleteUserById, updateUserProfileImage } from '../controllers/userController.js'
import { protect } from '../middleware/authMiddleware.js';
import multer from 'multer'

const router = express.Router()
const upload =  multer({dest: 'uploads/'})

router.route('/').post(registerUser)
router.post('/login', authUser)
router
  .route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);
///api/users/profile/images
router.route('/profile/images')
  .put(protect, upload.single("file"), updateUserProfileImage)

router.route('/').get(getUsers)

router.route('/deleteUser').delete(protect, deleteUserById)
export default router