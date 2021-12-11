import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  setUserName } from "../../../redux/actions/userActions";

const UserNameFormProfile = () => {

  const dispatch = useDispatch();
  const userDetails = useSelector(state => state.userDetails)
  const userUpdateProfile = useSelector(state => state.userUpdateProfile)

  const { user } = userDetails;

  const setName = async (e) => {
    console.log('username is', e.target.value)
    await dispatch(setUserName(e.target.value))
  }
 
  return (
    <>
      <div>
        <div className="flex">
          <div className="mr-1">
            <label htmlFor="userName" className="block text-sm font-medium text-gray-700">
              User Name 
            </label>
          </div>
          {userUpdateProfile.success && <div className="ml-1 -mt-1">
            <svg className="h-7 w-7  text-gray-50 bg-header rounded-full " fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>}
        </div>
        <div className="mt-1">
          <input
            id="userName"
            name="userName"
            type="userName"
            autoComplete="userName"
            onChange={setName}
            defaultValue={user ? user.name: ''}
            placeholder='Enter your username'
            required
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
      </div>
    </>
  );
}

export default UserNameFormProfile;