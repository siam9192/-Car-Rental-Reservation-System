import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useAppSelector } from '../../../../redux/hook'
import DashboardSectionContainer from '../../../../compoments/container/DashboardSectionContainer'
import { useConfirmBookingMutation, useGetBookingQuery } from '../../../../redux/features/booking/booking.api'
import { da, el } from 'date-fns/locale'
import { toast } from 'sonner'

const BookingConfirm = () => {
    const id = useParams().id
    const navigate = useNavigate()
    const role = useAppSelector(state=>state.auth.user?.role)
    if(!id){
      if(role === 'admin'){
        navigate('/dashboard/admin')
      }
      else {
        navigate('/dashboard')
      }
    }
    const {data,isLoading} = useGetBookingQuery(id)
    const booking = data?.data

    const [confirm] = useConfirmBookingMutation()

    const confirmBooking = async()=>{
     const res = await confirm(id)
     if(res.data){
         navigate(-1)
     }
     else {
         toast.error('Something went wrong',{duration:3000})
     }
    }

    if(isLoading){
        return <div></div>
    }
    if(!booking || booking.isBooked ==='confirmed'){
        if(role === 'admin'){
            navigate('/dashboard/admin')
          }
          else {
            navigate('/dashboard')
          }
    }


   

  return (
    <div>
     <h1 className='text-3xl text-slate-50 font-medium'>Check your Booking Details</h1>
  <div className='flex justify-center items-center'>
  <div className='w-full lg:w-1/2'>
   <DashboardSectionContainer>
        <div className='space-y-4'>
            <h3 className='text-xl dark:text-slate-100'>Car: {booking?.car.name}</h3>
            <h3 className='text-xl dark:text-slate-100'>Brand: {booking?.car.brand}</h3>
            <h2 className='text-2xl dark:text-slate-100'>Your Info:</h2>
            <h3 className='text-xl dark:text-slate-100'>NID:{booking?.bookerInfo.nid||'N/A'}</h3>
            <h3 className='text-xl dark:text-slate-100'>Passport: {booking?.bookerInfo.nid||'N/A'}</h3>
            <h3 className='text-xl dark:text-slate-100'>Passport: {booking?.bookerInfo.drivingLicense||'N/A'}</h3>
            <h2 className='text-2xl dark:text-slate-100'>Pricing:</h2>
            <h3 className='text-xl dark:text-slate-100'>Price:${booking?.pricePerHour}/hour</h3>
            <div className='mt-5'>
                <button onClick={confirmBooking} className=' bg-primary-color text-white w-full py-3'>Confirm Booking</button>
            </div>
            

        </div>
     </DashboardSectionContainer>

   </div>
  </div>
    </div>
  )
}

export default BookingConfirm