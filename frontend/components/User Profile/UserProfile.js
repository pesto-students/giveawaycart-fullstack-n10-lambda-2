import { Fragment, useEffect, useState } from 'react'
import { Disclosure, Menu, Switch, Transition } from '@headlessui/react'
import {
  BellIcon,
  CogIcon,
  CreditCardIcon,
  KeyIcon,
  MenuIcon,
  UserCircleIcon,
  ViewGridAddIcon,
  XIcon,
} from '@heroicons/react/outline'
import UserNameForm from '../Forms/UserNameForm/UserNameForm'
import EmailForm from '../Forms/EmailForm/EmailForm'
import PasswordForm from '../Forms/PasswordForm/PasswordForm'
import SaveCancelButton from './SaveCancelButton'
import UserImageLg from './UserImageLg'
import { useDispatch } from 'react-redux'
import { getUserDetails } from '../../redux/actions/userActions'
import UserNameFormProfile from '../Forms/UserNameForm/UserNameFormProfile'
import UserInfoUpdateSuccessModal from './UserInfoUpdateSuccessModal'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}



const UserProfile = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    const getData = async () => {
      const res = await dispatch(getUserDetails('profile'))
      
    }
    getData();
  },[])

  return (
    <div>
      <Disclosure as="div" className="relative bg-sky-700 pb-32 overflow-hidden">
        {({ open }) => (
          <>
            
            <div
              aria-hidden="true"
              className={classNames(
                open ? 'bottom-0' : 'inset-y-0',
                'absolute inset-x-0 left-1/2 transform -translate-x-1/2 w-full overflow-hidden lg:inset-y-0'
              )}
            >
              <div className="absolute inset-0 flex">
                <div className="h-full w-1/2" style={{ backgroundColor: '#0a527b' }} />
                <div className="h-full w-1/2" style={{ backgroundColor: '#065d8c' }} />
              </div>
              <div className="relative flex justify-center">
                <svg
                  className="flex-shrink-0"
                  width={1750}
                  height={308}
                  viewBox="0 0 1750 308"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M284.161 308H1465.84L875.001 182.413 284.161 308z" fill="#0369a1" />
                  <path d="M1465.84 308L16.816 0H1750v308h-284.16z" fill="#065d8c" />
                  <path d="M1733.19 0L284.161 308H0V0h1733.19z" fill="#0a527b" />
                  <path d="M875.001 182.413L1733.19 0H16.816l858.185 182.413z" fill="#0a4f76" />
                </svg>
              </div>
            </div>
            <header className="relative py-10">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold text-white">Settings</h1>
              </div>
            </header>
          </>
        )}
      </Disclosure>

        <main className="relative mt-2">
        <div className="max-w-screen-xl mx-auto pb-6 px-4 sm:px-6 lg:pb-16 lg:px-8">
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="divide-y divide-gray-200 lg:grid lg:grid-cols-12 lg:divide-y-0 lg:divide-x">
              <aside className="py-6 lg:col-span-3">
               <UserImageLg />
              </aside>

              <form className="divide-y divide-gray-200 lg:col-span-9" action="#" method="POST">
                {/* Profile section */}
                <div className="py-6 px-4 sm:p-6 lg:pb-8">
                  <div>
                    <h2 className="text-lg leading-6 font-medium text-gray-900">Profile</h2>
                    <p className="mt-1 text-sm text-gray-500">
                      This information will be displayed publicly so be careful what you share.
                    </p>
                  </div>
                  {/* User Form Fields */}
                  <div className="mt-6 grid grid-cols-12 gap-6">
                    <div className="col-span-6">
                      <UserNameForm />                   
                    </div>
                     <div className="col-span-6">
                      <EmailForm />
                    </div>
                    <div className="col-span-6 sm:col-span-6">
                      <PasswordForm />
                    </div>
                  </div>
                </div>

                {/* Privacy section */}
               <SaveCancelButton />
              </form>
              <UserInfoUpdateSuccessModal />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default UserProfile;