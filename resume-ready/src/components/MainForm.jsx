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

  // for skills info
  const [label_1, setLabel_1] = useState("");
  const [skillList_1, setSkillList_1] = useState("");
  const [label_2, setLabel_2] = useState("");
  const [skillList_2, setSkillList_2] = useState("");
  const [label_3, setLabel_3] = useState("");
  const [skillList_3, setSkillList_3] = useState("");
  const [label_4, setLabel_4] = useState("");
  const [skillList_4, setSkillList_4] = useState("");

  // for experience
  const [positionVal_1, setPosition_1] = useState("");
  const [companyNameVal_1, setCompanyName_1] = useState("");
  const [companyCityVal_1, setCompanyCity_1] = useState("");
  const [companyCountryVal_1, setCompanyCountry_1] = useState("");
  const [companyStartDateVal_1, setCompanyStartDateVal_1] = useState("");
  const [companyEndDateVal_1, setCompanyEndDateVal_1] = useState("");
  const [companyDescriptionVal_1, setCompanyDescriptionVal_1] = useState("");

  const [positionVal_2, setPosition_2] = useState("");
  const [companyNameVal_2, setCompanyName_2] = useState("");
  const [companyCityVal_2, setCompanyCity_2] = useState("");
  const [companyCountryVal_2, setCompanyCountry_2] = useState("");
  const [companyStartDateVal_2, setCompanyStartDateVal_2] = useState("");
  const [companyEndDateVal_2, setCompanyEndDateVal_2] = useState("");
  const [companyDescriptionVal_2, setCompanyDescriptionVal_2] = useState("");

  const [positionVal_3, setPosition_3] = useState("");
  const [companyNameVal_3, setCompanyName_3] = useState("");
  const [companyCityVal_3, setCompanyCity_3] = useState("");
  const [companyCountryVal_3, setCompanyCountry_3] = useState("");
  const [companyStartDateVal_3, setCompanyStartDateVal_3] = useState("");
  const [companyEndDateVal_3, setCompanyEndDateVal_3] = useState("");
  const [companyDescriptionVal_3, setCompanyDescriptionVal_3] = useState("");

  // for projects
  const [projectName_1, setProjectName_1] = useState("");
  const [projectDescription_1, setProjectDescription_1] = useState("");
  const [projectGithubLink_1, setProjectGithubLink_1] = useState("");
  const [projectLiveLink_1, setProjectLiveLink_1] = useState("");
  const [projectStack_1, setProjectStack_1] = useState("");

  const [projectName_2, setProjectName_2] = useState("");
  const [projectDescription_2, setProjectDescription_2] = useState("");
  const [projectGithubLink_2, setProjectGithubLink_2] = useState("");
  const [projectLiveLink_2, setProjectLiveLink_2] = useState("");
  const [projectStack_2, setProjectStack_2] = useState("");

  const [projectName_3, setProjectName_3] = useState("");
  const [projectDescription_3, setProjectDescription_3] = useState("");
  const [projectGithubLink_3, setProjectGithubLink_3] = useState("");
  const [projectLiveLink_3, setProjectLiveLink_3] = useState("");
  const [projectStack_3, setProjectStack_3] = useState("");

  const [projectName_4, setProjectName_4] = useState("");
  const [projectDescription_4, setProjectDescription_4] = useState("");
  const [projectGithubLink_4, setProjectGithubLink_4] = useState("");
  const [projectLiveLink_4, setProjectLiveLink_4] = useState("");
  const [projectStack_4, setProjectStack_4] = useState("");

  // for achievements
  const [achievementTitle_1, setAchievementTitle_1] = useState(""); // achievement
  const [achievementDescription_1, setAchievementDescription_1] = useState("");

  const [achievementTitle_2, setAchievementTitle_2] = useState(""); // achievement
  const [achievementDescription_2, setAchievementDescription_2] = useState("");

  const [achievementTitle_3, setAchievementTitle_3] = useState(""); // achievement
  const [achievementDescription_3, setAchievementDescription_3] = useState("");

  const [achievementTitle_4, setAchievementTitle_4] = useState(""); // achievement
  const [achievementDescription_4, setAchievementDescription_4] = useState("");

  const createListItems = (text) => {
    return text
      .split(".")
      .map((sentence) => sentence.trim())
      .filter((sentence) => sentence)
      .map((sentence, index) => (
        <li className="text-[14px] leading-[17px]" key={index}>
          {sentence}.
        </li>
      ));
  };

  // Define the handleDownloadPdf function
  const handleDownloadPdf = () => {
    const resumeSheet = document.getElementById("resume-sheet"); // Get the resume sheet element
    if (!resumeSheet) {
      console.error("Resume sheet element not found");
      return;
    }

    html2canvas(resumeSheet)
      .then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF();
        const imgWidth = 210; // A4 width in mm
        const pageHeight = pdf.internal.pageSize.height;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        let heightLeft = imgHeight;

        let position = 0;

        // Add image to PDF and handle multiple pages if necessary
        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;

        while (heightLeft >= 0) {
          position = heightLeft - imgHeight;
          pdf.addPage();
          pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
          heightLeft -= pageHeight;
        }

        pdf.save("resume.pdf"); // Save the PDF
      })
      .catch((error) => {
        console.error("Error generating PDF: ", error);
      });
  };

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

      {/* technical skills */}
      <div className="flex flex-col mb-3">
        <h2 className="text-xl font-bold p-2">Technical Skills</h2>
        {/* Input boxes */}
        <div className="flex flex-row flex-wrap m-3">
          {/* label input box */}
          <div className="flex flex-col m-1 mr-2">
            <label
              htmlFor="skillsLabel_1"
              className="text-sm text-gray-400 p-1"
            >
              Label
            </label>
            <input
              id="skillsLabel_1"
              type="text"
              placeholder="Enter label of skill"
              className="bg-gray-100 w-130  p-2 rounded-xs focus:outline-none focus:shadow-md focus:border-b-cyan-600"
              required
              value={label_1}
              onChange={(e) => setLabel_1(e.target.value)}
            />
          </div>
          {/* skills input box */}
          <div className="flex flex-col m-1 mr-2">
            <label htmlFor="skillList_1" className="text-sm text-gray-400 p-1">
              Skills
            </label>
            <input
              id="skillList_1"
              type="text"
              placeholder="Enter skills"
              className="bg-gray-100 w-130  p-2 rounded-xs focus:outline-none focus:shadow-md focus:border-b-cyan-600"
              required
              value={skillList_1}
              onChange={(e) => setSkillList_1(e.target.value)}
            />
          </div>

          <div className="flex flex-col m-1 mr-2">
            <label
              htmlFor="skillsLabel_2"
              className="text-sm text-gray-400 p-1"
            >
              Label
            </label>
            <input
              id="skillsLabel_2"
              type="text"
              placeholder="Enter label of skill"
              className="bg-gray-100 w-130  p-2 rounded-xs focus:outline-none focus:shadow-md focus:border-b-cyan-600"
              required
              value={label_2}
              onChange={(e) => setLabel_2(e.target.value)}
            />
          </div>
          {/* skills input box */}
          <div className="flex flex-col m-1 mr-2">
            <label htmlFor="skillList_2" className="text-sm text-gray-400 p-1">
              Skills
            </label>
            <input
              id="skillList_2"
              type="text"
              placeholder="Enter skills"
              className="bg-gray-100 w-130  p-2 rounded-xs focus:outline-none focus:shadow-md focus:border-b-cyan-600"
              required
              value={skillList_2}
              onChange={(e) => setSkillList_2(e.target.value)}
            />
          </div>

          <div className="flex flex-col m-1 mr-2">
            <label
              htmlFor="skillsLabel_3"
              className="text-sm text-gray-400 p-1"
            >
              Label
            </label>
            <input
              id="skillsLabel_3"
              type="text"
              placeholder="Enter label of skill"
              className="bg-gray-100 w-130  p-2 rounded-xs focus:outline-none focus:shadow-md focus:border-b-cyan-600"
              required
              value={label_3}
              onChange={(e) => setLabel_3(e.target.value)}
            />
          </div>
          {/* skills input box */}
          <div className="flex flex-col m-1 mr-2">
            <label htmlFor="skillList_3" className="text-sm text-gray-400 p-1">
              Skills
            </label>
            <input
              id="skillList_3"
              type="text"
              placeholder="Enter skills"
              className="bg-gray-100 w-130  p-2 rounded-xs focus:outline-none focus:shadow-md focus:border-b-cyan-600"
              required
              value={skillList_3}
              onChange={(e) => setSkillList_3(e.target.value)}
            />
          </div>

          <div className="flex flex-col m-1 mr-2">
            <label
              htmlFor="skillsLabel_4"
              className="text-sm text-gray-400 p-1"
            >
              Label
            </label>
            <input
              id="skillsLabel_4"
              type="text"
              placeholder="Enter label of skill"
              className="bg-gray-100 w-130  p-2 rounded-xs focus:outline-none focus:shadow-md focus:border-b-cyan-600"
              required
              value={label_4}
              onChange={(e) => setLabel_4(e.target.value)}
            />
          </div>
          {/* skills input box */}
          <div className="flex flex-col m-1 mr-2">
            <label htmlFor="skillList_4" className="text-sm text-gray-400 p-1">
              Skills
            </label>
            <input
              id="skillList_4"
              type="text"
              placeholder="Enter skills"
              className="bg-gray-100 w-130  p-2 rounded-xs focus:outline-none focus:shadow-md focus:border-b-cyan-600"
              required
              value={skillList_4}
              onChange={(e) => setSkillList_4(e.target.value)}
            />
          </div>
        </div>

        {/* EXPERIENCE SECTION INPUTS  */}

        <div className="flex flex-col mb-3">
          <h2 className="text-xl font-bold p-2">Experience</h2>
          {/* Input boxes */}
          <div className="flex flex-row flex-wrap m-3">
            {/* Name input box */}
            <div className="flex flex-col m-1 mr-2">
              <label
                htmlFor="positionName_1"
                className="text-sm text-gray-400 p-1"
              >
                Role
              </label>
              <input
                id="positionName_1"
                type="text"
                placeholder="Enter your role"
                className="bg-gray-100 w-130  p-2 rounded-xs focus:outline-none focus:shadow-md focus:border-b-cyan-600"
                required
                value={positionVal_1}
                onChange={(e) => setPosition_1(e.target.value)}
              />
            </div>
            {/* Email input box */}
            <div className="flex flex-col m-1 mr-2">
              <label
                htmlFor="companyName_1"
                className="text-sm text-gray-400 p-1"
              >
                Company
              </label>
              <input
                id="companyName_1"
                type="text"
                placeholder="Enter company name"
                className="bg-gray-100 w-130  p-2 rounded-xs focus:outline-none focus:shadow-md focus:border-b-cyan-600"
                required
                value={companyNameVal_1}
                onChange={(e) => setCompanyName_1(e.target.value)}
              />
            </div>
            {/* phone no input box */}
            <div className="flex flex-col m-1 mr-2">
              <label
                htmlFor="compCityName_1"
                className="text-sm text-gray-400 p-1"
              >
                City
              </label>
              <input
                id="compCityName_1"
                type="text"
                placeholder="Enter city"
                className="bg-gray-100 w-130  p-2 rounded-xs focus:outline-none focus:shadow-md focus:border-b-cyan-600"
                required
                value={companyCityVal_1}
                onChange={(e) => setCompanyCity_1(e.target.value)}
              />
            </div>
            {/* linkedin input box */}
            <div className="flex flex-col m-1 mr-2">
              <label
                htmlFor="compCountryName_1"
                className="text-sm text-gray-400 p-1"
              >
                Country
              </label>
              <input
                id="compCountryName_1"
                type="text"
                placeholder="Enter country"
                className="bg-gray-100 w-130  p-2 rounded-xs focus:outline-none focus:shadow-md focus:border-b-cyan-600"
                value={companyCountryVal_1}
                onChange={(e) => setCompanyCountry_1(e.target.value)}
              />
            </div>
            {/* github input box */}
            <div className="flex flex-col m-1 mr-2">
              <label
                htmlFor="compStartYear_1"
                className="text-sm text-gray-400 p-1"
              >
                Start Year
              </label>
              <input
                id="compStartYear_1"
                type="number"
                placeholder="Enter start year"
                className="bg-gray-100 w-130  p-2 rounded-xs focus:outline-none focus:shadow-md focus:border-b-cyan-600"
                value={companyStartDateVal_1}
                onChange={(e) => setCompanyStartDateVal_1(e.target.value)}
              />
            </div>
            {/* portfolio input box */}
            <div className="flex flex-col m-1 mr-2">
              <label
                htmlFor="compEndYear_1"
                className="text-sm text-gray-400 p-1"
              >
                End Year
              </label>
              <input
                id="compEndYear_1"
                type="number"
                placeholder="Enter end year"
                className="bg-gray-100 w-130  p-2 rounded-xs focus:outline-none focus:shadow-md focus:border-b-cyan-600"
                value={companyEndDateVal_1}
                onChange={(e) => setCompanyEndDateVal_1(e.target.value)}
              />
            </div>
            <div className="flex flex-col m-1 mr-2">
              <label htmlFor="compDesc_1" className="text-sm text-gray-400 p-1">
                Description
              </label>
              <input
                id="compDesc_1"
                type="text"
                placeholder="Enter role description"
                className="bg-gray-100 w-263   p-2 rounded-xs focus:outline-none focus:shadow-md focus:border-b-cyan-600"
                value={companyDescriptionVal_1}
                onChange={(e) => setCompanyDescriptionVal_1(e.target.value)}
              />
            </div>
            {/* Email input box */}
            <div className="flex flex-col m-1 mr-2">
              <label
                htmlFor="positionName_2"
                className="text-sm text-gray-400 p-1"
              >
                Role
              </label>
              <input
                id="positionName_2"
                type="text"
                placeholder="Enter your role"
                className="bg-gray-100 w-130  p-2 rounded-xs focus:outline-none focus:shadow-md focus:border-b-cyan-600"
                required
                value={positionVal_2}
                onChange={(e) => setPosition_2(e.target.value)}
              />
            </div>
            <div className="flex flex-col m-1 mr-2">
              <label
                htmlFor="companyName_2"
                className="text-sm text-gray-400 p-1"
              >
                Company
              </label>
              <input
                id="companyName_2"
                type="text"
                placeholder="Enter company name"
                className="bg-gray-100 w-130  p-2 rounded-xs focus:outline-none focus:shadow-md focus:border-b-cyan-600"
                required
                value={companyNameVal_2}
                onChange={(e) => setCompanyName_2(e.target.value)}
              />
            </div>
            {/* phone no input box */}
            <div className="flex flex-col m-1 mr-2">
              <label
                htmlFor="compCityName_2"
                className="text-sm text-gray-400 p-1"
              >
                City
              </label>
              <input
                id="compCityName_2"
                type="text"
                placeholder="Enter city"
                className="bg-gray-100 w-130  p-2 rounded-xs focus:outline-none focus:shadow-md focus:border-b-cyan-600"
                required
                value={companyCityVal_2}
                onChange={(e) => setCompanyCity_2(e.target.value)}
              />
            </div>
            {/* linkedin input box */}
            <div className="flex flex-col m-1 mr-2">
              <label
                htmlFor="compCountryName_2"
                className="text-sm text-gray-400 p-1"
              >
                Country
              </label>
              <input
                id="compCountryName_2"
                type="text"
                placeholder="Enter country"
                className="bg-gray-100 w-130  p-2 rounded-xs focus:outline-none focus:shadow-md focus:border-b-cyan-600"
                value={companyCountryVal_2}
                onChange={(e) => setCompanyCountry_2(e.target.value)}
              />
            </div>
            {/* github input box */}
            <div className="flex flex-col m-1 mr-2">
              <label
                htmlFor="compStartYear_2"
                className="text-sm text-gray-400 p-1"
              >
                Start Year
              </label>
              <input
                id="compStartYear_2"
                type="number"
                placeholder="Enter start year"
                className="bg-gray-100 w-130  p-2 rounded-xs focus:outline-none focus:shadow-md focus:border-b-cyan-600"
                value={companyStartDateVal_2}
                onChange={(e) => setCompanyStartDateVal_2(e.target.value)}
              />
            </div>
            {/* portfolio input box */}
            <div className="flex flex-col m-1 mr-2">
              <label
                htmlFor="compEndYear_2"
                className="text-sm text-gray-400 p-1"
              >
                End Year
              </label>
              <input
                id="compEndYear_2"
                type="number"
                placeholder="Enter end year"
                className="bg-gray-100 w-130  p-2 rounded-xs focus:outline-none focus:shadow-md focus:border-b-cyan-600"
                value={companyEndDateVal_2}
                onChange={(e) => setCompanyEndDateVal_2(e.target.value)}
              />
            </div>
            <div className="flex flex-col m-1 mr-2">
              <label htmlFor="compDesc_2" className="text-sm text-gray-400 p-1">
                Description
              </label>
              <input
                id="compDesc_2"
                type="text"
                placeholder="Enter role description"
                className="bg-gray-100 w-263   p-2 rounded-xs focus:outline-none focus:shadow-md focus:border-b-cyan-600"
                value={companyDescriptionVal_2}
                onChange={(e) => setCompanyDescriptionVal_2(e.target.value)}
              />
            </div>
            {/* Email input box */}
            <div className="flex flex-col m-1 mr-2">
              <label
                htmlFor="positionName_3"
                className="text-sm text-gray-400 p-1"
              >
                Role
              </label>
              <input
                id="positionName_3"
                type="text"
                placeholder="Enter your role"
                className="bg-gray-100 w-130  p-2 rounded-xs focus:outline-none focus:shadow-md focus:border-b-cyan-600"
                required
                value={positionVal_3}
                onChange={(e) => setPosition_3(e.target.value)}
              />
            </div>
            <div className="flex flex-col m-1 mr-2">
              <label
                htmlFor="companyName_3"
                className="text-sm text-gray-400 p-1"
              >
                Company
              </label>
              <input
                id="companyName_3"
                type="text"
                placeholder="Enter company name"
                className="bg-gray-100 w-130  p-2 rounded-xs focus:outline-none focus:shadow-md focus:border-b-cyan-600"
                required
                value={companyNameVal_3}
                onChange={(e) => setCompanyName_3(e.target.value)}
              />
            </div>
            {/* phone no input box */}
            <div className="flex flex-col m-1 mr-2">
              <label
                htmlFor="compCityName_3"
                className="text-sm text-gray-400 p-1"
              >
                City
              </label>
              <input
                id="compCityName_3"
                type="text"
                placeholder="Enter city"
                className="bg-gray-100 w-130  p-2 rounded-xs focus:outline-none focus:shadow-md focus:border-b-cyan-600"
                required
                value={companyCityVal_3}
                onChange={(e) => setCompanyCity_3(e.target.value)}
              />
            </div>
            {/* linkedin input box */}
            <div className="flex flex-col m-1 mr-2">
              <label
                htmlFor="compCountryName_3"
                className="text-sm text-gray-400 p-1"
              >
                Country
              </label>
              <input
                id="compCountryName_3"
                type="text"
                placeholder="Enter country"
                className="bg-gray-100 w-130  p-2 rounded-xs focus:outline-none focus:shadow-md focus:border-b-cyan-600"
                value={companyCountryVal_3}
                onChange={(e) => setCompanyCountry_3(e.target.value)}
              />
            </div>
            {/* github input box */}
            <div className="flex flex-col m-1 mr-2">
              <label
                htmlFor="compStartYear_3"
                className="text-sm text-gray-400 p-1"
              >
                Start Year
              </label>
              <input
                id="compStartYear_3"
                type="number"
                placeholder="Enter start year"
                className="bg-gray-100 w-130  p-2 rounded-xs focus:outline-none focus:shadow-md focus:border-b-cyan-600"
                value={companyStartDateVal_3}
                onChange={(e) => setCompanyStartDateVal_3(e.target.value)}
              />
            </div>
            {/* portfolio input box */}
            <div className="flex flex-col m-1 mr-2">
              <label
                htmlFor="compEndYear_3"
                className="text-sm text-gray-400 p-1"
              >
                End Year
              </label>
              <input
                id="compEndYear_3"
                type="number"
                placeholder="Enter end year"
                className="bg-gray-100 w-130  p-2 rounded-xs focus:outline-none focus:shadow-md focus:border-b-cyan-600"
                value={companyEndDateVal_3}
                onChange={(e) => setCompanyEndDateVal_3(e.target.value)}
              />
            </div>
            <div className="flex flex-col m-1 mr-2">
              <label htmlFor="compDesc_3" className="text-sm text-gray-400 p-1">
                Description
              </label>
              <input
                id="compDesc_3"
                type="text"
                placeholder="Enter role description"
                className="bg-gray-100 w-263  p-2 rounded-xs focus:outline-none focus:shadow-md focus:border-b-cyan-600"
                value={companyDescriptionVal_3}
                onChange={(e) => setCompanyDescriptionVal_3(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* PROJECTS INPUT SECTION */}
        <div className="flex flex-col mb-3">
          <h2 className="text-xl font-bold p-2">Projects</h2>
          {/* Input boxes */}
          <div className="flex flex-row flex-wrap m-3">
            {/* Name input box */}
            <div className="flex flex-col m-1 mr-2">
              <label
                htmlFor="projectName_1"
                className="text-sm text-gray-400 p-1"
              >
                Project Name
              </label>
              <input
                id="projectName_1"
                type="text"
                placeholder="Enter name of the project"
                className="bg-gray-100 w-130  p-2 rounded-xs focus:outline-none focus:shadow-md focus:border-b-cyan-600"
                required
                value={projectName_1}
                onChange={(e) => setProjectName_1(e.target.value)}
              />
            </div>
            {/* Email input box */}
            <div className="flex flex-col m-1 mr-2">
              <label
                htmlFor="projectStack_1"
                className="text-sm text-gray-400 p-1"
              >
                Tech Stack
              </label>
              <input
                id="projectStack_1"
                type="text"
                placeholder="Enter tech stack of the project"
                className="bg-gray-100 w-130  p-2 rounded-xs focus:outline-none focus:shadow-md focus:border-b-cyan-600"
                required
                value={projectStack_1}
                onChange={(e) => setProjectStack_1(e.target.value)}
              />
            </div>
            {/* phone no input box */}
            <div className="flex flex-col m-1 mr-2">
              <label
                htmlFor="projectGithub_1"
                className="text-sm text-gray-400 p-1"
              >
                GitHub link
              </label>
              <input
                id="projectGithub_1"
                type="text"
                placeholder="Enter github link to project"
                className="bg-gray-100 w-130  p-2 rounded-xs focus:outline-none focus:shadow-md focus:border-b-cyan-600"
                required
                value={projectGithubLink_1}
                onChange={(e) => setProjectGithubLink_1(e.target.value)}
              />
            </div>
            {/* linkedin input box */}
            <div className="flex flex-col m-1 mr-2">
              <label
                htmlFor="projectLiveLink_1"
                className="text-sm text-gray-400 p-1"
              >
                Live link
              </label>
              <input
                id="projectLiveLink_1"
                type="text"
                placeholder="Enter country"
                className="bg-gray-100 w-130  p-2 rounded-xs focus:outline-none focus:shadow-md focus:border-b-cyan-600"
                value={projectLiveLink_1}
                onChange={(e) => setProjectLiveLink_1(e.target.value)}
              />
            </div>

            <div className="flex flex-col m-1 mr-2">
              <label
                htmlFor="projectDesc_1"
                className="text-sm text-gray-400 p-1"
              >
                Description
              </label>
              <input
                id="projectDesc_1"
                type="text"
                placeholder="Enter role description"
                className="bg-gray-100 w-263   p-2 rounded-xs focus:outline-none focus:shadow-md focus:border-b-cyan-600"
                value={projectDescription_1}
                onChange={(e) => setProjectDescription_1(e.target.value)}
              />
            </div>
            <div className="flex flex-col m-1 mr-2">
              <label
                htmlFor="projectName_2"
                className="text-sm text-gray-400 p-1"
              >
                Project Name
              </label>
              <input
                id="projectName_2"
                type="text"
                placeholder="Enter name of the project"
                className="bg-gray-100 w-130  p-2 rounded-xs focus:outline-none focus:shadow-md focus:border-b-cyan-600"
                required
                value={projectName_2}
                onChange={(e) => setProjectName_2(e.target.value)}
              />
            </div>
            {/* Email input box */}
            <div className="flex flex-col m-1 mr-2">
              <label
                htmlFor="projectStack_2"
                className="text-sm text-gray-400 p-1"
              >
                Tech Stack
              </label>
              <input
                id="projectStack_2"
                type="text"
                placeholder="Enter tech stack of the project"
                className="bg-gray-100 w-130  p-2 rounded-xs focus:outline-none focus:shadow-md focus:border-b-cyan-600"
                required
                value={projectStack_2}
                onChange={(e) => setProjectStack_2(e.target.value)}
              />
            </div>
            {/* phone no input box */}
            <div className="flex flex-col m-1 mr-2">
              <label
                htmlFor="projectGithub_2"
                className="text-sm text-gray-400 p-1"
              >
                GitHub link
              </label>
              <input
                id="projectGithub_2"
                type="text"
                placeholder="Enter github link to project"
                className="bg-gray-100 w-130  p-2 rounded-xs focus:outline-none focus:shadow-md focus:border-b-cyan-600"
                required
                value={projectGithubLink_2}
                onChange={(e) => setProjectGithubLink_2(e.target.value)}
              />
            </div>
            {/* linkedin input box */}
            <div className="flex flex-col m-1 mr-2">
              <label
                htmlFor="projectLiveLink_2"
                className="text-sm text-gray-400 p-1"
              >
                Live link
              </label>
              <input
                id="projectLiveLink_2"
                type="text"
                placeholder="Enter country"
                className="bg-gray-100 w-130  p-2 rounded-xs focus:outline-none focus:shadow-md focus:border-b-cyan-600"
                value={projectLiveLink_2}
                onChange={(e) => setProjectLiveLink_2(e.target.value)}
              />
            </div>

            <div className="flex flex-col m-1 mr-2">
              <label
                htmlFor="projectDesc_2"
                className="text-sm text-gray-400 p-1"
              >
                Description
              </label>
              <input
                id="projectDesc_2"
                type="text"
                placeholder="Enter role description"
                className="bg-gray-100 w-263   p-2 rounded-xs focus:outline-none focus:shadow-md focus:border-b-cyan-600"
                value={projectDescription_2}
                onChange={(e) => setProjectDescription_2(e.target.value)}
              />
            </div>
            <div className="flex flex-col m-1 mr-2">
              <label
                htmlFor="projectName_3"
                className="text-sm text-gray-400 p-1"
              >
                Project Name
              </label>
              <input
                id="projectName_3"
                type="text"
                placeholder="Enter name of the project"
                className="bg-gray-100 w-130  p-2 rounded-xs focus:outline-none focus:shadow-md focus:border-b-cyan-600"
                required
                value={projectName_3}
                onChange={(e) => setProjectName_3(e.target.value)}
              />
            </div>
            {/* Email input box */}
            <div className="flex flex-col m-1 mr-2">
              <label
                htmlFor="projectStack_3"
                className="text-sm text-gray-400 p-1"
              >
                Tech Stack
              </label>
              <input
                id="projectStack_3"
                type="text"
                placeholder="Enter tech stack of the project"
                className="bg-gray-100 w-130  p-2 rounded-xs focus:outline-none focus:shadow-md focus:border-b-cyan-600"
                required
                value={projectStack_3}
                onChange={(e) => setProjectStack_3(e.target.value)}
              />
            </div>
            {/* phone no input box */}
            <div className="flex flex-col m-1 mr-2">
              <label
                htmlFor="projectGithub_3"
                className="text-sm text-gray-400 p-1"
              >
                GitHub link
              </label>
              <input
                id="projectGithub_3"
                type="text"
                placeholder="Enter github link to project"
                className="bg-gray-100 w-130  p-2 rounded-xs focus:outline-none focus:shadow-md focus:border-b-cyan-600"
                required
                value={projectGithubLink_3}
                onChange={(e) => setProjectGithubLink_3(e.target.value)}
              />
            </div>
            {/* linkedin input box */}
            <div className="flex flex-col m-1 mr-2">
              <label
                htmlFor="projectLiveLink_3"
                className="text-sm text-gray-400 p-1"
              >
                Live link
              </label>
              <input
                id="projectLiveLink_3"
                type="text"
                placeholder="Enter country"
                className="bg-gray-100 w-130  p-2 rounded-xs focus:outline-none focus:shadow-md focus:border-b-cyan-600"
                value={projectLiveLink_3}
                onChange={(e) => setProjectLiveLink_3(e.target.value)}
              />
            </div>

            <div className="flex flex-col m-1 mr-2">
              <label
                htmlFor="projectDesc_3"
                className="text-sm text-gray-400 p-1"
              >
                Description
              </label>
              <input
                id="projectDesc_3"
                type="text"
                placeholder="Enter role description"
                className="bg-gray-100 w-263   p-2 rounded-xs focus:outline-none focus:shadow-md focus:border-b-cyan-600"
                value={projectDescription_3}
                onChange={(e) => setProjectDescription_3(e.target.value)}
              />
            </div>
            <div className="flex flex-col m-1 mr-2">
              <label
                htmlFor="projectName_4"
                className="text-sm text-gray-400 p-1"
              >
                Project Name
              </label>
              <input
                id="projectName_4"
                type="text"
                placeholder="Enter name of the project"
                className="bg-gray-100 w-130  p-2 rounded-xs focus:outline-none focus:shadow-md focus:border-b-cyan-600"
                required
                value={projectName_4}
                onChange={(e) => setProjectName_4(e.target.value)}
              />
            </div>
            {/* Email input box */}
            <div className="flex flex-col m-1 mr-2">
              <label
                htmlFor="projectStack_4"
                className="text-sm text-gray-400 p-1"
              >
                Tech Stack
              </label>
              <input
                id="projectStack_4"
                type="text"
                placeholder="Enter tech stack of the project"
                className="bg-gray-100 w-130  p-2 rounded-xs focus:outline-none focus:shadow-md focus:border-b-cyan-600"
                required
                value={projectStack_4}
                onChange={(e) => setProjectStack_4(e.target.value)}
              />
            </div>
            {/* phone no input box */}
            <div className="flex flex-col m-1 mr-2">
              <label
                htmlFor="projectGithub_4"
                className="text-sm text-gray-400 p-1"
              >
                GitHub link
              </label>
              <input
                id="projectGithub_4"
                type="text"
                placeholder="Enter github link to project"
                className="bg-gray-100 w-130  p-2 rounded-xs focus:outline-none focus:shadow-md focus:border-b-cyan-600"
                required
                value={projectGithubLink_4}
                onChange={(e) => setProjectGithubLink_4(e.target.value)}
              />
            </div>
            {/* linkedin input box */}
            <div className="flex flex-col m-1 mr-2">
              <label
                htmlFor="projectLiveLink_4"
                className="text-sm text-gray-400 p-1"
              >
                Live link
              </label>
              <input
                id="projectLiveLink_4"
                type="text"
                placeholder="Enter country"
                className="bg-gray-100 w-130  p-2 rounded-xs focus:outline-none focus:shadow-md focus:border-b-cyan-600"
                value={projectLiveLink_4}
                onChange={(e) => setProjectLiveLink_4(e.target.value)}
              />
            </div>

            <div className="flex flex-col m-1 mr-2">
              <label
                htmlFor="projectDesc_4"
                className="text-sm text-gray-400 p-1"
              >
                Description
              </label>
              <input
                id="projectDesc_4"
                type="text"
                placeholder="Enter role description"
                className="bg-gray-100 w-263   p-2 rounded-xs focus:outline-none focus:shadow-md focus:border-b-cyan-600"
                value={projectDescription_4}
                onChange={(e) => setProjectDescription_4(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* achievements inputs */}
        <div className="flex flex-col mb-3">
          <h2 className="text-xl font-bold p-2">Honors and Rewards</h2>
          {/* Input boxes */}
          <div className="flex flex-row flex-wrap m-3">
            {/* label input box */}
            <div className="flex flex-col m-1 mr-2">
              <label htmlFor="achLabel_1" className="text-sm text-gray-400 p-1">
                Title
              </label>
              <input
                id="achLabel_1"
                type="text"
                placeholder="Enter title"
                className="bg-gray-100 w-130  p-2 rounded-xs focus:outline-none focus:shadow-md focus:border-b-cyan-600"
                required
                value={achievementTitle_1}
                onChange={(e) => setAchievementTitle_1(e.target.value)}
              />
            </div>
            {/* skills input box */}
            <div className="flex flex-col m-1 mr-2">
              <label htmlFor="ach_desc_1" className="text-sm text-gray-400 p-1">
                Description
              </label>
              <input
                id="ach_desc_1"
                type="text"
                placeholder="Enter description"
                className="bg-gray-100 w-130  p-2 rounded-xs focus:outline-none focus:shadow-md focus:border-b-cyan-600"
                required
                value={achievementDescription_1}
                onChange={(e) => setAchievementDescription_1(e.target.value)}
              />
            </div>

            {/* label input box */}
            <div className="flex flex-col m-1 mr-2">
              <label htmlFor="achLabel_2" className="text-sm text-gray-400 p-1">
                Title
              </label>
              <input
                id="achLabel_2"
                type="text"
                placeholder="Enter title"
                className="bg-gray-100 w-130  p-2 rounded-xs focus:outline-none focus:shadow-md focus:border-b-cyan-600"
                required
                value={achievementTitle_2}
                onChange={(e) => setAchievementTitle_2(e.target.value)}
              />
            </div>
            {/* skills input box */}
            <div className="flex flex-col m-1 mr-2">
              <label htmlFor="ach_desc_2" className="text-sm text-gray-400 p-1">
                Description
              </label>
              <input
                id="ach_desc_2"
                type="text"
                placeholder="Enter description"
                className="bg-gray-100 w-130  p-2 rounded-xs focus:outline-none focus:shadow-md focus:border-b-cyan-600"
                required
                value={achievementDescription_2}
                onChange={(e) => setAchievementDescription_2(e.target.value)}
              />
            </div>

            {/* label input box */}
            <div className="flex flex-col m-1 mr-2">
              <label htmlFor="achLabel_3" className="text-sm text-gray-400 p-1">
                Title
              </label>
              <input
                id="achLabel_3"
                type="text"
                placeholder="Enter title"
                className="bg-gray-100 w-130  p-2 rounded-xs focus:outline-none focus:shadow-md focus:border-b-cyan-600"
                required
                value={achievementTitle_3}
                onChange={(e) => setAchievementTitle_3(e.target.value)}
              />
            </div>
            {/* skills input box */}
            <div className="flex flex-col m-1 mr-2">
              <label htmlFor="ach_desc_3" className="text-sm text-gray-400 p-1">
                Description
              </label>
              <input
                id="ach_desc_3"
                type="text"
                placeholder="Enter description"
                className="bg-gray-100 w-130  p-2 rounded-xs focus:outline-none focus:shadow-md focus:border-b-cyan-600"
                required
                value={achievementDescription_3}
                onChange={(e) => setAchievementDescription_3(e.target.value)}
              />
            </div>

            {/* label input box */}
            <div className="flex flex-col m-1 mr-2">
              <label htmlFor="achLabel_4" className="text-sm text-gray-400 p-1">
                Title
              </label>
              <input
                id="achLabel_4"
                type="text"
                placeholder="Enter title"
                className="bg-gray-100 w-130  p-2 rounded-xs focus:outline-none focus:shadow-md focus:border-b-cyan-600"
                required
                value={achievementTitle_4}
                onChange={(e) => setAchievementTitle_4(e.target.value)}
              />
            </div>
            {/* skills input box */}
            <div className="flex flex-col m-1 mr-2">
              <label htmlFor="ach_desc_4" className="text-sm text-gray-400 p-1">
                Description
              </label>
              <input
                id="ach_desc_4"
                type="text"
                placeholder="Enter description"
                className="bg-gray-100 w-130  p-2 rounded-xs focus:outline-none focus:shadow-md focus:border-b-cyan-600"
                required
                value={achievementDescription_4}
                onChange={(e) => setAchievementDescription_4(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center ">
        <button
          className="w-100 mb-7 cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleDownloadPdf}
        >
          Download as PDF
        </button>
      </div>

      {/* resume sheet */}
      <div className="flex justify-center flex-col items-center p-10 font-['Times_New_Roman'] bg-blue-100">
        <div
          id="resume-sheet"
          className="w-[210mm] h-[297mm] bg-white shadow-2xl  p-7"
        >
          {/* personal info */}
          <div className="flex flex-col justify-center ">
            <h2 className="text-3xl text-center font-bold ">{nameVal}</h2>
            <div className="flex flex-row justify-center gap-2 items-center ">
              <p className="text-sm  ">{phoneVal}</p>
              <span>{emailVal === "" ? "" : "|"}</span>
              <a href="mailto:{emailVal}" className="text-sm ">
                {emailVal}
              </a>
              <span>{linkedinVal === "" ? "" : "|"}</span>
              <a
                href={linkedinVal}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-1"
              >
                {linkedinVal === "" ? "" : "Linkedin"}
              </a>
              <span>{githubVal === "" ? "" : "|"}</span>
              <a
                href={githubVal}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-1"
              >
                {githubVal === "" ? "" : "Github"}
              </a>
              <span>{portfolioVal === "" ? "" : "|"}</span>
              <a
                href={portfolioVal}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-1"
              >
                {portfolioVal === "" ? "" : "Portfolio"}
              </a>
            </div>
          </div>

          {/* education number 1*/}
          <div className="flex flex-col justify-start  mt-4">
            <div>
              {schoolVal_1 !== "" ||
              cityVal_1 !== "" ||
              countryVal_1 !== "" ||
              degreeVal_1 !== "" ||
              startDateVal_1 !== "" ||
              endDateVal_1 !== "" ||
              schoolVal_2 !== "" ||
              cityVal_2 !== "" ||
              countryVal_2 !== "" ||
              degreeVal_2 !== "" ||
              startDateVal_2 !== "" ||
              endDateVal_2 !== "" ||
              schoolVal_3 !== "" ||
              cityVal_3 !== "" ||
              countryVal_3 !== "" ||
              degreeVal_3 !== "" ||
              startDateVal_3 !== "" ||
              endDateVal_3 !== "" ? (
                <>
                  <h2 className="text-l py-1">EDUCATION</h2>
                  <hr />
                </>
              ) : null}
            </div>
            <ul className="list-disc pl-3.5">
              {schoolVal_1 ||
              cityVal_1 ||
              countryVal_1 ||
              degreeVal_1 ||
              startDateVal_1 ||
              endDateVal_1 ? (
                <li>
                  <div className="flex flex-col">
                    <div className="flex flex-row justify-between p-0 mt-1">
                      <span className="font-bold text-m">
                        {schoolVal_1 && schoolVal_1}
                      </span>
                      <div>
                        <span>{cityVal_1 && cityVal_1}</span>
                        <span>{countryVal_1 && `, ${countryVal_1}`}</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between italic mt-[-5px]">
                      <span>{degreeVal_1 && degreeVal_1}</span>
                      <div>
                        <span>{startDateVal_1 && `${startDateVal_1}-`}</span>
                        <span>{endDateVal_1 && endDateVal_1}</span>
                      </div>
                    </div>
                  </div>
                </li>
              ) : null}

              {schoolVal_2 ||
              cityVal_2 ||
              countryVal_2 ||
              degreeVal_2 ||
              startDateVal_2 ||
              endDateVal_2 ? (
                <li>
                  <div className="flex flex-col">
                    <div className="flex flex-row justify-between p-0">
                      <span className="font-bold text-m">
                        {schoolVal_2 && schoolVal_2}
                      </span>
                      <div>
                        <span>{cityVal_2 && cityVal_2}</span>
                        <span>{countryVal_2 && `, ${countryVal_2}`}</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between italic mt-[-5px]">
                      <span>{degreeVal_2 && degreeVal_2}</span>
                      <div>
                        <span>{startDateVal_2 && `${startDateVal_2}-`}</span>
                        <span>{endDateVal_2 && endDateVal_2}</span>
                      </div>
                    </div>
                  </div>
                </li>
              ) : null}

              {schoolVal_3 ||
              cityVal_3 ||
              countryVal_3 ||
              degreeVal_3 ||
              startDateVal_3 ||
              endDateVal_3 ? (
                <li>
                  <div className="flex flex-col">
                    <div className="flex flex-row justify-between p-0">
                      <span className="font-bold text-m">
                        {schoolVal_3 && schoolVal_3}
                      </span>
                      <div>
                        <span>{cityVal_3 && cityVal_3}</span>
                        <span>{countryVal_3 && `, ${countryVal_3}`}</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between italic mt-[-5px]">
                      <span>{degreeVal_3 && degreeVal_3}</span>
                      <div>
                        <span>{startDateVal_3 && `${startDateVal_3}-`}</span>
                        <span>{endDateVal_3 && endDateVal_3}</span>
                      </div>
                    </div>
                  </div>
                </li>
              ) : null}
            </ul>
          </div>

          {/* skills section */}
          <div className="flex flex-col justify-start  mt-2">
            <div>
              {label_1 !== "" ||
              skillList_1 !== "" ||
              label_2 !== "" ||
              skillList_2 !== "" ||
              label_3 !== "" ||
              skillList_3 !== "" ||
              label_4 !== "" ||
              skillList_4 !== "" ? (
                <>
                  <h2 className="text-l py-1">TECHNICAL SKILLS</h2>
                  <hr />
                </>
              ) : null}
            </div>
            <ul className="list-disc pl-3.5">
              <div className="flex flex-col mt-1 py-0.5">
                {label_1 || skillList_1 ? (
                  <li>
                    <div className="flex flex-row items-center gap-1 my-[-2px] p-0">
                      <span className="font-bold text-m mr-1">
                        {label_1 && `${label_1}: `}
                      </span>
                      <span className="text-m italic">{skillList_1}</span>
                    </div>
                  </li>
                ) : null}

                {label_2 || skillList_2 ? (
                  <li>
                    <div className="flex flex-row items-center gap-1 my-[-2px] p-0">
                      <span className="font-bold text-m mr-1">
                        {label_2 && `${label_2}: `}
                      </span>
                      <span className="text-m italic">{skillList_2}</span>
                    </div>
                  </li>
                ) : null}

                {label_3 || skillList_3 ? (
                  <li>
                    <div className="flex flex-row items-center gap-1 my-[-2px] p-0">
                      <span className="font-bold text-m mr-1">
                        {label_3 && `${label_3}: `}
                      </span>
                      <span className="text-m italic">{skillList_3}</span>
                    </div>
                  </li>
                ) : null}

                {label_4 || skillList_4 ? (
                  <li>
                    <div className="flex flex-row items-center gap-1 my-[-2px] p-0">
                      <span className="font-bold text-m mr-1">
                        {label_4 && `${label_4}: `}
                      </span>
                      <span className="text-m italic">{skillList_4}</span>
                    </div>
                  </li>
                ) : null}
              </div>
            </ul>
          </div>

          {/* EDUCATION SECTION */}
          <div className="flex flex-col justify-start  mt-2">
            <div>
              {companyCityVal_1 !== "" ||
              companyCityVal_2 !== "" ||
              companyCityVal_3 !== "" ||
              companyCountryVal_1 !== "" ||
              companyCountryVal_2 !== "" ||
              companyCountryVal_3 !== "" ||
              companyDescriptionVal_1 !== "" ||
              companyDescriptionVal_2 !== "" ||
              companyDescriptionVal_3 !== "" ||
              companyEndDateVal_1 !== "" ||
              companyEndDateVal_2 !== "" ||
              companyEndDateVal_3 !== "" ||
              companyNameVal_1 !== "" ||
              companyNameVal_2 !== "" ||
              companyNameVal_3 !== "" ||
              companyStartDateVal_1 !== "" ||
              companyStartDateVal_2 !== "" ||
              companyStartDateVal_3 !== "" ||
              positionVal_1 !== "" ||
              positionVal_2 !== "" ||
              positionVal_3 !== "" ? (
                <>
                  <h2 className="text-l py-1">EXPERIENCE</h2>
                  <hr />
                </>
              ) : null}
            </div>
          </div>
          <div className="flex flex-col  ">
            <div className="flex flex-row justify-between p-0 mt-1 ">
              <span className="font-bold text-m">
                {positionVal_1 === "" ? "" : positionVal_1}
              </span>
              <div>
                <span>{companyCityVal_1 === "" ? "" : companyCityVal_1}</span>
                <span>
                  {companyCountryVal_1 === "" ? "" : ", " + companyCountryVal_1}
                </span>
              </div>
            </div>
            <div className="flex flex-row justify-between italic mt-[-5px]">
              <span>{companyNameVal_1 === "" ? "" : companyNameVal_1}</span>
              <div>
                <span>
                  {companyStartDateVal_1 === ""
                    ? ""
                    : companyStartDateVal_1 + "-"}
                </span>
                <span>
                  {companyEndDateVal_1 === "" ? "" : companyEndDateVal_1}
                </span>
              </div>
            </div>
            <div className="flex flex-row justify-between ">
              <ul className="list-disc pl-7 ">
                {companyDescriptionVal_1 === ""
                  ? ""
                  : createListItems(companyDescriptionVal_1)}
              </ul>
            </div>
          </div>
          <div className="flex flex-col  ">
            <div className="flex flex-row justify-between p-0 mt-1 ">
              <span className="font-bold text-m">
                {positionVal_2 === "" ? "" : positionVal_2}
              </span>
              <div>
                <span>{companyCityVal_2 === "" ? "" : companyCityVal_2}</span>
                <span>
                  {companyCountryVal_2 === "" ? "" : ", " + companyCountryVal_2}
                </span>
              </div>
            </div>
            <div className="flex flex-row justify-between italic mt-[-5px]">
              <span>{companyNameVal_2 === "" ? "" : companyNameVal_2}</span>
              <div>
                <span>
                  {companyStartDateVal_2 === ""
                    ? ""
                    : companyStartDateVal_2 + "-"}
                </span>
                <span>
                  {companyEndDateVal_2 === "" ? "" : companyEndDateVal_2}
                </span>
              </div>
            </div>
            <div className="flex flex-row justify-between ">
              <ul className="list-disc pl-7 ">
                {companyDescriptionVal_2 === ""
                  ? ""
                  : createListItems(companyDescriptionVal_2)}
              </ul>
            </div>
          </div>
          <div className="flex flex-col  ">
            <div className="flex flex-row justify-between p-0 mt-1 ">
              <span className="font-bold text-m">
                {positionVal_3 === "" ? "" : positionVal_3}
              </span>
              <div>
                <span>{companyCityVal_3 === "" ? "" : companyCityVal_3}</span>
                <span>
                  {companyCountryVal_3 === "" ? "" : ", " + companyCountryVal_3}
                </span>
              </div>
            </div>
            <div className="flex flex-row justify-between italic mt-[-5px]">
              <span>{companyNameVal_3 === "" ? "" : companyNameVal_3}</span>
              <div>
                <span>
                  {companyStartDateVal_3 === ""
                    ? ""
                    : companyStartDateVal_3 + "-"}
                </span>
                <span>
                  {companyEndDateVal_3 === "" ? "" : companyEndDateVal_3}
                </span>
              </div>
            </div>
            <div className="flex flex-row justify-between ">
              <ul className="list-disc pl-7 ">
                {companyDescriptionVal_3 === ""
                  ? ""
                  : createListItems(companyDescriptionVal_3)}
              </ul>
            </div>
          </div>

          {/* project section */}
          {/* EDUCATION SECTION */}
          <div className="flex flex-col justify-start  mt-2">
            <div>
              {projectDescription_1 !== "" ||
              projectDescription_2 !== "" ||
              projectDescription_3 !== "" ||
              projectDescription_4 !== "" ||
              projectGithubLink_1 !== "" ||
              projectGithubLink_2 !== "" ||
              projectGithubLink_3 !== "" ||
              projectGithubLink_4 !== "" ||
              projectLiveLink_1 !== "" ||
              projectLiveLink_2 !== "" ||
              projectLiveLink_3 !== "" ||
              projectLiveLink_4 !== "" ||
              projectName_1 !== "" ||
              projectName_2 !== "" ||
              projectName_3 !== "" ||
              projectName_4 !== "" ||
              projectStack_1 !== "" ||
              projectStack_2 !== "" ||
              projectStack_3 !== "" ||
              projectStack_4 !== "" ? (
                <>
                  <h2 className="text-l py-1">PROJECTS</h2>
                  <hr />
                </>
              ) : null}
            </div>
          </div>
          <div className="flex flex-col ">
            <div className="flex flex-row  p-0 mt-1 ">
              <span className="font-bold text-m">
                {projectName_1 === "" ? "" : projectName_1}
              </span>
              <span className="px-1"> {projectStack_1 === "" ? "" : "|"}</span>
              <span className="italic">
                {projectStack_1 === "" ? "" : projectStack_1}
              </span>
            </div>
            <div className="mt-[-4px]">
              <span>
                <a
                  className="underline underline-offset-1"
                  href={projectGithubLink_1 === "" ? "" : projectGithubLink_1}
                >
                  {projectGithubLink_1 === "" ? "" : "GitHub"}
                </a>
              </span>
              <span className="pl-1">
                <a
                  className="underline underline-offset-1"
                  href={projectLiveLink_1 === "" ? "" : projectLiveLink_1}
                >
                  {projectLiveLink_1 === "" ? "" : "Live"}
                </a>
              </span>
            </div>

            <div className="flex flex-row justify-between ">
              <ul className="list-disc pl-7 ">
                {projectDescription_1 === ""
                  ? ""
                  : createListItems(projectDescription_1)}
              </ul>
            </div>
          </div>

          <div className="flex flex-col ">
            <div className="flex flex-row  p-0 mt-1 ">
              <span className="font-bold text-m">
                {projectName_2 === "" ? "" : projectName_2}
              </span>
              <span className="px-1"> {projectStack_2 === "" ? "" : "|"}</span>
              <span className="italic">
                {projectStack_2 === "" ? "" : projectStack_2}
              </span>
            </div>
            <div className="mt-[-4px]">
              <span>
                <a
                  className="underline underline-offset-1"
                  href={projectGithubLink_2 === "" ? "" : projectGithubLink_2}
                >
                  {projectGithubLink_2 === "" ? "" : "GitHub"}
                </a>
              </span>
              <span className="pl-1">
                <a
                  className="underline underline-offset-1"
                  href={projectLiveLink_2 === "" ? "" : projectLiveLink_2}
                >
                  {projectLiveLink_2 === "" ? "" : "Live"}
                </a>
              </span>
            </div>

            <div className="flex flex-row justify-between ">
              <ul className="list-disc pl-7 ">
                {projectDescription_2 === ""
                  ? ""
                  : createListItems(projectDescription_2)}
              </ul>
            </div>
          </div>

          <div className="flex flex-col ">
            <div className="flex flex-row  p-0 mt-1 ">
              <span className="font-bold text-m">
                {projectName_3 === "" ? "" : projectName_3}
              </span>
              <span className="px-1"> {projectStack_3 === "" ? "" : "|"}</span>
              <span className="italic">
                {projectStack_3 === "" ? "" : projectStack_3}
              </span>
            </div>
            <div className="mt-[-4px]">
              <span>
                <a
                  className="underline underline-offset-1"
                  href={projectGithubLink_3 === "" ? "" : projectGithubLink_3}
                >
                  {projectGithubLink_3 === "" ? "" : "GitHub"}
                </a>
              </span>
              <span className="pl-1">
                <a
                  className="underline underline-offset-1"
                  href={projectLiveLink_3 === "" ? "" : projectLiveLink_3}
                >
                  {projectLiveLink_3 === "" ? "" : "Live"}
                </a>
              </span>
            </div>

            <div className="flex flex-row justify-between ">
              <ul className="list-disc pl-7 ">
                {projectDescription_3 === ""
                  ? ""
                  : createListItems(projectDescription_3)}
              </ul>
            </div>
          </div>

          <div className="flex flex-col ">
            <div className="flex flex-row  p-0 mt-1 ">
              <span className="font-bold text-m">
                {projectName_4 === "" ? "" : projectName_4}
              </span>
              <span className="px-1"> {projectStack_4 === "" ? "" : "|"}</span>
              <span className="italic">
                {projectStack_4 === "" ? "" : projectStack_4}
              </span>
            </div>
            <div className="mt-[-4px]">
              <span>
                <a
                  className="underline underline-offset-1"
                  href={projectGithubLink_4 === "" ? "" : projectGithubLink_4}
                >
                  {projectGithubLink_4 === "" ? "" : "GitHub"}
                </a>
              </span>
              <span className="pl-1">
                <a
                  className="underline underline-offset-1"
                  href={projectLiveLink_4 === "" ? "" : projectLiveLink_4}
                >
                  {projectLiveLink_4 === "" ? "" : "Live"}
                </a>
              </span>
            </div>

            <div className="flex flex-row justify-between ">
              <ul className="list-disc pl-7 ">
                {projectDescription_4 === ""
                  ? ""
                  : createListItems(projectDescription_4)}
              </ul>
            </div>
          </div>

          {/* ACHIEVEMENTS SECTION */}
          <div className="flex flex-col justify-start  mt-2">
            <div>
              {achievementTitle_1 !== "" ||
              achievementDescription_1 !== "" ||
              achievementTitle_2 !== "" ||
              achievementDescription_2 !== "" ||
              achievementTitle_3 !== "" ||
              achievementDescription_3 !== "" ||
              achievementTitle_4 !== "" ||
              achievementDescription_4 !== "" ? (
                <>
                  <h2 className="text-L  py-1">HONOURS AND REWARDS</h2>
                  <hr />
                </>
              ) : null}
            </div>
            <ul className="list-disc pl-3.5">
              {achievementTitle_1 || achievementDescription_1 ? (
                <li>
                  <div className="flex flex-col leading-[19px] mt-1 py-0.5">
                    <div className="flex flex-row items-center gap-1 my-[-2px] p-0">
                      <span className="text-m mr-1">
                        <span className="font-bold">
                          {achievementTitle_1 && `${achievementTitle_1}: `}
                        </span>
                        <span className="text-m">
                          {achievementDescription_1}
                        </span>
                      </span>
                    </div>
                  </div>
                </li>
              ) : null}

              {achievementTitle_2 || achievementDescription_2 ? (
                <li>
                  <div className="flex flex-col leading-[19px] py-0.5">
                    <div className="flex flex-row items-center gap-1 my-[-2px] p-0">
                      <span className="text-m mr-1">
                        <span className="font-bold">
                          {achievementTitle_2 && `${achievementTitle_2}: `}
                        </span>
                        <span className="text-m">
                          {achievementDescription_2}
                        </span>
                      </span>
                    </div>
                  </div>
                </li>
              ) : null}

              {achievementTitle_3 || achievementDescription_3 ? (
                <li>
                  <div className="flex flex-col leading-[19px] py-0.5">
                    <div className="flex flex-row items-center gap-1 my-[-2px] p-0">
                      <span className="text-m mr-1">
                        <span className="font-bold">
                          {achievementTitle_3 && `${achievementTitle_3}: `}
                        </span>
                        <span className="text-m">
                          {achievementDescription_3}
                        </span>
                      </span>
                    </div>
                  </div>
                </li>
              ) : null}

              {achievementTitle_4 || achievementDescription_4 ? (
                <li>
                  <div className="flex flex-col leading-[19px] py-0.5">
                    <div className="flex flex-row items-center gap-1 my-[-2px] p-0">
                      <span className="text-m mr-1">
                        <span className="font-bold">
                          {achievementTitle_4 && `${achievementTitle_4}: `}
                        </span>
                        <span className="text-m">
                          {achievementDescription_4}
                        </span>
                      </span>
                    </div>
                  </div>
                </li>
              ) : null}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainForm;
