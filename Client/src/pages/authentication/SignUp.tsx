import Form from '../../compoments/form/Form';
import FormInput from '../../compoments/form/FormInput';
import Logo from '../../compoments/reuse/Logo';
import { Link } from 'react-router-dom';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useSignupMutation } from '../../redux/features/auth/auth.api';
import { toast } from 'sonner';
import { useState } from 'react';

const signUpSchema = z.object({
  name: z
    .string({ required_error: 'Name is required' })
    .min(3, { message: 'Name must be at least 3 character' }),
  email: z
    .string({ required_error: 'Email is required' })
    .email('Enter valid email'),
  password: z
    .string({ required_error: 'Password is required' })
    .min(6, { message: 'Password must be at least 6 character' }),
  confirmPassword: z
    .string({ required_error: 'Confirm Password is required' })
    .min(6, { message: 'Confirm Password must be at least 6 character' }),
});

const SignUp = () => {
  const [error, setError] = useState('');

  const [signUp] = useSignupMutation();
  const onSubmit = async (values: any) => {
    console.log(values);
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
    <div className="">
      <div className="lg:grid grid-cols-2">
        <div className="px-2 py-10 md:px-20 md:py-32 ">
          <div className="flex flex-col gap-2 justify-center items-center">
            <Logo />
            <p className="dark:text-slate-200">
              Welcome! Create Your New Account{' '}
            </p>
          </div>
          <Form onSubmit={onSubmit} resolver={zodResolver(signUpSchema)}>
            <div className="space-y-5">
              <FormInput name="name" label="Name" type="text" />
              <FormInput name="email" label="Email" type="text" />
              <FormInput name="password" label="Password" type="text" />
              <FormInput
                name="confirmPassword"
                label="Confirm Password"
                type="text"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-secondary-color text-white font-medium mt-10"
            >
              Create Account
            </button>
            {error && <span className=" text-red-700 mt-1">{error}</span>}
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
            src="https://vidtube-5rhnp42f6-siam-hasans-projects.vercel.app/images/auth.jpg"
            alt=""
          />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default SignUp;
