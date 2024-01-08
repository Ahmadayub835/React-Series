import React from "react";

function Button({
  children, //content of the button
  type = "button", //this will be the button type it can be submit.
  bgcolor = "bg-blue-500", //this is the background color of the button.
  textColor = "text-white", //this is the default color of the text.
  className = "", //this is the className so we can change the styling of the button y className using tailwind etc.
  ...props 
  //This is the properties that we passed to make additional functionality in our button. instead of using className (active onclick )etc.
}) {
  return (
    //we passed all the values that we hace required in the button we can further customize them according to requirement
    <button
      className={`px-4 py-2 rounded-lg ${bgcolor} ${textColor} ${className}`}
      {...props} //with this props we can change properties of the button.
    >
      {children}
    </button>
  );
}

export default Button;
