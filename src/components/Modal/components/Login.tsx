import { Input } from '@nextui-org/react';
import AuthButton from '../../AuthButton';
import Button from '../../Button';
import { useRef, useState } from 'react';
import { getInputValues } from '../helpers/getInputValues';
import {
  logInWithEmail,
  logInWithFacebook,
  logInWithGoogle,
  signUpWithEmail,
} from '../../../services/firebase/userService';
import { toast } from 'react-toastify';
import useModal from '../../../hooks/modalHooks';

export default function Login() {
  const loginRef = useRef<HTMLFormElement>(null);
  const [isLogin, setIsLogin] = useState<boolean>();
  const { closeModal } = useModal();

  const handleSignUpSubmit = async () => {
    const values = getInputValues(loginRef);
    if (values) {
      const { user, error: firebaseError } = await signUpWithEmail(
        values.email,
        values.pwd,
        values.username
      );
      if (firebaseError || !user) return toast.warning(firebaseError);
    }
    return closeModal();
  };

  const handleSignInSubmit = async () => {
    const values = getInputValues(loginRef);
    if (values) {
      const { user, error: firebaseError } = await logInWithEmail(
        values.email,
        values.pwd
      );
      if (firebaseError || !user) return console.error(firebaseError);
    }
    return closeModal();
  };

  const handleGoogleLogin = async () => {
    const { user, error: firebaseError } = await logInWithGoogle();
    if (firebaseError || !user) return console.error(firebaseError);
    return closeModal();
  };

  const handleFacebookLogin = async () => {
    const { user, error: firebaseError } = await logInWithFacebook();
    if (firebaseError || !user) return console.error(firebaseError);
    return closeModal();
  };

  const handleSubmit = isLogin ? handleSignInSubmit : handleSignUpSubmit
  const toggleAuthMode = () => setIsLogin(!isLogin);

  return (
    <form ref={loginRef} className="flex flex-col gap-2">
      <div className="flex flex-col gap-4">
        <h5 className="text-h5 text-blue-950">
          Welcome to Trisog,{' '}
          <strong className="text-rose-500 font-semibold">
            {isLogin ? 'Log in' : 'Sign Up'}
          </strong>
        </h5>
        {!isLogin && (
          <Input
            placeholder="Name"
            label="Name"
            variant="bordered"
            name="username"
          />
        )}
        <Input
          placeholder="Email"
          label="Email"
          variant="bordered"
          name="email"
        />
        <Input
          placeholder="Password"
          label="Password"
          variant="bordered"
          type="password"
          name="pwd"
        />
        <Button
          onClick={handleSubmit}
          text="Continue"
          type="button"
          fill
        />
        <span className="text-caption text-end flex flex-row gap-1">
          {isLogin ? (
            <>
              Doesn't have an account?
              <button
                className="text-rose-400 hover-bright"
                onClick={toggleAuthMode}
                type="button"
              >
                Sign up
              </button>
            </>
          ) : (
            <>
              Already have an account?
              <button
                className="text-rose-400 hover-bright"
                onClick={toggleAuthMode}
                type="button"
              >
                Log in
              </button>
            </>
          )}
        </span>
      </div>
      <span className="text-gray-400 text-action w-full flex flex-row items-center gap-4">
        <hr className="w-full" />
        or
        <hr className="w-full" />
      </span>
      <div className="flex flex-col gap-4">
        <AuthButton
          content="Continue with Google"
          socialMedia="google"
          onClick={handleGoogleLogin}
        />
        <AuthButton
          content="Continue with Facebook"
          socialMedia="facebook"
          onClick={handleFacebookLogin}
        />
      </div>
    </form>
  );
}
