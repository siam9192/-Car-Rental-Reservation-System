import Form from '../../compoments/form/Form';
import FormInput from '../../compoments/form/FormInput';
import Logo from '../../compoments/reuse/Logo';
import { Link } from 'react-router-dom';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useSignupMutation } from '../../redux/features/auth/auth.api';
import { toast } from 'sonner';
import { ChangeEvent, useState } from 'react';
import { signUpValidationSchema } from '../../utils/validationSchema';

const SignUp = () => {
  const [error, setError] = useState('');
  const [agreeTermAndConditions, setAgreeStatus] = useState(false);
  const [signUp] = useSignupMutation();
  const onSubmit = async (values: any) => {
    if (!agreeTermAndConditions) {
      return setError('Please read Agree with term and conditions ');
    }
    if (values.password !== values.confirmPassword) {
      return setError("Both password doesn't match ");
    }
    delete values.confirmPassword;
    const data = {
      ...values,
      role: 'user',
    };
    const id = toast.loading('Creating account..');
    const res: any = await signUp(data);
    if (!res.data || res.error) {
      toast.error(res.error?.data.message, { duration: 3000 });
    } else {
      toast.success('Account successfully created', { duration: 3000 });
    }
    toast.dismiss(id);
  };

  return (
    <div className="h-[100vh] overflow-hidden">
      <div className="lg:grid grid-cols-2">
        <div className="px-2 py-10 md:px-20 md:py-32 ">
          <div className="flex flex-col gap-2 justify-center items-center">
            <Logo />
            <p className="dark:text-slate-200">
              Welcome! Create Your New Account{' '}
            </p>
          </div>
          <Form
            onSubmit={onSubmit}
            resolver={zodResolver(signUpValidationSchema)}
            reset={true}
          >
            <div className="space-y-5">
              <FormInput name="name" label="Name" type="text" />
              <FormInput name="email" label="Email" type="text" />
              <FormInput name="phone" label="Phone (optional)" type="text" />
              <FormInput name="password" label="Password" type="text" />
              <FormInput
                name="confirmPassword"
                label="Confirm Password"
                type="text"
              />
            </div>
            <div className="mt-5 flex items-center gap-1">
              <input
                onChange={(e) => setAgreeStatus(e.currentTarget.checked)}
                type="checkbox"
                name=""
                id="term"
                className="size-5 accent-secondary-color"
              />{' '}
              <Link
                to={'/terms&conditions'}
                className="text-black dark:text-slate-200 hover:text-blue-700 dark:hover:text-blue-700"
              >
                I agree with terms & conditions{' '}
              </Link>
            </div>
            <button
              type="submit"
              disabled={!agreeTermAndConditions}
              className="w-full py-3 bg-secondary-color disabled:bg-gray-400 text-white font-medium mt-10"
            >
              Create Account
            </button>
            {error && (
              <p className=" text-red-600 dark:text-red-700 mt-1">{error}</p>
            )}
            <div className="mt-2">
              <p className="dark:text-slate-200 ">
                Already have an account ?{' '}
                <Link to={'/auth/login'} className="text-primary-color">
                  Login
                </Link>
              </p>
            </div>
          </Form>
        </div>
        <div className="hidden lg:block">
          <img
            className="w-full h-full"
            src="/images/authBanner.webp"
            alt=""
          />
        </div>
        <div></div>
      </div>
    </div>
  );
};
         
export default SignUp;
