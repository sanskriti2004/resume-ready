import React, { useState } from "react";
import BuildPersonalInfo from "./BuildPersonalInfo.jsx";
const PersonalInfo = () => {
  const [nameVal, setName] = useState("");
  const [emailVal, setEmail] = useState("");
  const [phoneVal, setPhone] = useState("");
  const [linkedinVal, setLinkedin] = useState("");
  const [githubVal, setGithub] = useState("");
  const [portfolioVal, setPortfolio] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    BuildPersonalInfo({
      nameVal,
      emailVal,
      phoneVal,
      linkedinVal,
      githubVal,
      portfolioVal,
    });
  };

  return (
    <div className="flex flex-col ">
      <h2 className="text-xl font-bold p-2">Personal Info</h2>
      {/* Input boxes */}
      <div className="flex flex-row flex-wrap m-3">
        {/* Name input box */}
        <div className="flex flex-col m-1 mr-2">
          <label htmlFor="name" className="text-sm text-gray-400 p-1">
            Full Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Enter your name"
            className="bg-gray-100 w-130  p-2 rounded-xs focus:outline-none focus:shadow-md focus:border-b-cyan-600"
            required
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        {/* Email input box */}
        <div className="flex flex-col m-1 mr-2">
          <label htmlFor="email" className="text-sm text-gray-400 p-1">
            Email Id
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter your Email Id"
            className="bg-gray-100 w-130  p-2 rounded-xs focus:outline-none focus:shadow-md focus:border-b-cyan-600"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        {/* phone no input box */}
        <div className="flex flex-col m-1 mr-2">
          <label htmlFor="phone" className="text-sm text-gray-400 p-1">
            Phone Number
          </label>
          <input
            id="phone"
            type="text"
            placeholder="Enter your phone number"
            className="bg-gray-100 w-130  p-2 rounded-xs focus:outline-none focus:shadow-md focus:border-b-cyan-600"
            required
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        {/* linkedin input box */}
        <div className="flex flex-col m-1 mr-2">
          <label htmlFor="linkedin" className="text-sm text-gray-400 p-1">
            LinkedIn Profile
          </label>
          <input
            id="linkedin"
            type="text"
            placeholder="Enter your linkedin profile"
            className="bg-gray-100 w-130  p-2 rounded-xs focus:outline-none focus:shadow-md focus:border-b-cyan-600"
            onChange={(e) => setLinkedin(e.target.value)}
          />
        </div>
        {/* github input box */}
        <div className="flex flex-col m-1 mr-2">
          <label htmlFor="github" className="text-sm text-gray-400 p-1">
            Github Profile
          </label>
          <input
            id="github"
            type="text"
            placeholder="Enter your github profile"
            className="bg-gray-100 w-130  p-2 rounded-xs focus:outline-none focus:shadow-md focus:border-b-cyan-600"
            onChange={(e) => setGithub(e.target.value)}
          />
        </div>
        {/* portfolio input box */}
        <div className="flex flex-col m-1 mr-2">
          <label htmlFor="portfolio" className="text-sm text-gray-400 p-1">
            Portfolio
          </label>
          <input
            id="portfolio"
            type="text"
            placeholder="Enter your portfolio"
            className="bg-gray-100 w-130  p-2 rounded-xs focus:outline-none focus:shadow-md focus:border-b-cyan-600"
            onChange={(e) => setPortfolio(e.target.value)}
          />
        </div>
      </div>
      <button
        onClick={handleSubmit}
        className="bg-cyan-600 text-white m-3 h-10 w-30 rounded-md cursor-pointer hover:bg-cyan-800"
      >
        Save
      </button>
    </div>
  );
};

export default PersonalInfo;
