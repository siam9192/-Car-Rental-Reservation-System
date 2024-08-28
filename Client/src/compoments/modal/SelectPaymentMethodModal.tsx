import React, { useEffect, useState } from 'react'
import { TBooking } from '../../types'
import { usePaymentRequestMutation } from '../../redux/features/user/bookingManagement'

type TSelectPaymentMethodModalProps = {
    booking:TBooking,
    children:React.ReactNode
}

const SelectPaymentMethodModal = ({booking,children}:TSelectPaymentMethodModalProps) => {
     const [openModal, setOpenModal] = useState(false); 
     const [selectedMethod,selectMethod] = useState<number|null>(null)

     useEffect(()=>{
        selectMethod(null)
     },[openModal])
      
     const paymentMethods = [
        {
            name:'Amar Pay',
            logo:'/images/logos/amarpay.png',
            value:'amarpay'
        },
        {
            name:'Ssl',
            logo:'/images/logos/ssl.png',
            value:'ssl'
        },
        {
            name:'Stripe',
            logo:'/images/logos/stripe.png',
            value:'stripe'
        }
     ]
     const [sendPaymentRequest,{isLoading}] = usePaymentRequestMutation()
     const handelPayment = async()=>{
        if(selectedMethod === null){
            return 
        }
        const data = {
            bookingId:booking._id,
            method:paymentMethods[selectedMethod].value
        }
        const res:any = await sendPaymentRequest(data)
        const url = res?.data?.data?.url
       if(url){
        window.location.href = url
       }
       
     }
          
       return (
          <div >
            <button onClick={() => setOpenModal(true)}>
            {children}
            </button>
            <div onClick={() => setOpenModal(false)} className={`fixed z-[100] flex items-center justify-center ${openModal ? 'opacity-1 visible' : 'invisible opacity-0'} inset-0 h-full w-full bg-black/20 backdrop-blur-sm duration-100 `}>
              <div onClick={(e_) => e_.stopPropagation()} className={`absolute rounded-lg bg-white dark:bg-gray-900 drop-shadow-2xl w-full md:w-1/2 p-5 md:p-10 min-h-52 ${openModal ? 'opacity-1 translate-y-0 duration-300' : '-translate-y-20 opacity-0 duration-150  '}`}>
                <h1 className='text-2xl md:text-3xl text-black dark:text-slate-50 font-bold mb-5'>Select Payment Method</h1>
                  <div className='grid grid-cols-3 gap-5'>
                  {
                    paymentMethods.map((method,index)=>{
                        return <div onClick={()=>selectMethod(index)} className={`p-5 border ${selectedMethod === index ?'border-primary-color border-2':''} rounded-md`} key={index}>
                           <div className='flex items-center justify-center'>
                           <img src={method.logo} alt="" />
                           </div>
                        </div>
                    })
                  }
                  </div>
                  <button onClick={handelPayment} disabled={selectedMethod === null || isLoading} className='w-full py-3 bg-secondary-color disabled:bg-gray-300 dark:disabled:bg-dark-light-secondary text-white mt-10'>GO TO PAY</button>
              </div>
            </div>
          </div>
        )
      }


export default SelectPaymentMethodModal