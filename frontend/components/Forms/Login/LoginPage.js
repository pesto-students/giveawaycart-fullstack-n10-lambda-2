import { useSelector } from 'react-redux';
import EmailForm from '../EmailForm/EmailForm';
import PasswordForm from '../PasswordForm/PasswordForm';
import RememberMeForm from '../RememberMeForm/RememberMeForm';
import SignInButton from './SignInButton';
import SocialNetworkLogin from './SocialNetworkLogin';


const LoginPage = () => {

  const invalidUserNamePassword = useSelector(state => state.invalidUserNamePassword)

  return (
    <>
      {/*Login Page  */}
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        {invalidUserNamePassword && <div>
          <span className="flex animate-pulse items-center m-auto text-sm font-bold tracking-wide text-red-500 ">
            Invalid username or password !
          </span>
        </div>}
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" action="#" method="POST">            
            <EmailForm />
            <PasswordForm />
            
            <SignInButton />
          </form>
          {/* Options to login through Social Network */}
          <SocialNetworkLogin />
        </div>
      </div>
    </>
  );
}

export default LoginPage;