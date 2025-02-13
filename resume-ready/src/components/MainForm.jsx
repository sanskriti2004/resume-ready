import React, { useState, useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const MainForm = () => {
  // for personal info
  const [nameVal, setName] = useState("");
  const [emailVal, setEmail] = useState("");
  const [phoneVal, setPhone] = useState("");
  const [linkedinVal, setLinkedin] = useState("");
  const [githubVal, setGithub] = useState("");
  const [portfolioVal, setPortfolio] = useState("");

  // for education info
  const [schoolVal_1, setSchool_1] = useState("");
  const [cityVal_1, setCity_1] = useState("");
  const [countryVal_1, setCountry_1] = useState("");
  const [degreeVal_1, setDegree_1] = useState("");
  const [startDateVal_1, setGraduation_1] = useState("");
  const [endDateVal_1, setEndDate_1] = useState("");

  const [schoolVal_2, setSchool_2] = useState("");
  const [cityVal_2, setCity_2] = useState("");
  const [countryVal_2, setCountry_2] = useState("");
  const [degreeVal_2, setDegree_2] = useState("");
  const [startDateVal_2, setGraduation_2] = useState("");
  const [endDateVal_2, setEndDate_2] = useState("");

  const [schoolVal_3, setSchool_3] = useState("");
  const [cityVal_3, setCity_3] = useState("");
  const [countryVal_3, setCountry_3] = useState("");
  const [degreeVal_3, setDegree_3] = useState("");
  const [startDateVal_3, setGraduation_3] = useState("");
  const [endDateVal_3, setEndDate_3] = useState("");

  return (
    <div className="p-4 flex flex-col">
      <h3 className="text-2xl font-normal text-center p-3">
        Unlock your next big opportunity—start here!
      </h3>
      {/* PERSONAL INFO */}
      <div className="flex flex-col mb-3 ">
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
              value={nameVal}
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
              value={emailVal}
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
              value={phoneVal}
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
              value={linkedinVal}
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
              value={githubVal}
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
              value={portfolioVal}
              onChange={(e) => setPortfolio(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* EDUCATION INFO */}
      <div className="flex flex-col mb-3">
        <h2 className="text-xl font-bold p-2">Education</h2>
        {/* Input boxes */}
        <div className="flex flex-row flex-wrap m-3">
          {/* Name input box */}
          <div className="flex flex-col m-1 mr-2">
            <label htmlFor="schoolName_1" className="text-sm text-gray-400 p-1">
              School/University
            </label>
            <input
              id="schoolName_1"
              type="text"
              placeholder="Enter name of school or university"
              className="bg-gray-100 w-130  p-2 rounded-xs focus:outline-none focus:shadow-md focus:border-b-cyan-600"
              required
              value={schoolVal_1}
              onChange={(e) => setSchool_1(e.target.value)}
            />
          </div>
          {/* Email input box */}
          <div className="flex flex-col m-1 mr-2">
            <label htmlFor="cityName_1" className="text-sm text-gray-400 p-1">
              City
            </label>
            <input
              id="cityName_1"
              type="text"
              placeholder="Enter city"
              className="bg-gray-100 w-130  p-2 rounded-xs focus:outline-none focus:shadow-md focus:border-b-cyan-600"
              required
              value={cityVal_1}
              onChange={(e) => setCity_1(e.target.value)}
            />
          </div>
          {/* phone no input box */}
          <div className="flex flex-col m-1 mr-2">
            <label
              htmlFor="countryName_1"
              className="text-sm text-gray-400 p-1"
            >
              Country
            </label>
            <input
              id="countryName_1"
              type="text"
              placeholder="Enter country"
              className="bg-gray-100 w-130  p-2 rounded-xs focus:outline-none focus:shadow-md focus:border-b-cyan-600"
              required
              value={countryVal_1}
              onChange={(e) => setCountry_1(e.target.value)}
            />
          </div>
          {/* linkedin input box */}
          <div className="flex flex-col m-1 mr-2">
            <label htmlFor="degreeName_1" className="text-sm text-gray-400 p-1">
              Degree
            </label>
            <input
              id="degreeName_1"
              type="text"
              placeholder="Enter degree/field of study"
              className="bg-gray-100 w-130  p-2 rounded-xs focus:outline-none focus:shadow-md focus:border-b-cyan-600"
              value={degreeVal_1}
              onChange={(e) => setDegree_1(e.target.value)}
            />
          </div>
          {/* github input box */}
          <div className="flex flex-col m-1 mr-2">
            <label htmlFor="startYear_1" className="text-sm text-gray-400 p-1">
              Start Year
            </label>
            <input
              id="startYear_1"
              type="number"
              placeholder="Enter start year"
              className="bg-gray-100 w-130  p-2 rounded-xs focus:outline-none focus:shadow-md focus:border-b-cyan-600"
              value={startDateVal_1}
              onChange={(e) => setGraduation_1(e.target.value)}
            />
          </div>
          {/* portfolio input box */}
          <div className="flex flex-col m-1 mr-2">
            <label htmlFor="endYear_1" className="text-sm text-gray-400 p-1">
              End Year
            </label>
            <input
              id="endYear_1"
              type="number"
              placeholder="Enter end year"
              className="bg-gray-100 w-130  p-2 rounded-xs focus:outline-none focus:shadow-md focus:border-b-cyan-600"
              value={endDateVal_1}
              onChange={(e) => setEndDate_1(e.target.value)}
            />
          </div>
        </div>

        {/* Input boxes */}
        <div className="flex flex-row flex-wrap m-3">
          {/* Name input box */}
          <div className="flex flex-col m-1 mr-2">
            <label htmlFor="schoolName_2" className="text-sm text-gray-400 p-1">
              School/University
            </label>
            <input
              id="schoolName_2"
              type="text"
              placeholder="Enter name of school or university"
              className="bg-gray-100 w-130  p-2 rounded-xs focus:outline-none focus:shadow-md focus:border-b-cyan-600"
              required
              value={schoolVal_2}
              onChange={(e) => setSchool_2(e.target.value)}
            />
          </div>
          {/* Email input box */}
          <div className="flex flex-col m-1 mr-2">
            <label htmlFor="cityName_2" className="text-sm text-gray-400 p-1">
              City
            </label>
            <input
              id="cityName_2"
              type="text"
              placeholder="Enter city"
              className="bg-gray-100 w-130  p-2 rounded-xs focus:outline-none focus:shadow-md focus:border-b-cyan-600"
              required
              value={cityVal_2}
              onChange={(e) => setCity_2(e.target.value)}
            />
          </div>
          {/* phone no input box */}
          <div className="flex flex-col m-1 mr-2">
            <label
              htmlFor="countryName_2"
              className="text-sm text-gray-400 p-1"
            >
              Country
            </label>
            <input
              id="countryName_2"
              type="text"
              placeholder="Enter country"
              className="bg-gray-100 w-130  p-2 rounded-xs focus:outline-none focus:shadow-md focus:border-b-cyan-600"
              required
              value={countryVal_2}
              onChange={(e) => setCountry_2(e.target.value)}
            />
          </div>
          {/* linkedin input box */}
          <div className="flex flex-col m-1 mr-2">
            <label htmlFor="degreeName_2" className="text-sm text-gray-400 p-1">
              Degree
            </label>
            <input
              id="degreeName_2"
              type="text"
              placeholder="Enter degree/field of study"
              className="bg-gray-100 w-130  p-2 rounded-xs focus:outline-none focus:shadow-md focus:border-b-cyan-600"
              value={degreeVal_2}
              onChange={(e) => setDegree_2(e.target.value)}
            />
          </div>
          {/* github input box */}
          <div className="flex flex-col m-1 mr-2">
            <label htmlFor="startYear_2" className="text-sm text-gray-400 p-1">
              Start Year
            </label>
            <input
              id="startYear_2"
              type="number"
              placeholder="Enter start year"
              className="bg-gray-100 w-130  p-2 rounded-xs focus:outline-none focus:shadow-md focus:border-b-cyan-600"
              value={startDateVal_2}
              onChange={(e) => setGraduation_2(e.target.value)}
            />
          </div>
          {/* portfolio input box */}
          <div className="flex flex-col m-1 mr-2">
            <label htmlFor="endYear_2" className="text-sm text-gray-400 p-1">
              End Year
            </label>
            <input
              id="endYear_2"
              type="number"
              placeholder="Enter end year"
              className="bg-gray-100 w-130  p-2 rounded-xs focus:outline-none focus:shadow-md focus:border-b-cyan-600"
              value={endDateVal_2}
              onChange={(e) => setEndDate_2(e.target.value)}
            />
          </div>
        </div>

        {/* Input boxes */}
        <div className="flex flex-row flex-wrap m-3">
          {/* Name input box */}
          <div className="flex flex-col m-1 mr-2">
            <label htmlFor="schoolName_3" className="text-sm text-gray-400 p-1">
              School/University
            </label>
            <input
              id="schoolName_3"
              type="text"
              placeholder="Enter name of school or university"
              className="bg-gray-100 w-130  p-2 rounded-xs focus:outline-none focus:shadow-md focus:border-b-cyan-600"
              required
              value={schoolVal_3}
              onChange={(e) => setSchool_3(e.target.value)}
            />
          </div>
          {/* Email input box */}
          <div className="flex flex-col m-1 mr-2">
            <label htmlFor="cityName_3" className="text-sm text-gray-400 p-1">
              City
            </label>
            <input
              id="cityName_3"
              type="text"
              placeholder="Enter city"
              className="bg-gray-100 w-130  p-2 rounded-xs focus:outline-none focus:shadow-md focus:border-b-cyan-600"
              required
              value={cityVal_3}
              onChange={(e) => setCity_3(e.target.value)}
            />
          </div>
          {/* phone no input box */}
          <div className="flex flex-col m-1 mr-2">
            <label
              htmlFor="countryName_3"
              className="text-sm text-gray-400 p-1"
            >
              Country
            </label>
            <input
              id="countryName_3"
              type="text"
              placeholder="Enter country"
              className="bg-gray-100 w-130  p-2 rounded-xs focus:outline-none focus:shadow-md focus:border-b-cyan-600"
              required
              value={countryVal_3}
              onChange={(e) => setCountry_3(e.target.value)}
            />
          </div>
          {/* linkedin input box */}
          <div className="flex flex-col m-1 mr-2">
            <label htmlFor="degreeName_3" className="text-sm text-gray-400 p-1">
              Degree
            </label>
            <input
              id="degreeName_3"
              type="text"
              placeholder="Enter degree/field of study"
              className="bg-gray-100 w-130  p-2 rounded-xs focus:outline-none focus:shadow-md focus:border-b-cyan-600"
              value={degreeVal_3}
              onChange={(e) => setDegree_3(e.target.value)}
            />
          </div>
          {/* github input box */}
          <div className="flex flex-col m-1 mr-2">
            <label htmlFor="startYear_3" className="text-sm text-gray-400 p-1">
              Start Year
            </label>
            <input
              id="startYear_3"
              type="number"
              placeholder="Enter start year"
              className="bg-gray-100 w-130  p-2 rounded-xs focus:outline-none focus:shadow-md focus:border-b-cyan-600"
              value={startDateVal_3}
              onChange={(e) => setGraduation_3(e.target.value)}
            />
          </div>
          {/* portfolio input box */}
          <div className="flex flex-col m-1 mr-2">
            <label htmlFor="endYear_3" className="text-sm text-gray-400 p-1">
              End Year
            </label>
            <input
              id="endYear_3"
              type="number"
              placeholder="Enter end year"
              className="bg-gray-100 w-130  p-2 rounded-xs focus:outline-none focus:shadow-md focus:border-b-cyan-600"
              value={endDateVal_3}
              onChange={(e) => setEndDate_3(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* resume sheet */}
      <div className="flex justify-center flex-col items-center p-10 font-['Times_New_Roman'] bg-blue-100">
        <div className="w-[210mm] h-[297mm] bg-white shadow-2xl p-7">
          {/* personal info */}
          <div className="flex flex-col justify-center ">
            <h2 className="text-3xl text-center font-bold ">{nameVal}</h2>
            <div className="flex flex-row justify-center gap-2 items-center ">
              <p className="text-sm  ">{phoneVal}</p>
              <span>{emailVal === "" ? "" : "|"}</span>
              <a href="mailto:{emailVal}" className="text-sm text-blue-700">
                {emailVal}
              </a>
              <span>{linkedinVal === "" ? "" : "|"}</span>
              <a
                href={linkedinVal}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700"
              >
                {linkedinVal === "" ? "" : "Linkedin"}
              </a>
              <span>{githubVal === "" ? "" : "|"}</span>
              <a
                href={githubVal}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700"
              >
                {githubVal === "" ? "" : "Github"}
              </a>
              <span>{portfolioVal === "" ? "" : "|"}</span>
              <a
                href={portfolioVal}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700"
              >
                {portfolioVal === "" ? "" : "Portfolio"}
              </a>
            </div>
          </div>

          {/* education number 1*/}
          <div className="flex flex-col justify-start  mt-4">
            <h2 className="text-xl py-1 ">Education</h2>
            <hr />
            <div className="flex flex-col px-3 py-0.5">
              <div className="flex flex-row justify-between p-0 ">
                <span className="font-bold text-lg">
                  {schoolVal_1 === "" ? "" : schoolVal_1}
                </span>
                <div>
                  <span>{cityVal_1 === "" ? "" : cityVal_1}</span>
                  <span>{countryVal_1 === "" ? "" : ", " + countryVal_1}</span>
                </div>
              </div>
              <div className="flex flex-row justify-between mt-[-5px]">
                <span>{degreeVal_1 === "" ? "" : degreeVal_1}</span>
                <div>
                  <span>
                    {startDateVal_1 === "" ? "" : startDateVal_1 + "-"}
                  </span>
                  <span>{endDateVal_1 === "" ? "" : endDateVal_1}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col px-3 py-0.5">
              <div className="flex flex-row justify-between p-0 ">
                <span className="font-bold text-lg">
                  {schoolVal_2 === "" ? "" : schoolVal_2}
                </span>
                <div>
                  <span>{cityVal_2 === "" ? "" : cityVal_2}</span>
                  <span>{countryVal_2 === "" ? "" : ", " + countryVal_2}</span>
                </div>
              </div>
              <div className="flex flex-row justify-between mt-[-5px]">
                <span>{degreeVal_2 === "" ? "" : degreeVal_2}</span>
                <div>
                  <span>
                    {startDateVal_2 === "" ? "" : startDateVal_2 + "-"}
                  </span>
                  <span>{endDateVal_2 === "" ? "" : endDateVal_2}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col px-3 py-0.5 ">
              <div className="flex flex-row justify-between p-0 ">
                <span className="font-bold text-lg">
                  {schoolVal_3 === "" ? "" : schoolVal_3}
                </span>
                <div>
                  <span>{cityVal_3 === "" ? "" : cityVal_3}</span>
                  <span>{countryVal_3 === "" ? "" : ", " + countryVal_3}</span>
                </div>
              </div>
              <div className="flex flex-row justify-between mt-[-5px]">
                <span>{degreeVal_3 === "" ? "" : degreeVal_3}</span>
                <div>
                  <span>
                    {startDateVal_3 === "" ? "" : startDateVal_3 + "-"}
                  </span>
                  <span>{endDateVal_3 === "" ? "" : endDateVal_3}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainForm;
