import { useDispatch, useSelector } from 'react-redux';
import { invalidUserNamePasswordError, showEmailError, showPasswordError } from '../../../redux/actions/FormActions';
import { exitLoginForm } from '../../../redux/actions/ShowLoginFormAction';
import { login } from '../../../redux/actions/userActions';
import Router, { useRouter } from 'next/router';

const SignInButton = () => {

  const email = useSelector(state => state.email);
  const password = useSelector(state => state.password);
  const userLogin = useSelector(state => state.userLogin)
  const shouldShowLoginForm = useSelector(state => state.shouldShowLoginForm);
  const router = useRouter()

  const dispatch = useDispatch();

  const submitHandler = async (e) => {
    e.preventDefault()
    if (email) {
      if (password) {
        const res = await dispatch(login(email, password, true))
        console.log('response on login', res)
        if (userLogin) {
          if (userLogin.error) {
            console.log('The error message is', userLogin.error)
            await dispatch(invalidUserNamePasswordError())
          } else {
            await dispatch(exitLoginForm(!shouldShowLoginForm))
            router.push('/')
          }                    
        }  
      } else {
        await dispatch(showPasswordError())
      }
    } else {
       await dispatch(showEmailError())
    }
      
  } 
    //Dispatch Login
    
  

  return (
    <div>      
      <div>
        <button
          type="submit"
          onClick={submitHandler}
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-header hover:transition duration-500 hover:scale-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-header"
        >
          Sign in
        </button>
      </div>
    </div>
  );
}

export default SignInButton;