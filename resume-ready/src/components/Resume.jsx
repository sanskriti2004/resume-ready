import React, { useRef } from "react";
import BuildPersonalInfo from "./BuildPersonalInfo.jsx";
const Resume = () => {
  const resumeRef = useRef(); // Reference to the resume section

  return (
    <div className="flex justify-center flex-col items-center p-10 font-['Times_New_Roman'] ">
      <div className="w-[210mm] h-[297mm] bg-white shadow-2xl p-7">
        <BuildPersonalInfo />
      </div>
    </div>
  );
};

export default Resume;
