import { useDispatch, useSelector } from 'react-redux';
import { exitSignupForm } from '../../../redux/actions/ShowSignupFormAction';
import { register } from '../../../redux/actions/userActions';

const SignUpButton = () => {

  const email = useSelector(state => state.email);
  const password = useSelector(state => state.password);
  const userName = useSelector(state => state.userName);
  const userLogin = useSelector(state => state.userLogin)
  const shouldShowSignupForm = useSelector(state => state.shouldShowSignupForm);

  const dispatch = useDispatch();

  const submitHandler = async (e) => {
    e.preventDefault()
    //Dispatch Login
    await dispatch(register(userName, email, password, true))
    if (userLogin) {
      await dispatch(exitSignupForm(!shouldShowSignupForm)) 
    }
  }

  return (
    <div>      
      <div>
        <button
          type="submit"
          onClick={submitHandler}
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-header hover:transition duration-500 hover:scale-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-header"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default SignUpButton;