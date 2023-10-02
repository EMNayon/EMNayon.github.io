import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaLinkedinIn,
  FaHome,
  FaUserSecret,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { GiSkills } from "react-icons/gi";
import { SiPolywork } from "react-icons/si";
import { IoIosContacts } from "react-icons/io";
import Logo from "../assets/logo2.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className=" fixed h-[80px] flex flex-col justify-between items-center px-4 bg-[#0a192f] text-gray-300 top-[30%] right-0">
      {/* menu */}
      <ul className="flex-col hidden md:flex ">
        <li className="py-3 duration-500 ease-in hover:scale-150">
          <Link to="home" smooth={true} duration={500}>
            <FaHome size={30} />
          </Link>
        </li>

        <li className="py-3 duration-500 ease-in hover:scale-150">
          <Link to="about" smooth={true} duration={500}>
            <FaUserSecret size={30} />
          </Link>
        </li>
        <li className="py-3 duration-500 ease-in hover:scale-150">
          <Link to="skills" smooth={true} duration={500}>
            <GiSkills size={30} />
          </Link>
        </li>
        <li className="py-3 duration-500 ease-in hover:scale-150">
          <Link to="work" smooth={true} duration={500}>
            <SiPolywork size={30} />
          </Link>
        </li>
        <li className="py-3 duration-500 ease-in hover:scale-150">
          <Link to="contact" smooth={true} duration={500}>
            <IoIosContacts size={30} />
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="z-10 md:hidden">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex items-center justify-between w-full text-gray-300"
              href="https://www.linkedin.com/in/emnayon/"
              target="blank"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex items-center justify-between w-full text-gray-300"
              href="https://github.com/EMNayon"
              target="blank"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
            <a
              className="flex items-center justify-between w-full text-gray-300"
              href="/"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              className="flex items-center justify-between w-full text-gray-300"
              target="_blank"
              href="https://drive.google.com/drive/folders/1v58_hFsMCkWgswoqb10vIXGN2OMQKQIL?usp=sharing"
              download={true}
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
