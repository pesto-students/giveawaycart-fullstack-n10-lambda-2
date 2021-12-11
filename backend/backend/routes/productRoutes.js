import express from 'express'
import { getProducts, getProductById, deleteProductById, createProduct, uploadProductImageToS3 } from '../controllers/productControllers.js'
import { protect } from '../middleware/authMiddleware.js';
import multer from 'multer'

const router = express.Router()
const upload = multer({ dest: 'uploads/' })

// @desc Fetch all products
// @route GET /api/products
// @access  public
router.route('/').get(getProducts)
console.log('Yes')
router.route('/').post(createProduct)
router.route('/images').post( upload.single("file"),uploadProductImageToS3)
console.log('No')

// @desc Fetch single product
// @route GET /api/products/:id
// @access  public
console.log('it comes here')
router.route('/:id').get(getProductById)
console.log('it comes here but not here')

router.route('/:id').delete(protect, deleteProductById)
export default router;