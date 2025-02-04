import React from "react";
import pass from "../images/pass.jpg";
import { FaInstagram, FaLinkedin, FaFacebook ,FaGithubSquare} from "react-icons/fa";

function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center px-5 py-20 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600">

      <div className="md:w-1/2 md:text-left flex flex-col items-center md:items-start text-white">
        <h1 className="font-poppins text-4xl md:text-5xl font-bold leading-tight text-center md:text-left">
          Hi, I'm <br /> Akash M
          <p className="font-lora text-xl md:text-2xl font-light mt-2">Full Stack Developer</p>
        </h1>

        <p className="font-lora text-lg md:text-xl font-light mt-4 text-center md:text-left max-w-lg">
          Passionate about building scalable, efficient, and modern web applications. 
          I specialize in MERN stack development and enjoy creating responsive, user-friendly designs. 
          Always eager to learn and explore new technologies to enhance my skills and deliver exceptional solutions.
        </p>
        
        <div className="flex justify-center md:justify-start space-x-6 mt-5">
          <a href="#" className="hover:text-gray-300"><FaInstagram size={30} /></a>
          <a href="https://www.linkedin.com/in/akash-m-a08456335?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BVrQkkHVuQxG3J9T4Ixk2MQ%3D%3D" className="hover:text-gray-300"><FaLinkedin size={30} /></a>
          <a href="#" className="hover:text-gray-300"><FaFacebook size={30} /></a>
          <a href="https://github.com/Akashoffc" className="hover:text-gray-300"><FaGithubSquare size={30} /></a>

        </div>
      </div>

      <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
        <img className="w-2/3 md:w-1/2 rounded-lg shadow-xl" src={pass} alt="Profile" />
      </div>
    </section>
  );
}

export default Hero;
