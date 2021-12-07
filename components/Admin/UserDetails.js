import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletUserFromDB, getAllUsers } from "../../redux/actions/userActions";
import Loader from '../Loader'
import { useRouter } from 'next/router';
import SmallLoader from "../SmallLoader";




const UserDetails = () => {

  const router = useRouter()
  const allUsers = useSelector(state => state.allUsers)
  const userDelete = useSelector(state => state.userDelete)
  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin

  const dispatch = useDispatch();
  
  const deleteUser = async (userId) => {
    console.log('user to be deleted', userId)
    if (window.confirm('Are you sure to delete the user')) {      
      await dispatch(deletUserFromDB(userId))
    }
  }

  useEffect(() => {
    dispatch(getAllUsers())
    
  }, [userDelete.Success])

 
  return (
    <>
      <div className="flex flex-col">
{        console.log('all users value', allUsers.loading)
}        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              
              {userDelete.loading && <SmallLoader />}
              {allUsers.loading && <SmallLoader />}
              {!userDelete.loading && <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Title
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Status
                    </th>
                    
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
               
                {!allUsers.loading &&
                  <tbody className="bg-white divide-y divide-gray-200">
                  {allUsers.allUsers.users.map((person) => (
                    <tr key={person.email}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <img className="h-10 w-10 rounded-full" src={person.image} alt="" />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{person.name}</div>
                            <div className="text-sm text-gray-500">{person.email}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900"></div>
                        <div className="text-sm text-gray-500">{(person.isAdmin) ? 'Admin' : 'User'}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          Active
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{person.role}</td>
                      {/* {userDelete.loading && <Loader />} */}
                      {!allUsers.loading &&
                        (userInfo._id !== person._id) &&
                        <td className="px-6 py-4 font-sans tracking-wider whitespace-nowrap text-right text-sm font-medium">
                        
                          <button
                            onClick={() => deleteUser(`${person._id}`)}
                            className="text-red-400 tracking-wider hover:text-header">                            
                                 Delete User 
                          </button>                          
                        </td>}
                    </tr>
                  ))}
                </tbody>}
              </table>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserDetails;