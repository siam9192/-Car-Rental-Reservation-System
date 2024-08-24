import React from 'react';
import Form from '../../compoments/form/Form';
import FormInput from '../../compoments/form/FormInput';
import Logo from '../../compoments/reuse/Logo';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const onSubmit = () => {};
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
          <Form onSubmit={onSubmit}>
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
            <button className="w-full py-3 bg-secondary-color text-white font-medium mt-10">
              Create Account
            </button>
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
