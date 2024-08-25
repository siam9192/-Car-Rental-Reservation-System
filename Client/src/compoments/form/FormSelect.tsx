import { Controller, useFormContext } from 'react-hook-form';
type TOption = { display: string | number; value: string | number };
type TFormSelectProps = {
  name: string;
  label?: string;
  options: TOption[];
};

const FormSelect = ({ name, label, options }: TFormSelectProps) => {
  const {
    formState: { errors },
  } = useFormContext();
  const error = errors[name]?.message?.toString();
  return (
    <Controller
      name={name}
      render={({ field }) => {
        return (
          <div className="mt-2">
            {label && (
              <label
                className=" dark:text-slate-100 font-medium"
                htmlFor={name}
              >
                {label}
              </label>
            )}
            <select
              className="w-full mt-1 p-2 border-2 bg-slate-100 dark:bg-dark-light-secondary dark:text-slate-100 dark:bg-transparent  border-gray-500 dark:border-slate-200 dark:border-opacity-35  font-medium"
              {...field}
              value={field.value || ''}
              id={name}
            >
              {options.map((option, index) => (
                <option className='dark:bg-black' value={option.value} key={index}>{option.display}</option>
              ))}
            </select>
            {error && <span className=" text-red-700 mt-1">{error}</span>}
          </div>
        );
      }}
    />
  );
};

export default FormSelect;
