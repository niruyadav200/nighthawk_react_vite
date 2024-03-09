import React, { FC, useState, ChangeEvent } from 'react';

interface FormInputProps {
  label: string;
  errorMessage: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  id: Number;
  [key: string]: any;
}

const FormInput: FC<FormInputProps> = (props) => {
  const [focused, setFocused] = useState<boolean>(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    setFocused(true);
  };

  return (
    <div className="mb-3">
      <label htmlFor={label} className="form-label">
        {label}
      </label>
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() =>
          inputProps.name === "confirmPassword" && setFocused(true)
        }
        // focused={focused.toString()}
        className="form-control"
      />
      <span>{errorMessage}</span>
    </div>
  );
};

export default FormInput;