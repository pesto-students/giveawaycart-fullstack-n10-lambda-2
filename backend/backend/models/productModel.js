import mongoose from 'mongoose';

const productSchema = mongoose.Schema({

  user: {
    type: mongoose.Schema.Types.ObjectId, // which user created which product
    required: true,
    ref: 'User' // ref specific model to this ObjectId
  },
  name: {
    type: String,
    required: true
  },
  imageSrc: {
    type: String,
    required: true
  },
  imageAlt: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required: true
  },
  sizes: [
    {
      name: {
        type: String,
        required: true
      },    
      inStock: {
        type: Boolean,
        required: true,
        default: false
      },    
      isSelected: {
        type: Boolean,
        required: true,
        default: false
      }
    },
  ] ,
  category: {
    type: String,
    required: true
  },
  review: {
    type: String,
    required: false
  },
  brand: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  isVisible: {
        type: Boolean,
        required: true,
        default: true
  },
  rating: {
    type: Number,
    required: false,
    default: 0
  },
  comment: {
    type: String,
    required: false
  },
  pickupTime: {
    type: String,
    required: true
  },
  dropLocation: {
    type: String,
    required: true
  }

})

const Product = mongoose.model('Product', productSchema);

export default Product