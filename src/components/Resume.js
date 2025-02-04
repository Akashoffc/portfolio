import React from "react";
import akash from "../images/akash.png";

function Resume() {
  const config = {
    link: "https://drive.google.com/file/d/1v9LZ7zQ6y6yBdU8j8Q0zL5cZxJ9aBfVv/view?usp=sharing"
  };

  return (
    <section className="flex px-5 py-20 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 justify-center items-center" id="resume">
      <div className="w-full md:w-1/2 flex justify-center md:justify-end">
        <img className="w-[250px] md:w-[300px] rounded-lg shadow-xl" src={akash} alt="Akash" />
      </div>

      <div className="w-full md:w-1/2 flex justify-center px-5">
        <div className="flex flex-col justify-center text-center md:text-left text-white">
          <h1 className="font-poppins text-4xl md:text-5xl font-bold border-b-4 mb-5 w-[180px]">
            Resume
          </h1>
          <p className="font-lora text-lg md:text-xl font-light pb-5">
            You can view my resume and download it using the link below.
          </p>
          <a href={config.link} target="_blank" rel="noopener noreferrer" className="font-lora bg-blue-600 hover:bg-blue-700 text-white py-2 px-5 rounded-lg transition duration-300">
            Download
          </a>
        </div>
      </div>
    </section>
  );
}

export default Resume;
