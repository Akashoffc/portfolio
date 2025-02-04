import React from "react";
import { FaInstagram, FaLinkedin, FaFacebook ,FaGithubSquare } from "react-icons/fa";

function Contact() {
  return (
    <section className="flex flex-col items-center bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 px-5 py-20 text-white" id="contact">
      <div className="text-center">
        <h1 className="font-poppins text-3xl md:text-4xl font-bold border-b-4 mb-5 inline-block">Contact</h1>
        <p className="font-lora text-lg md:text-xl font-light pb-5">If you want to discuss more in detail, feel free to reach out.</p>
        <div className="text-lg">
          <p className="py-2"><span className="font-bold">Email:</span> akashmoff@gmail.com</p>
          <p className="py-2"><span className="font-bold">Phone:</span> +91 97875 83303</p>
          <p className="py-2"><span className="font-bold">Location:</span> Madurai, Tamilnadu</p>
        </div>

        <div className="flex justify-center space-x-6 mt-5">
          <a href="#" className="hover:text-gray-300"><FaInstagram size={30} /></a>
          <a href="https://www.linkedin.com/in/akash-m-a08456335?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BVrQkkHVuQxG3J9T4Ixk2MQ%3D%3D" className="hover:text-gray-300"><FaLinkedin size={30} /></a>
          <a href="#" className="hover:text-gray-300"><FaFacebook size={30} /></a>
          <a href="https://github.com/Akashoffc" className="hover:text-gray-300"><FaGithubSquare size={30} /></a>
        </div>

        <form className="mt-8 w-full max-w-lg mx-auto bg-white p-6 rounded-lg shadow-xl">
          <h2 className="font-poppins text-2xl text-gray-800 font-bold mb-4">Send a Message</h2>
          <input type="text" placeholder="Your Name" className="w-full p-3 mb-4 border rounded-lg text-gray-800" />
          <input type="email" placeholder="Your Email" className="w-full p-3 mb-4 border rounded-lg text-gray-800" />
          <textarea placeholder="Your Message" className="w-full p-3 mb-4 border rounded-lg text-gray-800 h-32"></textarea>
          <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-opacity-80 transition duration-300">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
