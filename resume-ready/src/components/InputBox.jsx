import React from "react";

const InputBox = ({
  IPtype = "text",
  IPplaceholder = "Name",
  IPlabel = "",
}) => {
  return (
    <div className="flex flex-col m-3">
      <label htmlFor={IPplaceholder} className="text-sm text-gray-400 p-1">
        {IPlabel}
      </label>
      <input
        id={IPplaceholder}
        type={IPtype}
        placeholder={IPplaceholder}
        className="bg-gray-100 w-130  p-2 rounded-xs focus:outline-none focus:shadow-md focus:border-b-cyan-600"
        required
      />
    </div>
  );
};

export default InputBox;
