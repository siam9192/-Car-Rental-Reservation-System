import React, { useState } from 'react';
import Form from '../../compoments/form/Form';
import FormInput from '../../compoments/form/FormInput';
import Logo from '../../compoments/reuse/Logo';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useLoginMutation } from '../../redux/features/auth/auth.api';
import { toast } from 'sonner';
import LoadingModal from '../../compoments/modal/LoadingModal';
import { setUser } from '../../redux/features/auth/auth.slice';
import { decodeToken } from '../../utils/fun';
import { useAppDispatch } from '../../redux/hook';
const Login = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const dispatch = useAppDispatch();

  const signUpSchema = z.object({
    email: z
      .string({ required_error: 'Email is required' })
      .email('Enter valid email'),
    password: z
      .string({ required_error: 'Password is required' })
      .min(6, { message: 'Password must be at least 6 character' }),
  });

  const [error, setError] = useState('');

  const [login, { isLoading }] = useLoginMutation();
  const onSubmit = async (values: any) => {
    const data = {
      ...values,
    };

    const res: any = await login(data);
    if (!res.data || res.error) {
      toast.error(res.error?.data.message, { duration: 3000 });
    } else {
      toast.success('Login successfully ', { duration: 3000 });
      const data = res.data;
      const decode: any = decodeToken(data.token);
      const user = {
        userId: data.data._id,
        role: decode.role,
        exp: decode.exp,
        iat: decode.iat,
      };
      dispatch(setUser({ user, token: data.token }));
      if (state) {
        navigate(state);
      } else {
        navigate('/');
      }
    }
  };
  return (
    <div className="h-[100vh]">
      <div className="lg:grid grid-cols-2">
        <div className="px-2 py-32 md:px-20 md:py-32 ">
          <div className="flex flex-col gap-2 justify-center items-center">
            <Logo />
            <p className="dark:text-slate-200">
              Welcome! Again Login Your Account{' '}
            </p>
          </div>
          <Form onSubmit={onSubmit} resolver={zodResolver(signUpSchema)}>
            <div className="space-y-5">
              <FormInput name="email" label="Email" type="text" />
              <FormInput name="password" label="Password" type="password" />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-secondary-color text-white font-medium mt-10"
            >
              Login
            </button>
            {error && <span className=" text-red-700 mt-1">{error}</span>}
            <div className="mt-2">
              <p className="dark:text-slate-200 ">
                Don't have an account ?{' '}
                <Link to={'/auth/sign-up'} className="text-primary-color">
                  Sign up
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
      <LoadingModal isOpen={isLoading} title="Just a moment please..." />
    </div>
  );
};

export default Login;
