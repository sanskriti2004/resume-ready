import React, { useState } from "react";
import PersonalInfo from "./PersonalInfo.jsx";
import Resume from "./Resume.jsx";

const MainForm = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    experience: "",
  });

  return (
    <div className="p-4">
      <h3 className="text-2xl font-normal text-center p-3">
        Unlock your next big opportunity—start here!
      </h3>
      <PersonalInfo />
      <Resume />
    </div>
  );
};

export default MainForm;
