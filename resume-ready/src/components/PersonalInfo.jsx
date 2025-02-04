import React from "react";
import InputBox from "./InputBox.jsx";
const PersonalInfo = () => {
  return (
    <div>
      <h2 className="text-xl font-bold p-2">Personal Info</h2>
      <div className="flex flex-row flex-wrap">
        <InputBox IPtype="text" IPplaceholder="Name" IPlabel="Full Name" />
        <InputBox
          IPtype="number"
          IPplaceholder="Phone Number"
          IPlabel="Phone Number"
        />
        <InputBox IPtype="Email" IPplaceholder="Email" IPlabel="Email ID" />
        <InputBox
          IPtype="text"
          IPplaceholder="LinkedIn Link"
          IPlabel="LinkedIn Profile"
        />
        <InputBox
          IPtype="text"
          IPplaceholder="GitHub Link"
          IPlabel="GitHub Profile"
        />
        <InputBox
          IPtype="text"
          IPplaceholder="Portfolio Link"
          IPlabel="Your Portfolio"
        />
      </div>
    </div>
  );
};

export default PersonalInfo;
