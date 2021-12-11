import express from 'express'
import { protect } from '../middleware/authMiddleware.js';
import { createOrder, getMyOrders } from '../controllers/orderController.js';

const router = express.Router()

router.route('/').post(protect, createOrder)
router.route('/myorders').get(protect, getMyOrders)

export default router