import { FieldError } from 'react-hook-form';


export default function InputField({ 
    name, 
    label, 
    type = 'text', 
    register,
    errors,
    minlength = 3 ,
    maxlength = 50,
    placeholder,
    validation 
}: InputFieldProps){
    const initialPlaceholder = placeholder || `Please Enter ${label}`;
    const errorMessage = errors[name] && (errors[name] as FieldError).message;

  return (
    <div className="field">
      <label className="field__label">{label}</label>
      <div className="flex flex-col gap-[4px]">
        <input
            type={type}
            placeholder={initialPlaceholder}
            {...register(name, validation)}
            minLength={minlength}
            maxLength={maxlength}
            className={`field__input ${errors[name] ? 'border-red-500' : ''} focus:outline-none focus:ring-2 focus:ring-blue-500`}
        />
        {errors[name] && (
            <span className="text-red-500 text-sm">{errorMessage}</span>
        )}
      </div>
    </div>
  );
};

