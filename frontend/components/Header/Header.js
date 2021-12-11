import { Fragment, useEffect } from 'react'
import { Menu, Popover, Transition } from '@headlessui/react'

import { BellIcon, MenuIcon, ShoppingCartIcon, XIcon } from '@heroicons/react/outline'
import Link from 'next/link';
import Login from '../Forms/Login/LoginButton';
import Signup from '../Forms/Signup/Signup';
import { useDispatch, useSelector } from 'react-redux';
import { clearEmail, clearPassword, clearUserName, getUserDetails, logout } from '../../redux/actions/userActions';
import { clear400Errors } from '../../redux/actions/FormActions';
import { listMyOrders } from '../../redux/actions/orderActions';
import Search from './Search';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
const Header = () => {

  const userLogin =  useSelector(state => state.userLogin)
  const cart = useSelector(state => state.cart);
  const userLogged = useSelector(state => state.userLogged);
  const productSearch = useSelector(state => state.productSearch)
  const {cartItems} = cart
  var { userInfo } = userLogin
  const dispatch = useDispatch()

  useEffect(() => {
    
    const getData = async () => {
      const res = await dispatch(getUserDetails('profile'))
      
    }


    getData();
  },[userInfo, userLogged])
 

  const signOut = async () => {
    await dispatch(clearEmail(''))
    await dispatch(clearPassword(''))    
    await dispatch(logout())    
  }

  

  
  
  return (
    <div className="">
      {/* When the mobile menu is open, add `overflow-hidden` to the `body` element to prevent double scrollbars */}
      <Popover
        as="header"
        className={({ isopen }) =>
          classNames(
            isopen ? 'fixed inset-0 z-40 overflow-y-auto' : '',
            'bg-header  shadow-sm lg:static lg:overflow-y-visible'
          )
        }
      >
        {({ isopen }) => (
          <>
            <div className="bg-green-700  ">
              <div className="max-w-7xl mx-auto">
              <div className=" max-w-8xl h-7  
                lg:divide-y lg:divide-gray-700
              relative grid grid-cols-3 gap-2 px-2
              sm:grid-cols-5 sm:gap-2 sm:px-4 
              md:grid-cols-6 md:gap-2 md:h-10 
              lg:grid-cols-10 lg:gap-2 lg:h-10 
              xl:grid-cols-12 xl:gap-3 xl:h-10 xl:ml-4">
                <Link href="/contactus">
                <a className="col-start-1 col-span-2 flex gap-x-2 ml-4 group">                  
                    <div className=" text-white mt-1.5 group-hover:text-gray-300
                          xl:mt-1.5">
                      <svg 
                        className="h-4 w-4
                                  xl:h-6 xl:w-6
                                  md:h-6 md:w-6
                                  sm:h-5 sm:w-5 sm:mt-0.5 
                                  " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>                    
                    </div>
                      <div className=" group-hover:text-gray-300
                       text-white text-sm mt-1
                         xl:mt-1.5 xl:font-normal xl:text-xl
                         md:mt-1.5 md:font-normal md:text-xl
                         lg:mt-1.5 lg:font-normal lg:text-xl
                         sm:mt-0.5 sm:font-normal sm:text-lg
                         sm:py-0
                          ">
                      contact us
                    </div>                 
                 </a>
                 </Link>
                
                <Link href="/aboutus">
                  <a className="col-start-4 gap-x-2 
                                lg:col-start-9 lg:ml-16 lg:-mr-12
                                md:ml-19 md:-mr-14
                                sm:col-start-5
                                xl:col-start-11 xl:ml-11 xl:-mr-7">
                   <div className=" flex flex-row-reverse hover:text-gray-300 text-white text-sm mt-1 
                         xl:mt-0.5 xl:font-normal xl:text-lg
                         md:mt-0.5 md:font-normal md:text-lg md:flex-row-reverse
                         lg:mt-0.5 lg:font-normal lg:text-lg lg:flex-row
                         sm:mt-0.5 sm:font-normal sm:text-lg sm:flex-row
                         sm:py-0">
                    About us
                  </div> 
                  </a>
                </Link>

                <Link href="/faq">
                  <a className="col-start-6 gap-x-2
                                lg:col-start-10 lg:mx-14
                                xl:col-start-12 xl:mx-16">
                   <div className="flex flex-row-reverse hover:text-gray-300 text-white text-sm mt-1
                         xl:mt-0.5 xl:font-normal xl:text-lg xl:flex-row-reverse
                         md:mt-0.5 md:font-normal md:text-lg  md:mr-1
                         lg:mt-0.5 lg:font-normal lg:text-lg lg:flex-row
                         sm:mt-0.5 sm:font-normal sm:text-lg
                         sm:py-0">
                    FAQ
                  </div> 
                  </a>
                </Link>
                 
              </div>
              </div>
            </div>
            


            <div className="max-w-7xl mx-auto px-4 sm:px-6 sm:py-3 xl:py-1 lg:px-8">
              <div className="relative   flex justify-between xl:grid xl:grid-cols-12 lg:gap-8">
                <div className="flex cursor-pointer md:static md:left-0 md:inset-y-0  lg:static xl:col-span-2">
                  <div className="flex-shrink-0 flex flex-wrap items-center">
                    <Link href="/">
                      <a>
                        <img
                          className="block  h-10 w-auto text-white"
                          src="/Header/images/logo1.svg"
                        />
                      
                      </a>
                    </Link>
                  </div>
                </div>

                 <div className="hidden md:mt-2 md:flex md:max-w-7xl lg:col-start-4 lg:col-span-4 items-center">
                    
                    {/* Search Bar */}
                    <Search />
                  </div>
                
                <div className="flex items-center md:absolute md:right-0 md:inset-y-0 
                  md:hidden lg:hidden">
                  {/* Mobile menu button */}
                  <Popover.Button className="-mx-2 rounded-md p-2 inline-flex items-center justify-center text-gray-50 hover:bg-gray-100 hover:text-header focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-50">
                    <span className="sr-only">Open menu</span>
                    {isopen ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Popover.Button>
                </div>
                
                <div className="hidden md:flex md:items-center md:justify-end xl:col-span-5 xl:col-start-8">                 
                  {!userLogged && <Login />}
                  {!userLogged && <Signup />}
                  {userLogged && <div className="group">
                    <Link href="/orders/myorders">
                      <a>
                        <button
                          
                          className="bg-grey-light rounded-lg group-hover:bg-gray-50 font-bold py-2 px-4  inline-flex items-center" >
                          <svg className="h-7 w-7 md:h-8 md:w-8 group-hover:bg-gray-50 group-hover:text-header md:bg-header text-white " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                          </svg>
                          <span className="hidden lg:block group-hover:text-header lg:text-white ml-1">My Orders</span>
                        </button>
                      </a>
                    </Link>
                  </div>}
                  {userLogged && <div>
                    <Link href="/cart/Cart">
                    <a             
                      className="ml-5 group flex-shrink-0  rounded-full p-1 text-gray-400 hover:text-gray-500 "
                    >                                                
                      <button className="py-3.5 px-3.5 relative border-2 border-transparent text-gray-50 rounded-full hover:text-white  group-hover:bg-white focus:outline-none focus:text-gray-50 transition duration-150 ease-in-out" aria-label="Cart">
                        <svg className="h-6 w-6 group-hover:text-header" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                        </svg>
                        <span className="absolute  inset-0 object-right-top -mr-7 -mr-1 -mt-1">
                          <div className="inline-flex group-hover:text-header
                            items-center   rounded-full  text-sm font-semibold leading-4  text-white">
                            {!(cart.loading) && cartItems.length}
                          </div>
                        </span>
                      </button>
                    </a>
                    </Link>
                  </div>}
                  
                  {/* Profile dropdown */}
                  {userLogged && <Menu as="div" className="flex-shrink-0 relative ml-5">
                    <div>
                      <Menu.Button className="bg-white rounded-full flex focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-gray-50">
                        <span className="sr-only">Open user menu</span>
                        <img className="h-8 w-8 rounded-full" src={userInfo.image} alt="" />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      
                      <Menu.Items className="origin-top-right absolute z-10 right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1 focus:outline-none">
                      
                        <div className="hover:bg-gray-100 group border-2 bg-header">
                          <Link href="/userprofile/UserProfile">
                            <a>
                              <button
                                type="button"                          
                                className="block py-2 px-4 text-sm text-white group-hover:text-header  ">
                                Your Profile
                              </button>
                            </a>
                          </Link>
                        </div>
                        
                        <div className="hover:bg-gray-100 group border-2 bg-header">
                          <Link href="/product/ProductUpload">
                            <a>
                              <button
                                type="button"                          
                                className="block py-2 px-4 text-sm text-white    group-hover:text-header">
                                Share Clothes
                              </button>
                            </a>
                          </Link>
                        </div> 
                        
                        <div className="hover:bg-gray-100  group border-2 bg-header">
                        <Link href="/">
                          <a>
                            <button
                                type="button"
                                onClick={signOut}  
                              className="block py-2 px-4 text-sm  text-white group-hover:text-header  ">
                              Sign out
                            </button>
                          </a>
                        </Link>
                        </div>                        
                      </Menu.Items>                      
                    </Transition>
                  </Menu>}
                  
                  {(userLogged ? userInfo.isAdmin : false) &&
                    <Link href="/admin">
                      <a
                        
                        className="ml-6 inline-flex items-center px-4 py-2 border-2 font-sans tracking-wider text-sm font-bold rounded-md shadow-sm text-white bg-headerComplimentary hover:bg-white hover:text-header focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-header"
                      >
                        Admin Screen
                      </a>
                     </Link>
                  }
                </div>
              </div>
            </div>
                      
            <Popover.Panel as="nav" className="lg:hidden bg-red-100555555 border-1" aria-label="Global">
              {!userLogged &&
                <div className="border-t flex flex-col border-gray-200 pt-4 pb-3">
                <Login />
                <Signup />
                </div>
              }
                  
              {userLogged &&
                <div className="border-t border-gray-200 pt-4 pb-3">
                
                  <div className="max-w-3xl  px-4 flex items-center sm:px-1">
                    <div className="flex-shrink-0">
                      <img className="h-10 w-10 rounded-full" src={userInfo.image} alt="" />
                    </div>
                    <div className="ml-3 mb-2">
                      <div className="text-base font-medium text-gray-50">{userInfo.name}</div>
                      <div className="text-sm font-medium text-gray-50">{userInfo.email}</div>
                    </div>                  
                </div>
                {/* Search Bar */}
                <div className="hover:bg-gray-100 group border-2">
                  <Search />
                </div>
                <div className="hover:bg-gray-100 group border-2">
                  <Link href="/userprofile/UserProfile">
                    <a>
                    <button
                      type="button"                          
                      className="block py-2 px-4 text-sm group-hover:text-header text-gray-50 ">
                      Your Profile
                    </button>
                  </a>
                  </Link>
                </div>
                 <div className="hover:bg-gray-100 group border-2">
                  <Link href="/product/ProductUpload">
                    <a>
                    <button
                      type="button"                          
                    className="block py-2 px-4 text-sm text-gray-50 group-hover:text-header">
                      Share Clothes
                    </button>
                  </a>
                  </Link>
                </div>
                
                <div>
                  {(userLogged ? userInfo.isAdmin : false) &&
                    <Link href="/admin">
                    <a>
                    <button
                      type="button"                          
                    className="block py-2 px-4 text-sm text-gray-50 group-hover:text-header">
                      Admin Screen
                    </button>
                  </a>
                  </Link>
                  }
                </div>
                  
                  <div className="hover:bg-gray-100 group border-2">
                  <Link href="/">
                    <a>
                      <button
                          type="button"
                          onClick={signOut}  
                        className="block py-2 px-4 text-sm text-gray-50  group-hover:text-header">
                        Sign out
                      </button>
                    </a>
                  </Link>
                  </div>             
                </div>}
              
              <div className="flex ">
                {userLogged && <div className="border-b-2 border-t-1">
                      <Link href="/cart/Cart">
                      <a             
                        className="ml-0.5 group flex-shrink-0  rounded-full p-1 text-gray-400 hover:text-gray-500 "
                      >                                                
                        <button className="py-2.5 px-3.5 relative border-2 border-transparent text-gray-50 rounded-full hover:text-white  group-hover:bg-white focus:outline-none focus:text-gray-50 transition duration-150 ease-in-out" aria-label="Cart">
                          <svg className="h-6 w-6 group-hover:text-header" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                          </svg>
                          <span className="absolute  inset-0 object-right-top -mr-7 -mr-1 -mt-2">
                            <div className="inline-flex group-hover:text-header
                              items-center   rounded-full  text-sm font-semibold leading-4  text-white">
                              {!(cart.loading) && cartItems.length}
                            </div>
                          </span>
                        </button>
                      </a>
                      </Link>
                </div>}
                
                {userLogged &&
                  <div className="group ml-auto">
                  <Link href="/orders/myorders">
                    <a>
                      <button className="bg-grey-light rounded-lg group-hover:bg-gray-50 font-bold py-2 px-4  inline-flex items-center">
                        <svg className="h-7 w-7 group-hover:bg-gray-50 group-hover:text-header bg-header text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                        </svg>
                        <span className="group-hover:text-header text-white ml-1">My Orders</span>
                      </button>
                    </a>
                  </Link>
                  </div>}
                </div>
            </Popover.Panel>
          </>
        )}
      </Popover>
    </div>
  );
}

export default Header;