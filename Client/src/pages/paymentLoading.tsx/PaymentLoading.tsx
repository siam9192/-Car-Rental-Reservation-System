import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { usePaymentSuccessMutation } from '../../redux/features/user/bookingManagement';

const PaymentLoading = () => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id')
    const navigate = useNavigate();
    if(!id){
     navigate('/')
    }
    console.log(id)
    const [paymentSuccess] = usePaymentSuccessMutation()
    useEffect(()=>{
      paymentSuccess(id)
      .then(res=>{
        const url = res.data?.data?.url
        console.log()
        if(url){
        navigate(url)
        }
        else{
         navigate('/')
        }
      })

    },[])
  return (
    <div className='h-[100vh] flex flex-col gap-2 justify-center items-center'>
         <div className="w-10 h-10 animate-[spin_1s_linear_infinite] rounded-full border-4 border-r-sky-900 border-sky-400"></div>
          
              <h6 className="text-center  text-xl font-medium text-gray-800 dark:text-slate-100 ">
               Payment is loading just a moment...
              </h6>
          
          </div>
   
  )
}

export default PaymentLoading