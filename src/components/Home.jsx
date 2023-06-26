import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import logo from '../assets/myphoto.jpeg'

const Home = () => {
  return (
    <div name='home' className=' h-screen bg-[#0a192f] text-gray-300 pt-32'>
        <div className="max-w-[1000px] w-full md:grid grid-cols-12 gap-20 mx-auto">
          <div className="col-span-8 text-white my-auto">
              {/* <p className="text-zinc-200 text-2xl font-apparel">Hi, My name is</p> */}
              <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&weight=900&size=20&pause=1000&vCenter=true&width=435&height=60&lines=Hi,+My+Name+is;I'm+a" alt="Typing SVG" />

             <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&weight=900&size=40&pause=1000&vCenter=true&width=435&height=60&lines=EM+Nayon;Frontend+Developer" alt="Typing SVG" />
              <p className="text-[#8892b0] py-4 max-w-[700px] font-thin">Welcome to my portfolio, where expertise in frontend development meets creativity and innovation. I am an expert frontend developer with a passion for crafting remarkable user interfaces that leave a lasting impression.</p>
              <p className="text-[#8892b0] py-4 max-w-[700px] font-thin">Collaboration is at the heart of my approach. I thrive on working closely with designers, UX specialists, and backend developers to transform ideas into tangible realities</p>
              <p className="text-[#8892b0] py-4 max-w-[700px] font-thin">I invite you to explore my portfolio and witness the diverse range of projects I have worked on</p>
            </div>  
          <div className="col-span-4 row-end-1  w-80 ">
            <img src={logo} alt="" className="w-80 hover:scale-105 ease-in duration-500 border border-pink-400 btnColor"/>  
          </div>  
        </div>  
    </div>
  );
};

export default Home;
