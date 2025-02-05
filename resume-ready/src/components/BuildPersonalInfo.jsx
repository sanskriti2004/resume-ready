import React from "react";

const BuildPersonalInfo = ({
  name,
  email,
  phone,
  linkedin,
  github,
  portfolio,
}) => {
  return (
    <div className="flex flex-col justify-center ">
      <h2 className="text-xl font-bold p-2">{name}</h2>
      <div className="flex flex-row ">
        <p className="text-sm text-gray-400 p-1">{email}</p>
        <p className="text-sm text-gray-400 p-1">{phone}</p>
        <a href="{linkedin}"> Linkedin</a>
        <a href="{github}"> Github</a>
        <a href="{portfolio}"> Portfolio</a>
      </div>
    </div>
  );
};

export default BuildPersonalInfo;
