// Connect all reducers and add middleware here
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
import { productCreateReducer, productDeleteReducer, productListReducer, productSearchReducer } from './reducers/products/productReducer'
import { currentProductDetailsReducer, productDetailsReducer } from './reducers/products/productDetailsReducer'
import {cartReducer } from './reducers/cart/cartReducer'
import { showLoginFormReducer, showSignupFormReducer } from './reducers/cart/showLoginFormReducer';
import {
  userRegisterReducer, setEmailReducer, setPasswordReducer,
  userLoginReducer, setUserNameReducer, userDetailsReducer,
  user_isLoggedReducer, userUpdateProfileReducer, setReducer, getAllDetailsReducer, userDeleteReducer, setUserImageReducer, userImageReducer
} from './reducers/user/userReducers'
import {
  createOrderReducer, orderListMyReducer
} from './reducers/orders/orderReducers'
import {
  emailErrorReducer, invalidUserNamePasswordErrorReducer,
  passwordErrorReducer, usernameErrorReducer
} from './reducers/Forms/FormReducer'
import {
  createProductImageReducer,
  productBrandErrorReducer, productCategoryErrorReducer, productColorErrorReducer, productDescriptionErrorReducer, productDropLocationErrorReducer, productImageAltErrorReducer, productImageErrorReducer, productNameErrorReducer, productPickupTimeErrorReducer, productSizeErrorReducer, setProductBrandReducer, setProductCategoryReducer, setProductColorReducer, setProductDescriptionReducer, setProductDropLocationReducer, setProductImageAltReducer, setProductImageReducer, setProductNameReducer, setProductPickupTimeReducer, setProductSizeReducer, setProductUploadSuccessReducer
} from './reducers/products/productUploadReducer';
import { s3UploadImageReducer } from './reducers/S3/S3';

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  shouldShowLoginForm: showLoginFormReducer,
  shouldShowSignupForm: showSignupFormReducer,
  userName: setUserNameReducer,
  userLogin: userLoginReducer,
  userLogged: user_isLoggedReducer,
  allUsers: getAllDetailsReducer,
  userDelete: userDeleteReducer,
  productDelete: productDeleteReducer,
  productCreate: productCreateReducer,
  email: setReducer,
  password: setPasswordReducer,
  userImage: setUserImageReducer,
  s3Image: s3UploadImageReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  currentProduct: currentProductDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  passwordError: passwordErrorReducer,
  emailError: emailErrorReducer,
  usernameError: usernameErrorReducer,
  invalidUserNamePassword: invalidUserNamePasswordErrorReducer,
  orderCreate: createOrderReducer,
  orderListMy: orderListMyReducer,
  createProductImage: createProductImageReducer,
  productName: setProductNameReducer,
  productBrand: setProductBrandReducer,
  productColor: setProductColorReducer,
  productCategory: setProductCategoryReducer,
  productDescription: setProductDescriptionReducer,
  productDropLocation: setProductDropLocationReducer,
  productImage: setProductImageReducer,
  productImageAlt: setProductImageAltReducer,
  productPickupTime: setProductPickupTimeReducer,
  productSize: setProductSizeReducer,
  productNameError: productNameErrorReducer,
  productCategoryError: productCategoryErrorReducer,
  productColorError: productColorErrorReducer,
  productBrandError: productBrandErrorReducer,
  productDescriptionError: productDescriptionErrorReducer,
  productDropLocationError: productDropLocationErrorReducer,
  productImageError: productImageErrorReducer,
  productImageAltError: productImageAltErrorReducer,
  productPickupTimeError: productPickupTimeErrorReducer,
  productSizeError: productSizeErrorReducer,
  productUploadSuccess: setProductUploadSuccessReducer,
  productSearch: productSearchReducer
})

const cartItemsFromStorage = [{}]
const orderItemsFromStorage = [{}]
const currentProductFromStorage = [{}]
const userInfoFromStorage = [{}]
const loginInfoFromStorage = ''
const allUsersInfoFromStorage = [{}]
const userImageInfoFromStorage = [{}]

if (typeof window !== 'undefined') {
  // Perform localStorage action
  cartItemsFromStorage = localStorage.getItem('cartItems')
    ? JSON.parse(localStorage.getItem('cartItems'))
    : []
}

if (typeof window !== 'undefined') {
  // Perform localStorage action
  orderItemsFromStorage = localStorage.getItem('orderItems')
    ? JSON.parse(localStorage.getItem('orderItems'))
    : []
}

if (typeof window !== 'undefined') {
  // Perform localStorage action
  currentProductFromStorage = localStorage.getItem('currentProductView')
    ? JSON.parse(localStorage.getItem('currentProductView'))
    : []
}

if (typeof window !== 'undefined') {
  // Perform localStorage action
  loginInfoFromStorage = localStorage.getItem('isUserLogged')
    ? JSON.parse(localStorage.getItem('isUserLogged'))
    : false
}
//allUsersInfo
if (typeof window !== 'undefined') {
  // Perform localStorage action
  allUsersInfoFromStorage = localStorage.getItem('allUsersInfo')
    ? JSON.parse(localStorage.getItem('allUsersInfo'))
    : []
}
if (typeof window !== 'undefined') {
  // Perform localStorage action
  userInfoFromStorage = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : []
}//

if (typeof window !== 'undefined') {
  // Perform localStorage action
  userImageInfoFromStorage = localStorage.getItem('userImageInfo')
    ? JSON.parse(localStorage.getItem('userImageInfo'))
    : []
}

const initialState = {
  cart: {    
    cartItems: cartItemsFromStorage
  },
  shouldShowLoginForm: false,
  shouldShowSignupForm: false,
  userLogin: {
    loading: false,
    userInfo: userInfoFromStorage,
    isAdmin: false
  },
  userLogged: loginInfoFromStorage,
  currentProduct: currentProductFromStorage,
  orderCreate: orderItemsFromStorage,
  orderListMy: {
    loading: true,
    success: false
  },
  userUpdateProfile: {
    loading: false,
    success: false,
    userInfo: {},
    error:{}
  },
  passwordError: false,
  emailError: false,
  usernameError: false,
  userImage: {
    loading: false,
    imageUrl: '',
    success: false
  },
  invalidUserNamePassword: false,
  productNameError: false,
  productCategoryError: false,
  productColorError: false,
  productBrandError: false,
  productDescriptionError: false,
  productDropLocationError: false,
  productImageError: false,
  productImageAltError: false,
  productPickupTimeError: false,
  productSizeError: false,
  allUsers: {
    loading: true,
    users: allUsersInfoFromStorage,
    error: {}
  },
  userDelete: {
    loading: false,
    success: false
  },
  productDelete: {
    loading: false,
    success: false
  },
  productColor: {
    success: false
  },
  productImage: {
    success: false
  },
  productName: {
    success: false
  },
  productDescription: {
    success: false
  },
  productDropLocation: {
    success: false
  },
  productBrand: {
    success: false
  },
  productImageAlt: {
    success: false
  },
  cart: {
    loading: true,
    isCartEmpty: true,
    cartItems: []
  },
  productUploadSuccess: {
    success: false
  },
  productDetails: {
    loading: true
  },
  productSearch: '',
  productList: {loading:true, products: []}
}

const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store;