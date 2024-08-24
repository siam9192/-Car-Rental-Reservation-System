import { Controller } from 'react-hook-form';
type TInputProps = {
  type: string;
  name: string;
  label?: string;
};

const FormInput = ({ type, name, label }: TInputProps) => {
  return (
    <Controller
      name={name}
      render={({ field }) => (
        <div className="mt-2">
          {label && (
            <label className=" dark:text-slate-100 font-medium" htmlFor={name}>
              {label}
            </label>
          )}
          <input
            className="w-full p-2 border-2 bg-slate-100 dark:text-slate-100 dark:bg-transparent border-gray-500 dark:border-slate-200 dark:border-opacity-35 rounded-md font-medium"
            {...field}
            type={type}
            name={name}
            id={name}
          />
        </div>
      )}
    />
  );
};

export default FormInput;
