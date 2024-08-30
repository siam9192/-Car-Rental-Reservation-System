import React, { useEffect, useState } from 'react'
import Form from '../../compoments/form/Form'
import FormInput from '../../compoments/form/FormInput'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useRecoverAccountMutation, useRecoverAccountRequestMutation } from '../../redux/features/auth/auth.api'
import { jwtDecode } from 'jwt-decode'
import { toast } from 'sonner'
import LoadingModal from '../../compoments/modal/LoadingModal'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const ForgetPassword = () => {
    const [error,setError]  = useState('')
    const [token,setToken] = useState<string|null>(null)
    const [openChangePasswordForm,setOpenChangePasswordForm] = useState(false)
    const [isRecoverSuccess,setRecoverSuccess] = useState(false)
    const [isLoading,setIsLoading] = useState(false)
    const location = useLocation()
    const navigate = useNavigate()
     
    useEffect(()=>{
       if(location.state !== '/auth/login'){
         navigate('/')
       }
    },[])



    const resolver = zodResolver(z.object({
        email:z.string({required_error:'Email is required'}).email()
    }))
    const otpResolver = zodResolver(z.object({
        otp:z.string({required_error:'Otp is required'}).min(6,'OTP must be 6 digit')
    }))
    const newPasswordResolver = zodResolver(z.object({
      newPassword:z.string({required_error:'New Password is required'}).min(6,'Password must be at least 6 digit'),
      confirmPassword:z.string({required_error:'ConfirmPassword is required'}).min(6,'Password must be at least 6 digit'),
  }))
  
  const [recoverRequest] = useRecoverAccountRequestMutation()
  const onSubmit = async(values:any)=>{
    setIsLoading(true)
    const res:any = await  recoverRequest(values)
   
    if(res?.error){
     setError(res.error?.data?.message)

    }
    else {
      setError('')
    setToken(res?.data?.data)
    }
    setIsLoading(false)
 }


  const verifyOtp = (values:any)=>{
    setError('')
    setIsLoading(true)
    if(token){
      const decode:any = jwtDecode(token)
      if(decode.otp === values.otp){
        setError('')
         setOpenChangePasswordForm(true)
      }
      else{
        setError('You entered wrong otp')
      }
    }
    setIsLoading(false)
  }
     
  const [recover] = useRecoverAccountMutation()
    const submitNewPassword = async(values:any)=>{
      setError('')
      setIsLoading(true)
     if(values.newPassword !== values.confirmPassword){
      setError("Both password doesn't match")
     }
    else {
      const decode:any = jwtDecode(token!)
      const res = await recover ({email:decode.email,password:values.newPassword})
      if(res.error){
       toast.error('Something went wrong',{duration:3000})
      }
      else {
       setRecoverSuccess(true)
      }
    }
    setIsLoading(false)
    } 


  return (
    <section className='h-[60vh] flex flex-col justify-center items-center px-2 lg:px-0'>
   {
    !isRecoverSuccess
    ?
    
    !openChangePasswordForm ?
    
      !token ?
      <div className='  w-full md:w-1/2 lg:w-1/3'>
      <h1 className='text-3xl dark:text-slate-50 text-gray-950 font-bold mb-4'>Recover your account</h1>
      <Form onSubmit={onSubmit} resolver={resolver} reset={true}>
        <FormInput name='email' label='Email' type='email' />
        <button className=' bg-primary-color py-3 text-white w-full rounded-md mt-2 '>Submit</button>
        {
            error && <p className='mt-2 text-red-500'>{error}</p>
           }
       </Form></div>
       :
       <div className=' mx-2 lg:mx-0 w-full md:w-1/2 lg:w-1/3'>
       <h1 className='text-3xl dark:text-slate-50 text-gray-950 font-bold mb-4'>Enter verification code</h1>
       <Form onSubmit={verifyOtp} resolver={otpResolver}  reset={true}>
         <FormInput name='otp' label='OTP' type='text' />
         <p className='mt-2'>We have send and verification code to your email</p>
         <button className=' bg-primary-color py-3 text-white w-full rounded-md mt-2 '>Submit</button>
         {
            error && <p className='mt-2 text-red-500'>{error}</p>
           }
        </Form></div>
  
  :
<div className=' mx-2 lg:mx-0 w-full md:w-1/2 lg:w-1/3'>
         <h1 className='text-3xl dark:text-slate-50 text-gray-950 font-bold mb-4'>Change your password</h1>
          <Form onSubmit={submitNewPassword} resolver={newPasswordResolver} reset={true} >
           <FormInput name='newPassword' label='New Password' type='password' />
           <FormInput name='confirmPassword' label='Confirm Password' type='password' />
           <button className=' bg-primary-color py-3 text-white w-full rounded-md mt-2 '>Submit</button>
           {
            error && <p className='mt-2 text-red-500'>{error}</p>
           }
          </Form></div> 
   
   :
  
     <div className=' mx-2 lg:mx-0 w-full md:w-1/2 lg:w-1/3 text-center'>
         <h1 className='text-3xl text-center dark:text-slate-50 text-gray-950 font-bold mb-4'>Account recover successful</h1>
      <Link to={'/auth/login'} replace>
      <button className=' bg-secondary-color text-white px-4 py-2 '>Go To Login</button>
      </Link>
   </div>
   }
      <LoadingModal title='Just a moment please'  isOpen={isLoading} />
    </section>
  )
}

export default ForgetPassword