import { Controller, useFormContext } from 'react-hook-form';
type TFormTextAreaProps = {
  name: string;
  label?: string;
  height:string,
  resize?:boolean
};

const FormTextArea = ({  name, label,height,resize }: TFormTextAreaProps) => {
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
            <textarea
              className="w-full mt-1 p-2 border-2 bg-slate-100 dark:text-slate-100 dark:bg-transparent border-gray-500 dark:border-slate-200 dark:border-opacity-35  font-medium"
              {...field}
              value={field.value || ''}
              id={name}

              style={{height:height}}
            />
            {error && <span className=" text-red-700 mt-1">{error}</span>}
          </div>
        );
      }}
    />
  );
};

export default FormTextArea;
