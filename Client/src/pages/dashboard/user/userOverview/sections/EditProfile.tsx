import React, { ChangeEvent, useRef, useState } from 'react';
import DashboardSectionContainer from '../../../../../compoments/container/DashboardSectionContainer';
import Form from '../../../../../compoments/form/Form';
import { TUser } from '../../../../../types';
import FormInput from '../../../../../compoments/form/FormInput';
import {
  useGetMeQuery,
  useUpdateProfileMutation,
} from '../../../../../redux/features/auth/auth.api';
import { zodResolver } from '@hookform/resolvers/zod';
import { updateProfileValidationSchema } from '../../../../../utils/validationSchema';
import axios from 'axios';
import { toast } from 'sonner';

type TImage = {
  objectUrl: string;
  file: File;
};

const EditProfile = () => {
  const [newProfilePhoto, setProfilePhoto] = useState<TImage | null>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);

  const { data } = useGetMeQuery(undefined);
  const user = data?.data;

  const openProfileImageInput = () => {
    if (imageInputRef.current) {
      imageInputRef.current.click();
    }
  };

  const profileImageInputOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    console.log(files);
    if (files?.length) {
      const file = files[0];
      const objectUrl = URL.createObjectURL(file);
      setProfilePhoto({ objectUrl, file });
    }
  };

  const defaultValues = {
    name: user?.name,
    phone: user?.phone,
    address: user?.address,
  };

  const [updateProfile, { isLoading }] = useUpdateProfileMutation();

  const onSubmit = async (values: any) => {
    for (const key in values) {
      if (!values[key]) {
        delete values[key];
      }
    }
    const data = { ...values };

    if (newProfilePhoto) {
      const res = await axios.post(
        `https://api.imgbb.com/1/upload?key=c9c302a9d5cee64c8eb4dde4d9803027`,
        { image: newProfilePhoto?.file },
        {
          headers: {
            'content-type': 'multipart/form-data',
          },
        }
      );
      data.profilePhoto = res.data.data.display_url;
    }
    const res = await updateProfile(data);
    if (res?.error || !res?.data.success) {
      toast.error('Something went wrong', { duration: 3000 });
    } else {
      toast.success('Profile Updated Successfully', { duration: 3000 });
    }
  };

  return (
    <DashboardSectionContainer>
      <div>
        <h3 className="text-2xl font-bold dark:text-slate-50">
          Update Profile
        </h3>
        <div className="mt-5">
          <div className="flex justify-center items-center flex-col gap-3">
            <img
              className="size-28 md:size-32 rounded-full border dark:border-none"
              src={
                newProfilePhoto?.objectUrl ||
                user?.profilePhoto ||
                'https://media.lordicon.com/icons/wired/flat/21-avatar.gif'
              }
              alt=""
            />
            <input
              ref={imageInputRef}
              onChange={profileImageInputOnChange}
              className="hidden"
              type="file"
              name=""
              id=""
            />
            <button
              onClick={openProfileImageInput}
              className="px-3 py-1 bg-secondary-color text-[0.9rem] text-white rounded-full"
            >
              Change Picture
            </button>
          </div>

          <Form
            onSubmit={onSubmit}
            defaultValues={defaultValues}
            resolver={zodResolver(updateProfileValidationSchema)}
          >
            <FormInput name="name" label="Name" type="text" />
            <FormInput name="phone" label="Phone" type="text" />
            <FormInput name="address" label="Address" type="text" />
            <div className="mt-5 text-end">
              <button className="px-4 py-2  bg-secondary-color text-white">
                Update
              </button>
            </div>
          </Form>
        </div>
      </div>
    </DashboardSectionContainer>
  );
};

export default EditProfile;
