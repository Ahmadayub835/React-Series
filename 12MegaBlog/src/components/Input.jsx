import React, { useId } from "react";

const Input = React.forwardRef(function Input({ 
//this is the forward ref hook which is used for input to send data from one components to another.
  label,
  type = "text",
  className = "",
  ...props
} , ref ) //this ref is made to transfer reference from this component to other. 
{
    const id  = useId()
  return (
    <div className="w-full">
      {label && <label 
      className="inline-block mb-1 pl-1"
      htmlFor={id}>
        {label}
        </label>
        } 

      <input
        type={type}
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
        id={id}
        {...props}
        ref={ref}
      />
      
    </div>
  );
});

export default Input;
