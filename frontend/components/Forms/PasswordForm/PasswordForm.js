import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPassword } from "../../../redux/actions/userActions";

const PasswordForm = () => {

  const dispatch = useDispatch();
  const userUpdateProfile = useSelector(state => state.userUpdateProfile)
  const passwordError = useSelector(state => state.passwordError)

  const setUserPassword = async (e) => {
    await dispatch(setPassword(e.target.value))
  }

  return (
    <>
      <div>
        <div className="flex">
          <div className="mr-1">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
          </div>
        { userUpdateProfile.success && <div className="ml-1 -mt-1">
            <svg className="h-7 w-7 animate-fade-in-down text-gray-50 bg-header rounded-full " fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>}
        </div>
        
        <div className="mt-1">
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            onChange={setUserPassword}
            required
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {passwordError && <p className="text-xs italic text-red-500">Please choose a password.</p>}
        </div>
      </div>
    </>
  );
}

export default PasswordForm;