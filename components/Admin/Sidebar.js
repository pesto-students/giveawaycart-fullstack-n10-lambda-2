import { Fragment, useState } from 'react'
import { Dialog, Menu, Transition } from '@headlessui/react'
import {
  BellIcon,
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  MenuAlt2Icon,
  UsersIcon,
  XIcon,
} from '@heroicons/react/outline'
import Link from 'next/link';
import { MenuIcon } from '@heroicons/react/solid';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../redux/actions/userActions";
import Loader from '../Loader'
import UserDetails from './UserDetails';
import ProductDetails from './ProductDetails';
import { listProducts } from '../../redux/actions/productActions';
import SmallLoader from '../SmallLoader';
import MiniLoader from '../MiniLoader';



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [showUserData, setShowUserData] = useState(false)
  const [showProductData, setShowProductData] = useState(false)
  
  const dispatch = useDispatch()
  const allUsers = useSelector(state => state.allUsers)
  const productList = useSelector(state => state.productList)
 
  const showUsers = () => {
    setShowProductData(false)
    setShowUserData(true)
  }

  const showProducts = () => {
    setShowUserData(false)
    setShowProductData(true)
  }
  
  useEffect(() => {
    
    // const init = async () => {
    //   await dispatch(getAllUsers())  
    //   await dispatch(listProducts())
    // }

    // init()
  },[showUserData, showProductData])

  return (
    <div>
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog as="div" className="fixed inset-0 z-40 flex md:hidden" onClose={setSidebarOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <div className="relative  max-w-xs w-full bg-white pt-5 pb-4 flex-1 flex flex-col">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute top-0 right-0 -mr-12 pt-2">
                    <button
                      type="button"
                      className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                    </button>
                  </div>
                </Transition.Child>
                
                <div className="mt-5 flex-1 h-0 overflow-y-auto">
                  <nav className="px-2 space-y-1">
                     <Link href="/admin">
                      <a
                        onClick={showUsers}  
                        className='bg-gray-100 text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md'                  
                      >
                        
                        <UsersIcon className='text-gray-400 group-hover:text-gray-500
                            mr-3 flex-shrink-0 h-6 w-6' />
                        
                        <span className="flex-1">Users</span>
                        {allUsers.loading && <MiniLoader />}
                        {true && !(allUsers.loading) &&
                          <span className='bg-gray-100 group-hover:bg-gray-200 
                              ml-3 inline-block py-0.5 px-3 text-xs font-medium rounded-full'>
                         { (!(allUsers.loading) ? allUsers.allUsers.users.length : 0)}
                          
                          </span>}                    
                      </a>
                    </Link>
                    <Link href="/admin">
                      <a
                        onClick={showProducts}    
                        className='bg-gray-100 text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md'                  
                      >
                        
                        <ChartBarIcon className='text-gray-400 group-hover:text-gray-500
                            mr-3 flex-shrink-0 h-6 w-6' />
                        
                        <span className="flex-1">Products</span>
                        {productList.loading && <MiniLoader />}
                        {true && !(productList.loading) &&
                          <span className='bg-gray-100 group-hover:bg-gray-200 
                              ml-3 inline-block py-0.5 px-3 text-xs font-medium rounded-full'>
                          {productList.products.length}
                          </span>}                    
                      </a>
                    </Link>
                  </nav>
                </div>
              </div>
            </Transition.Child>
            <div className="flex-shrink-0 w-14">{/* Dummy element to force sidebar to shrink to fit close icon */}</div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden md:flex md:w-64 md:flex-col md:fixed left-0">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="border-r border-gray-200 pt-5 flex flex-col flex-grow bg-white overflow-y-auto">
            
            <div className="flex-grow mt-5 flex flex-col">
              <nav className="flex-1 px-2 pb-4 space-y-1">
                <Link href="/admin">
                  <a
                    onClick={showUsers}  
                    className='bg-gray-100 text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md'                  
                  >
                    
                    <UsersIcon className='text-gray-400 group-hover:text-gray-500
                        mr-3 flex-shrink-0 h-6 w-6' />
                    
                    <span className="flex-1">Users</span>
                    
                    {allUsers.loading && <MiniLoader />}
                    {true && !(allUsers.loading) &&
                      <span className='bg-gray-100 group-hover:bg-gray-200 
                          ml-3 inline-block py-0.5 px-3 text-xs font-medium rounded-full'>
                       { (!(allUsers.loading) ? allUsers.allUsers.users.length : 0)}
                      </span>}                    
                  </a>
                </Link>
                <Link href="/admin">
                  <a
                    onClick={showProducts}    
                    className='bg-gray-100 text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md'                  
                  >
                    
                    <ChartBarIcon className='text-gray-400 group-hover:text-gray-500
                        mr-3 flex-shrink-0 h-6 w-6' />
                    
                    <span className="flex-1">Products</span>
                    {(productList.loading) && <MiniLoader />}
                    {true && !(productList.loading) &&
                      <span className='bg-gray-100 group-hover:bg-gray-200 
                          ml-3 inline-block py-0.5 px-3 text-xs font-medium rounded-full'>
                      {productList.products.length}
                      </span>}                    
                  </a>
                </Link>
              </nav>
            </div>
          </div>
        </div>

        <div className="md:pl-64">
          <div className="max-w-5xl mx-auto flex flex-col md:px-8 xl:px-0">
            <div className="">
              <button
                type="button"
                className="border border-gray-200 p-4 text-header  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
                onClick={() => setSidebarOpen(true)}
              >
                <span className="sr-only">Open sidebar</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </button>
              
            </div>

            <main className="flex-1">
              <div className="py-6">
                <div className="px-4 sm:px-6 md:px-0">
                  {showUserData && <h1 className="text-2xl font-semibold text-gray-900">User Details</h1>}
                  {showProductData && <h1 className="text-2xl font-semibold text-gray-900">Product Details</h1>}
                </div>
                <div className="px-0 sm:px-6 md:px-0">
                  {/* Replace with your content */}
                  {showUserData && <UserDetails />}
                  {showProductData && <ProductDetails />}
                  {/* /End replace */}
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;