import mongoose from 'mongoose';

const orderSchema = mongoose.Schema({

  user: {
    type: mongoose.Schema.Types.ObjectId, // which user created which product
    required: true,
    ref: 'User' 
  },
  orderItems: [
    {
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
    brand: {
      type: String,
      required: true
      },
    color: {
      type: String,
      required: true
      },
    size: {
      type: String,
      required: true
      },
    pickupTime: {
      type: String,
      required: true
      },
    dropLocation: {
      type: String,
      required: true
    },
    }    
  ],   
});

// create a model in mongodb called User using userSchema
const Order = mongoose.model('Order', orderSchema);

export default Order;