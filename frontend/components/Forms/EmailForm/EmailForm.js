import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  setEmail } from "../../../redux/actions/userActions";

const EmailForm = () => {

  const dispatch = useDispatch();
  const userLogin = useSelector(state => state.userLogin)
  const userUpdateProfile = useSelector(state => state.userUpdateProfile)
  const emailError = useSelector(state => state.emailError)


  const { userInfo } = userLogin;

  const setUserEmail = async (e) => {
    
    await dispatch(setEmail(e.target.value))
  }
 
  return (
    <>
      <div>
        <div className="flex">
          <div className="mr-1">
            <label htmlFor="userName" className="block text-sm font-medium text-gray-700">
              Email 
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
            id="email"
            name="email"
            type="email"
            autoComplete=""
            onChange={setUserEmail}
            defaultValue={userInfo ? userInfo.email: ''}
            placeholder='Enter your email'
            required
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {emailError && <p className="text-xs italic text-red-500">Please enter email address.</p>}
        </div>
      </div>
    </>
  );
}

export default EmailForm;
























// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { setEmail } from "../../../redux/actions/userActions";

// const EmailForm = () => {

//   const dispatch = useDispatch();
//   const userLogin = useSelector(state => state.userLogin)
//   const userUpdateProfile = useSelector(state => state.userUpdateProfile)

//   const { userInfo } = userLogin;

//   const setUserEmail = async (e) => {
//     await dispatch(setEmail(e.target.value))
//   }

//   return (
//     <>
//       <div>
//         <div className="flex">
//           <div className="mr-1">
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//               Email address
//             </label>
//           </div>
//           {userUpdateProfile.success && <div className="ml-1 -mt-1">
//             <svg className="h-7 w-7  text-gray-50 bg-header rounded-full " fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//             </svg>
//           </div>}
//         </div>
        
//         <div className="mt-1">
//           <input
//             id="email"
//             name="email"
//             type="email"
//             autoComplete="email"
//             defaultValue={userInfo ? userInfo.email: ''}
//             placeholder="Enter your password"
//             onChange={setUserEmail}
//             required
//             className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//           />
//         </div>
//       </div>
//     </>
//   );
// }

// export default EmailForm;