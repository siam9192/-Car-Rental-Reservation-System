import React from 'react';
import Form from '../../../compoments/form/Form';
import FormInput from '../../../compoments/form/FormInput';

const BookingForm = () => {
  const onSubmit = () => {};
  return (
    <div className="bg-white dark:bg-dark-light-secondary p-10 shadow">
      <h1 className="text-3xl font-semibold dark:text-slate-50">
        Driver Details
      </h1>
      <div className="mt-5">
        <Form onSubmit={onSubmit}>
          <div className="grid grid-cols-1  gap-3">
            <FormInput name="name" label="Name" type="text" />
            <FormInput name="name" label="Phone" type="text" />
          </div>
          <div className="grid grid-cols-1  gap-3">
            <FormInput name="email" label="Email address" type="text" />
            <FormInput name="address" label="Address" type="text" />
          </div>
        </Form>
      </div>
    </div>
  );
};

export default BookingForm;
