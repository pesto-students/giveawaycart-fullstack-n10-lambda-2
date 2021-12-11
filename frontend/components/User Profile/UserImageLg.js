import axios, { Axios } from "axios"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setUserImage, updateUserProfileImage, uploadImageToS3 } from "../../redux/actions/userActions"
import Loader from '../Loader'


const UserImageLg = () => {

  const [image, setImage] = useState(null)
  //const [file, setFile] = useState(null)
  const userLogin = useSelector(state => state.userLogin)
  const userImage = useSelector(state => state.userImage);

  const {userInfo} = userLogin

  const dispatch = useDispatch()

  const setImages = async (e) => {
    console.log('image event triggered')
    
    //setFile(e.target.files[0])
    console.log('first time wht does it show', e.target.files[0])
    const file = e.target.files[0]
    console.log('userImage is set to', file)
    
    //await dispatch(setUserImage(file));
    await dispatch(updateUserProfileImage(file))

  }

  useEffect(() => {
    
    const init = async () => {
      setImage(userInfo.image)
    }

    init()
    console.log('USER Profile image is')
  },[userInfo])

  return (
    <>
      <div className="hidden relative rounded-full overflow-hidden lg:inline-block">
        {!(userImage.loading) && <img className="relative rounded-full w-40 h-40" src={image} alt="" />}
        {userImage.loading && <div className="relative rounded-full w-40 h-40">
          <Loader />
        </div>}
        <label
          htmlFor="desktop-user-photo"
          className="absolute inset-0 w-full rounded-full h-full bg-gray-500 bg-opacity-75 flex items-center justify-center text-sm font-medium text-black opacity-0 hover:opacity-100 "
        >
          {/* focus-within:opacity-100 */}
          <span>Change</span>
          <span className="sr-only"> user photo</span>
          <input
            type="file"
            id="desktop-user-photo"
            onChange={setImages}
            name="user-photo"
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer border-gray-300 rounded-md"
          />
        </label>
      </div>
    </>
  );
}

export default UserImageLg;