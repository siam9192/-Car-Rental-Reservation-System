import React, { useState } from 'react';
import FormInput from '../../compoments/form/FormInput';
import Form from '../../compoments/form/Form';
import { toast } from 'sonner';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (values:any) => {
    toast.success('Submited successfully')
  };

  return (
   <div className='h-[90vh]' >
     <div className="mt-20 max-w-4xl mx-auto p-6 dark:bg-dark-light-secondary ">
      <h1 className="text-2xl font-bold mb-4 dark:text-slate-50">Contact Us</h1>
      <Form onSubmit={handleSubmit}>
        <div className="grid gap-4 md:grid-cols-2">
          <div>

            <FormInput name='Name' label='Name' type='text'/>
          </div>
          <div>
          <FormInput name='email' label='Email' type='email'/>
          </div>
        </div>
        <div className="mt-4">
          <FormInput name='subject' label='Subject' type='text'/>
        </div>
        <div className="mt-4">
          <label className="block text-sm font-medium  text-gray-700 dark:text-slate-100" htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border  text-gray-700  rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          ></textarea>
        </div>
        <div className="mt-6 flex justify-end">
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-secondary-color shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Send Message
          </button>
        </div>
      </Form>
    </div>
   </div>
  );
};

export default ContactUs;
