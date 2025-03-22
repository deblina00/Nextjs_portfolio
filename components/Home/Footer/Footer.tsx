import Image from "next/image";
import React from "react";
import { FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { CiLinkedin, CiFacebook } from "react-icons/ci";

const Footer = () => {
  return (
    <div className="pb-16 bg-[#050709]">
      {/* Logo */}
      <div className="flex justify-center">
        <Image
          src="/images/LOGOO.png"
          alt="logo"
          width={200}
          height={180}
          loading="lazy"
          className="mx-auto"
        />
      </div>

      {/* Social Media Icons */}

      <div className="flex items-center flex-wrap justify-center space-x-5 text-white">
        <a
          href="https://github.com/deblina00"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="rounded-full p-2 border-2 border-[#F78F42] hover:bg-[#F78F42] transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="rounded-full p-2 border-2 border-[#F78F42] hover:bg-[#F78F42] transition"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.linkedin.com/in/deblina-roy-b7059a225/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="rounded-full p-2 border-2 border-[#F78F42] hover:bg-[#F78F42] transition"
        >
          <CiLinkedin />
        </a>
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
          className="rounded-full p-2 border-2 border-[#F78F42] hover:bg-[#F78F42] transition"
        >
          <FaTwitter />
        </a>
        <a
          href="https://facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="rounded-full p-2 border-2 border-[#F78F42] hover:bg-[#F78F42] transition"
        >
          <CiFacebook />
        </a>
      </div>

      {/* Navigation Links */}
      <nav className="flex items-center flex-wrap justify-center mt-6 space-x-10 text-white font-bold">
        <a href="#home" className="hover:text-[#F78F42] transition">
          Home .
        </a>
        <a href="#projects" className="hover:text-[#F78F42] transition">
          Projects .
        </a>
        <a href="#skills" className="hover:text-[#F78F42] transition">
          Skills .
        </a>
        <a href="#contact" className="hover:text-[#F78F42] transition">
          Contact .
        </a>
      </nav>
      <div className="text-gray-400 mt-6 text-center">
        © 2025 All Rights Reserved by React JS Developer
      </div>
    </div>
  );
};

export default Footer;
