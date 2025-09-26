import React from 'react'

const button = ({ type = "button", className = "", onClick, children }) => {
  return (
    <button type={type} className={className} onClick={onClick}>
			{children}
		</button>
  )
}

export default button