import React, { useState } from 'react';
import Form from '../../../../../compoments/form/Form';
import FormInput from '../../../../../compoments/form/FormInput';
import FormSelect from '../../../../../compoments/form/FormSelect';
import { additionalOptions as addOptions } from '../../../../../utils/data';
import { zodResolver } from '@hookform/resolvers/zod';
import { bookingValidationSchema } from '../../../../../utils/validationSchema';
import { useCreateBookingMutation } from '../../../../../redux/features/booking/booking.api';
import LoadingModal from '../../../../../compoments/modal/LoadingModal';
import { TCar } from '../../../../../types';
import { useGetMeQuery } from '../../../../../redux/features/auth/auth.api';
import { toast } from 'sonner';

type TBooKingFormProps = {
  car: TCar;
};
const BookingForm = ({ car }: TBooKingFormProps) => {
  const [error, setError] = useState('');
  const [createBooking, { isLoading }] = useCreateBookingMutation();
  const { data } = useGetMeQuery(undefined);
  const user = data?.data;
  const onSubmit = async (values: any) => {
    const data: any = {
      carId: car._id,
      startTime: new Date().toISOString(),
      pricePerHour: car.pricePerHour,
      bookerInfo: {
        drivingLicense: values.drivingLicense,
      },
    };

    if (!values.passport || !values.nid) {
      setError('NID or Passport is required');
      return;
    }
    if (values.passport) {
      data.bookerInfo.passport = values.passport;
    }
    if (values.nid) {
      data.bookerInfo.nid = values.nid;
    }

    

    const res = await createBooking(data);
    if (res?.error || !res?.data) {
      toast.error('Something went wrong', { duration: 3000 });
    } else {
      toast.success('Booking successful', { duration: 3000 });
    }
  };

  const additionalOptions = addOptions.map((item: string) => ({
    display: item,
    value: item,
  }));
  console.log(car.status === 'unavailable')

  return (
    <div className="mt-5">
      <h1 className="text-3xl font-semibold dark:text-slate-50 ">
        Booking Form
      </h1>
      <div className="mt-5">
        <Form
          onSubmit={onSubmit}
          resolver={zodResolver(bookingValidationSchema)}
          reset={true}
        >
          <FormInput name="nid" label="NID Number " type="text" />
          <FormInput name="passport" label="Passport Number " type="text" />
          <FormSelect
            name="additionalOption"
            label="Select Additional option (optional)"
            options={additionalOptions}
          />
          <FormInput
            name="drivingLicense"
            label="Driving License "
            type="text"
          />
          <button disabled = {car.status === 'unavailable'} className="mt-5 bg-secondary-color disabled:bg-gray-200 dark:bg-dark-light-secondary py-3 w-full text-white">
            Book
          </button>
        </Form>
      </div>
      <LoadingModal title="Just a moment please.." isOpen={isLoading} />
    </div>
  );
};

export default BookingForm;
