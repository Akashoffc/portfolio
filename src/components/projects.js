import React from "react";
import pro1 from "../images/pro1.png";
import pro2 from "../images/pro2.png";
import pro3 from "../images/pro3.jpg";

function Projects() {
  const targetLink = "https://react-ecru-theta.vercel.app/";

  return (
    <section className="flex flex-col px-5 py-20 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 justify-center text-white" id="projects">
      <div className="w-full">
        <div className="flex flex-col px-10 py-5 text-center md:text-left">
          <h1 className="font-poppins text-4xl md:text-5xl font-bold border-b-4 mb-5 w-[180px]">
            Projects
          </h1>
          <p className="font-lora text-lg md:text-xl font-light">
            I specialize in creating scalable and efficient applications using MongoDB, Express.js, React, and Node.js.
          </p>
        </div>
      </div>
      <div className="w-full flex flex-wrap justify-center gap-5 px-10 text-black">
        {[{ img: pro1, title: "React E-commerce" },
          { img: pro2, title: "Node CRUD" },
          { img: pro3, title: "Human Posture Identification" }].map((project, index) => (
          <a key={index} href={targetLink} target="_blank" rel="noopener noreferrer" className="relative w-full sm:w-[45%] md:w-[30%] flex flex-col items-center transform transition duration-500 hover:scale-105">
            <img className="h-[200px] w-full object-cover rounded-lg shadow-xl" src={project.img} alt={project.title} />
            <div className="project-desc text-center py-5">
              <p className="font-lora text-white">{project.title}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Projects;
