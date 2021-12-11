import asyncHandler from 'express-async-handler';
import Product from '../models/productModel.js'
import { uploadFileToS3 } from '../s3.js';

// @desc Fetch all products
// @route GET /api/products
// @access  public
const getProducts = asyncHandler( async (req, res) => {
  //All mongoose methods return a promise - either use then or await
  // console.log('product req comes?')

  console.log('keyword search', req.query)
  const keyword = req.query.keyword ? {
    name: {
      $regex: req.query.keyword,
      $options: 'i'
    }
  } : {}
  console.log('the keyword is', keyword)
  const products = await Product.find({...keyword}); //{} will get all the objects
  console.log('products list', products)
  res.json(products)
})

// @desc Create Product
// @route PUT /api/product
// @access  private/admin
const createProduct = asyncHandler( async (req, res) => {
  // console.log('Create Product is ready', req.body)
  
  const product = new Product(req.body)
  // console.log('the product object to be created is: ',product)
  const createdProduct = await product.save()
  // console.log('the created product object is: ',createdProduct)
  res.status(201)
  res.json([
    { status: 201 },
    createdProduct
  ])

})

const uploadProductImageToS3 = asyncHandler(async (req, res) => {
//  console.log('S3 Product upload function ready', req)
  
  const result = await uploadFileToS3(req.file)
  // console.log('S3 info able to fetch1', result)
  res.send(result)
})

// @desc Fetch single product
// @route GET /api/products/:id
// @access  public
const getProductById = asyncHandler( async (req, res) => {
  const product = await Product.findById(req.params.id)
  console.log('Product details fetch at server level', req)
  if (product) {    
    res.json(product)    
  } else {
    res.status(404);
    throw new Error('Product not found');
  }
})

// @desc Delete product
// @route DELETE /api/products/:id
// @access  private/admin
const deleteProductById = asyncHandler( async (req, res) => {
  // console.log('Delete product Backend - checking req body', req.body)
  const product = await Product.findById(req.body.productId)
  // console.log('Able to locate the product to be delete?', product)
  if (product) {
    await product.remove()
     const products = await Product.find()
    res.json({
      products,
      message: 'Product Removed'
    })
  } else {
    res.status(404)
    throw new Error('Product not found')
  }

})

export {
  getProducts,
  getProductById,
  deleteProductById,
  createProduct,
  uploadProductImageToS3
}