import React, { ChangeEvent,KeyboardEvent, useRef, useState } from 'react';
import Form from '../../../compoments/form/Form';
import FormInput from '../../../compoments/form/FormInput';
import FormSelect from '../../../compoments/form/FormSelect';
import FormTextArea from '../../../compoments/form/FormTextArea';
import { locations } from '../../../utils/data';
import LoadingModal from '../../../compoments/modal/LoadingModal';
import { useAddCarMutation } from '../../../redux/features/admin/CarManagement.api';

const AddCar = () => {
  const [imagesUrl,setImagesUrl] = useState<string[]>([])
  const [isElectric,setIsElectric] = useState(false)
  const [selectedLocations,setSelectedLocations] = useState<string[]>([])
  const imageUrlInputRef = useRef<HTMLInputElement>(null)
  const carSeatOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => ({
    display: item,
    value: item,
  }));


  const handelSetImageUrl  = (url:string)=>{
  setImagesUrl([...imagesUrl,url])
  }
  const addImageOnClickEnter =  (e:KeyboardEvent<HTMLInputElement>)=>{
    const key = e.key
    const value = e.currentTarget.value
    if(!value){
        return
    }
    if(key === 'Enter'){
       handelSetImageUrl(value)
       e.currentTarget.value = ''
      }
    }
  
    const clearUrlInput = ()=>{
        if(imageUrlInputRef.current){
            imageUrlInputRef.current.value =''
        }
    }

    const handelSelectLocation = (e:ChangeEvent<HTMLInputElement>)=>{
        const target = e.target
        if(target.checked){
          setSelectedLocations([...selectedLocations,target.value])
        }
        else {
            const arr = selectedLocations
            const index = arr.indexOf(target.value)
            arr.splice(index,1)
            setSelectedLocations([...arr])
        }
    }

    const handelSetIsElectric = (e:ChangeEvent<HTMLInputElement>)=>{
       setIsElectric(e.currentTarget.checked)
    }
    const [addCar,{isLoading}] = useAddCarMutation()
    // Form submit function
    const onSubmit = (values: any) => {
       const data = {
        ...values,
        images:[...imagesUrl],
        isElectric,
        locations:selectedLocations,
        color:'black',
        seats:Number(values.seats),
        pricePerHour:Number(values.pricePerHour)
       }
       addCar(data)
    };
    
  return (
    <section>
      <h1 className="text-3xl font-bold dark:text-slate-50">Add Car</h1>
      <div className="mt-5 bg-white dark:bg-dark-light-secondary p-5 md:p-10 shadow">
        <Form onSubmit={onSubmit}>
          <div className="grid grid-cols-2 gap-5">
            <FormInput name="name" label="Car Name" type="text" />
            <FormInput name="brand" label="Brand Name" type="text" />
          </div>
        
          <div className="mt-5 grid grid-cols-2 gap-5">
            <FormSelect
              name="seats"
              label="Car Seats"
              options={carSeatOptions}
            />
            <FormInput name="pricePerHour" label="Price Per Hour" type="text" />
          </div>

          {/* Select Location */}
          <div className='mt-5 '>
            <h6 className='mb-1 dark:text-slate-100'>Select  Locations</h6>
           <div className='flex items-center gap-2 flex-wrap'>
           {
                locations.map((location,index)=>{
                    return  <div key={index} className='flex items-center gap-2 mt-5'>
                    <input  onChange={handelSelectLocation} type='checkbox' value={location}  className='size-5 accent-secondary-color'/>
                    <label htmlFor="" className='dark:text-slate-100'>{location}</label>
                    </div>
                })
            }
           </div>
          </div>
        <div className='mt-5'>
        <h6 className='mb-1 dark:text-slate-100 font-medium'>Car Type</h6>
        <div className='flex items-center gap-2'>
         <input onChange={handelSetIsElectric} type='checkbox'   className='size-5 accent-secondary-color'/>
         <label htmlFor="" className='dark:text-slate-100'>Electric Car</label>
         </div>
        </div>
        <div className='mt-5'>
        <FormTextArea name='description' label='Description' height='250px'/>
        </div>
       
         <div className=' mt-5 flex flex-wrap gap-3'>
        {imagesUrl.map((url,index)=>{
            return <div className='size-40'>
               <img src={url} key={index} className='w-full'  alt="" />
            </div>
        })}
         </div>
         
         <div className=' mt-5'>
         <input
         ref={imageUrlInputRef}
         onKeyDown={addImageOnClickEnter}
        
              className="w-full mt-1 p-2 border-2  dark:text-slate-100 dark:bg-transparent border-gray-500 dark:border-slate-200 dark:border-opacity-35  font-medium"
              type='text'

            />
        <div className='text-end space-x-2'>
        <button className=' bg-secondary-color text-white px-4 py-2 mt-2'>Add Image</button>
        <button onClick={clearUrlInput} className=' bg-red-500 text-white px-4 py-2 mt-2'>Clear</button>
        </div>
         </div>
         
         <button type='submit' className='mt-5 w-full py-3 bg-primary-color text-white'>Post</button>
        </Form>
      </div>
      <LoadingModal title='Just a moment please...' isOpen={isLoading}/>
    </section>
  );
};

export default AddCar;
