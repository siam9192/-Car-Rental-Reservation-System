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
import { toggleLogging } from '../../redux/features/toogle/toggle.slice';
import { signInValidationSchema } from '../../utils/validationSchema';
const Login = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const dispatch = useAppDispatch();

  const [error, setError] = useState('');
  const [showPassword, setShowPasswordStatus] = useState(false);

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
      dispatch(toggleLogging());
      dispatch(setUser({ user, token: data.token }));
      if (state) {
        navigate(state);
      } else {
       if(user.role === 'admin'){
        navigate('/dashboard/admin');
       }
       else {
        navigate('/dashboard')
       }
      }
      dispatch(toggleLogging());
    }
  };
  return (
    <div className="h-[100vh] overflow-hidden">
      <div className="lg:grid grid-cols-2">
        <div className="px-2 py-32 md:px-20 md:py-32 ">
          <div className="flex flex-col gap-2 justify-center items-center">
            <Logo />
            <p className="dark:text-slate-200">
              Welcome! Again Login Your Account{' '}
            </p>
          </div>
          <Form
            onSubmit={onSubmit}
            resolver={zodResolver(signInValidationSchema)}
          >
            <div className="space-y-5">
              <FormInput name="email" label="Email" type="text" />
              <FormInput
                name="password"
                label="Password"
                type={showPassword ? 'text' : 'password'}
              />
            </div>
            <div className="mt-5 flex items-center gap-1">
              <input
                onChange={(e) => setShowPasswordStatus(e.currentTarget.checked)}
                type="checkbox"
                name=""
                id="term"
                className="size-5 accent-secondary-color"
              />{' '}
              <label className="text-black dark:text-slate-200 hover:text-blue-700 dark:hover:text-blue-700">
                Show Password
              </label>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-secondary-color text-white font-medium mt-5"
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
            className="w-full h-[100vh]"
            src="https://i.ibb.co/5RxCbN6/807b5de7f0bfaf58f8ca93fa73d51527.jpg"
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
