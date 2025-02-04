import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex justify-between items-center px-5 py-3 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white relative">
      {/* Logo */}
      <a className="text-xl font-bold" href="#">
        AKASH M
      </a>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-6">
        <a href="#">Home</a>
        <a href="#about" >About</a>
        <a href="#projects" >Projects</a>
        <a href="#resume" >Resume</a>
        <a href="#contact" >Contact</a>
      </nav>

      {/* Mobile Menu Button */}
      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <XMarkIcon className="h-7 w-7 text-white" /> : <Bars3Icon className="h-7 w-7 text-white" />}
      </button>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="absolute top-14 left-0 w-full bg-primary p-5 flex flex-col items-center space-y-4 md:hidden">
          <a href="#" className="hover:underline" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#about" className="hover:underline" onClick={() => setIsOpen(false)}>About</a>
          <a href="#project" className="hover:underline" onClick={() => setIsOpen(false)}>Projects</a>
            <a href="#resume" className="hover:underline" onClick={() => setIsOpen(false)}>Resume</a>
          <a href="#contact" className="hover:underline" onClick={() => setIsOpen(false)}>Contact</a>
        </nav>
      )}
    </header>
  );
}

export default Header;
