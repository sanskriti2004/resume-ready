import React, { useState, useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const MainForm = () => {
  const [nameVal, setName] = useState("");
  const [emailVal, setEmail] = useState("");
  const [phoneVal, setPhone] = useState("");
  const [linkedinVal, setLinkedin] = useState("");
  const [githubVal, setGithub] = useState("");
  const [portfolioVal, setPortfolio] = useState("");
  const resumeRef = useRef();

  const downloadPDF = () => {
    const input = resumeRef.current;
    if (!input) {
      console.log("Element not found");
      return;
    }

    console.log("Capturing element...");
    html2canvas(input, { scale: 2, useCORS: true })
      .then((canvas) => {
        console.log("Element captured, generating PDF...");
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF("p", "mm", "a4");

        const imgWidth = 210;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;

        pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);

        console.log("PDF generated, saving...");
        pdf.save("resume.pdf");
      })
      .catch((error) => {
        console.error("Error capturing element:", error);
      });
  };

  return (
    <div className="p-4 flex flex-col">
      <h3 className="text-2xl font-normal text-center p-3">
        Unlock your next big opportunity—start here!
      </h3>
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
        {/* <button
          onClick={handleSubmit}
          className="bg-cyan-600 text-white m-3 h-10 w-30 rounded-md cursor-pointer hover:bg-cyan-800"
        >
          Save
        </button> */}
      </div>

      {/* resume sheet */}
      <div className="flex justify-center flex-col items-center p-10 font-['Times_New_Roman'] bg-blue-100">
        <div
          ref={resumeRef}
          className="w-[210mm] h-[297mm] bg-white shadow-2xl p-7"
        >
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
        </div>
        <button
          onClick={downloadPDF}
          className="bg-cyan-600 text-white m-3 p-2 rounded-md cursor-pointer hover:bg-cyan-800"
        >
          Download PDF
        </button>
      </div>
    </div>
  );
};

export default MainForm;
