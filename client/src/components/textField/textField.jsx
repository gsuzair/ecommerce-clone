import React from 'react'

export const TextField = ({ type = "text", placeholder, name, value, onChange, required = true, className = "" }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      className={className}
    />
  );
};

export default TextField;