import asyncHandler from 'express-async-handler';
import Order from '../models/orderModel.js'
import Product from '../models/productModel.js'

const updateProductVisibility = async (id) => {
  const product = await Product.findById(id)
    console.log('which product is it', product)

    if (product) {
      product.isVisible = false
    }
  const UpdatedProduct = await product.save();
   console.log('updated product', UpdatedProduct)
  return UpdatedProduct;
}

const updateProduct = async (orderItems) => {
  return Promise.all(
    orderItems.map(products => updateProductVisibility(products._id))
)
}


// @desc Create New Order
// @route POST /api/orders
// @access  private
const createOrder = asyncHandler(async (req, res) => {
  const { order, userId, isDelivered } = req.body;
  const orderItems = order;
  if (orderItems && orderItems.length === 0) {
    res.status(400);
    throw new Error('No Order Items')
    return
  } else {
    const orders = new Order({
      user: req.body.userId,
      orderItems,      
    })
  const createdOrder = await orders.save();
    res.status(201)
    console.log('am i in the correct file',createdOrder)
    if (createdOrder) {
      const res = await updateProduct(orderItems)
    }
    res.json(createdOrder);
  }
  
})

// @desc get the order of the logged in users
// @route GET /api/orders/myorders
// @access  private
const getMyOrders = asyncHandler(async (req, res) => {
  
  const orders = await Order.find({ user: req.user._id})

  res.json(orders)
 
})

export {createOrder, getMyOrders}