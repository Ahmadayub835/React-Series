import React, { useId } from "react";

function Select({ 
    options = [],  
// This array is intended to contain the values that users can choose from when interacting with the Select component.
    label, 
    className = "", 
    ...props }, ref) 
    {
  const id = useId();

  return (
    <div className="w-full">
      {label && <label className="" htmlFor={id}></label>}

      <select
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
        id={id}
        ref={ref}
        {...props}
      >
        {options?.map((option) => ( 
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default React.forwardRef(Select);
//we can use react hooks like this way
//? means if the value is true in options it means if the option is true then show the option key.