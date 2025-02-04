import React from "react";
import about from "../images/about.png";

function About() {
  return (
    <section className="flex flex-col md:flex-row px-5 py-10 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 justify-center items-center" id="about">
      <div className="w-full md:w-1/2 flex justify-center">
        <img className="w-3/4 h-[400px] md:w-[700px] object-cover rounded-lg shadow-xl" src={about} alt="Logo" />
      </div>
      <div className="w-full md:w-1/2 flex justify-center px-5">
        <div className="flex flex-col justify-center text-center md:text-left text-white">
          <h1 className="font-poppins text-4xl md:text-5xl font-bold border-b-4 mb-5 w-[180px]">About Me</h1>
          <p className="font-lora text-lg md:text-xl font-light pb-5">
            I'm a MERN Stack Developer, passionate about web performance and user interface optimization.
          </p>
          <p className="font-lora text-lg md:text-xl font-light pb-5">
            I have experience in building responsive web applications using HTML, CSS, and JavaScript.
          </p>
          <p className="font-lora text-lg md:text-xl font-light">
            I specialize in building scalable and efficient web applications using MongoDB, Express.js, React, and Node.js.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
