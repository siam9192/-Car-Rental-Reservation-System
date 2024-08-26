import { useGetCarQuery } from '../../../redux/features/Car/Car.api';
import { useParams } from 'react-router-dom';
import { ChangeEvent, KeyboardEvent, useEffect, useRef, useState } from 'react';
import Form from '../../../compoments/form/Form';
import FormInput from '../../../compoments/form/FormInput';
import FormSelect from '../../../compoments/form/FormSelect';
import FormTextArea from '../../../compoments/form/FormTextArea';
import { carFeatures, insurances, locations } from '../../../utils/data';
import LoadingModal from '../../../compoments/modal/LoadingModal';
import {
  useAddCarMutation,
  useUpdateCarMutation,
} from '../../../redux/features/admin/CarManagement.api';
import { zodResolver } from '@hookform/resolvers/zod';
import { addCarValidationSchema } from '../../../utils/validationSchema';
import { toast } from 'sonner';
import { set } from 'react-hook-form';
const UpdateCar = () => {
  const { id } = useParams();

  const [imagesUrl, setImagesUrl] = useState<string[]>([]);
  const [isElectric, setIsElectric] = useState(false);
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [selectedInsurances, setSelectedInsurances] = useState<string[]>([]);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const imageUrlInputRef = useRef<HTMLInputElement>(null);
  const carSeatOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => ({
    display: item,
    value: item,
  }));

  const { data, isLoading: carLoading, refetch } = useGetCarQuery(id);
  const car = data?.data;

  useEffect(() => {
    if (!id) {
      throw new Error('Something went wrong');
    }

    if (car) {
      setIsElectric(car.isElectric);
      setSelectedFeatures(car.features);
      setSelectedLocations(car.locations);
      setSelectedInsurances(car.insurances);
      setImagesUrl(car.images);
    }
  }, [car]);

  const handelSetImageUrl = (url: string) => {
    setImagesUrl([...imagesUrl, url]);
  };

  const addImageOnClickButton = () => {
    if (imageUrlInputRef.current) {
      const value = imageUrlInputRef.current.value;
      if (value) {
        handelSetImageUrl(value);
        imageUrlInputRef.current.value = '';
      }
    }
  };
  const addImageOnClickEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    const key = e.key;
    const value = e.currentTarget.value;
    if (!value) {
      return;
    }
    if (key === 'Enter') {
      handelSetImageUrl(value);
      e.currentTarget.value = '';
    }
  };

  const handelRemoveImage = (index: number) => {
    const arr = [...imagesUrl];
    arr.splice(index, 1);
    setImagesUrl([...arr]);
  };

  const clearUrlInput = () => {
    if (imageUrlInputRef.current) {
      imageUrlInputRef.current.value = '';
    }
  };

  const handelSelectLocation = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target;
    if (target.checked) {
      setSelectedLocations([...selectedLocations, target.value]);
    } else {
      const arr = selectedLocations;
      const index = arr.indexOf(target.value);
      arr.splice(index, 1);
      setSelectedLocations([...arr]);
    }
  };
  const handelSelectInsurance = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target;
    if (target.checked) {
      setSelectedInsurances([...selectedInsurances, target.value]);
    } else {
      const arr = selectedInsurances;
      const index = arr.indexOf(target.value);
      arr.splice(index, 1);
      setSelectedInsurances([...arr]);
    }
  };
  const handelSelectFeature = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target;
    if (target.checked) {
      setSelectedFeatures([...selectedFeatures, target.value]);
    } else {
      const arr = selectedFeatures;
      const index = arr.indexOf(target.value);
      arr.splice(index, 1);
      setSelectedFeatures([...arr]);
    }
  };

  const handelSetIsElectric = (e: ChangeEvent<HTMLInputElement>) => {
    setIsElectric(e.currentTarget.checked);
  };
  const [updateCar, { isLoading }] = useUpdateCarMutation();

  // Form submit function
  const onSubmit = async (values: any) => {
    const data = {
      ...values,
      images: [...imagesUrl],
      isElectric,
      locations: selectedLocations,
      features: selectedFeatures,
      insurances: selectedInsurances,
      seats: Number(values.seats),
      pricePerHour: Number(values.pricePerHour),
    };

    const res = await updateCar({ id, payload: data });
    if (res?.error || !res?.data) {
      toast.error('Something went wrong', { duration: 3000 });
    } else {
      toast.success('Car Updated successfully', { duration: 3000 });
    }
  };

  if (carLoading) {
    return <div></div>;
  }

  return (
    <section>
      <h1 className="text-3xl font-bold dark:text-slate-50">Update Car</h1>
      <div className="mt-5 bg-white dark:bg-dark-light-secondary p-5 md:p-10 shadow">
        <Form
          onSubmit={onSubmit}
          resolver={zodResolver(addCarValidationSchema)}
          defaultValues={car}
        >
          <div className="grid grid-cols-2 gap-5">
            <FormInput name="name" label="Car Name" type="text" />
            <FormInput name="brand" label="Brand Name" type="text" />
          </div>

          <div className="mt-5 grid grid-cols-3 gap-5">
            <FormSelect
              name="seats"
              label="Car Seats"
              options={carSeatOptions}
            />
            <FormInput
              name="pricePerHour"
              label="Price Per Hour"
              type="number"
            />
            <FormInput name="color" label="Car Color" type="text" />
          </div>

          {/* Select features */}
          <div className="mt-5 ">
            <h6 className="mb-1 dark:text-slate-100">Select Features</h6>
            <div className="flex items-center gap-2 flex-wrap">
              {carFeatures.map((feature, index) => {
                return (
                  <div key={index} className="flex items-center gap-2 mt-5">
                    <input
                      onChange={handelSelectFeature}
                      defaultChecked={car?.features.includes(feature)}
                      type="checkbox"
                      value={feature}
                      className="size-5 accent-secondary-color"
                    />
                    <label htmlFor="" className="dark:text-slate-100">
                      {feature}
                    </label>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Select Locations */}
          <div className="mt-5 ">
            <h6 className="mb-1 dark:text-slate-100 font-medium">
              Select Locations
            </h6>
            <div className="flex items-center gap-2 flex-wrap">
              {locations.map((location, index) => {
                return (
                  <div key={index} className="flex items-center gap-2 mt-5">
                    <input
                      onChange={handelSelectLocation}
                      defaultChecked={car?.locations.includes(location)}
                      type="checkbox"
                      value={location}
                      className="size-5 accent-secondary-color"
                    />
                    <label htmlFor="" className="dark:text-slate-100">
                      {location}
                    </label>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Select Insurance options */}
          <div className="mt-5 ">
            <h6 className="mb-1 dark:text-slate-100">Select Insurances</h6>
            <div className="flex items-center gap-2 flex-wrap">
              {insurances.map((insurance, index) => {
                return (
                  <div key={index} className="flex items-center gap-2 mt-5">
                    <input
                      onChange={handelSelectInsurance}
                      defaultChecked={car?.insurances.includes(insurance)}
                      type="checkbox"
                      value={insurance}
                      className="size-5 accent-secondary-color"
                    />
                    <label htmlFor="" className="dark:text-slate-100">
                      {insurance}
                    </label>
                  </div>
                );
              })}
            </div>
          </div>
          {/* Select Car type */}
          <div className="mt-5">
            <h6 className="mb-1 dark:text-slate-100 font-medium">Car Type</h6>
            <div className="flex items-center gap-2">
              <input
                onChange={handelSetIsElectric}
                type="checkbox"
                className="size-5 accent-secondary-color"
              />
              <label htmlFor="" className="dark:text-slate-100">
                Electric Car
              </label>
            </div>
          </div>
          <div className="mt-5">
            <FormTextArea
              name="description"
              label="Description"
              height="250px"
            />
          </div>

          {/*  Added images Preview*/}
          <div className=" mt-5 ">
            <h6 className="mb-1 dark:text-slate-100 font-medium">
              Added Images ({imagesUrl.length})
            </h6>
            <div className="flex flex-wrap gap-3">
              {imagesUrl.map((url, index) => {
                return (
                  <div
                    onDoubleClick={() => handelRemoveImage(index)}
                    className="size-40 hover:cursor-pointer"
                  >
                    <img src={url} key={index} className="w-full" alt="" />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Image url input */}
          <div className=" mt-5">
            <h6 className="mb-1 dark:text-slate-100 font-medium">
              Add Image By URL
            </h6>
            <input
              ref={imageUrlInputRef}
              onKeyDown={addImageOnClickEnter}
              placeholder="Enter image URL"
              className="w-full mt-1 p-2 border-2  dark:text-slate-100 dark:bg-transparent border-gray-500 dark:border-slate-200 dark:border-opacity-35  font-medium"
              type="text"
            />
            <div className="text-end space-x-2">
              <button
                type="button"
                onClick={addImageOnClickButton}
                className=" bg-secondary-color text-white px-4 py-2 mt-2"
              >
                Add Image
              </button>
              <button
                type="button"
                onClick={clearUrlInput}
                className=" bg-red-500 text-white px-4 py-2 mt-2"
              >
                Clear
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="mt-5 w-full py-3 bg-primary-color text-white"
          >
            Post Car
          </button>
        </Form>
      </div>
      <LoadingModal title="Just a moment please..." isOpen={isLoading} />
    </section>
  );
};

export default UpdateCar;
