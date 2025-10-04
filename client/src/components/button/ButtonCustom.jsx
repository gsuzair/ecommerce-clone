import React from 'react'

const ButtonCustom = ({ type = "button", className = "", onClick, children, ...rest }) => {
  return (
    <button type={type} className={className} onClick={onClick} {...rest}>
      {children}
    </button>
  );
};

export default ButtonCustom