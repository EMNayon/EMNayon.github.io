import React from 'react';
import logo from '../assets/myphoto.jpeg'
import logo1 from '../assets/myphoto1.jpeg'
const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About Me
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-12 gap-8 px-4'>
            <div className='col-span-8 sm:text-left w-92 mx-auto my-auto'>
              <p className='text-2xl font-bold'>Hi. I'm EM Nayon, nice to meet you. Please take a look around.</p>
              <p className='text-lg'>I am passionate about building excellent web application that improves
              the lives of those around me. I specialize in creating software
              for clients ranging from individuals. What would you do if you had
              a Frontend Developer expert available at your fingertips?</p> 
              <div className='flex'>
                <div className='p-4'>
                  <h1 className="text-4xl font-gfs">02<span className="text-emerald-500 text-4xl font-semibold">+</span></h1>
                  <p className='text-white font-thin text-sm'>Years experience</p>
                </div>  
                <div className='p-4'>
                  <h1 className="text-4xl font-gfs">05<span className="text-emerald-500 text-4xl font-semibold">+</span></h1>
                  <p className='text-white font-thin text-sm'>Completed Projects</p>
                </div>
                <div className='p-4'>
                  <h1 className="text-4xl font-gfs">04<span className="text-emerald-500 text-4xl font-semibold">+</span></h1>
                  <p className='text-white font-thin text-sm'>Collaborations Project</p>
                </div>  
                <div className='p-4'>
                  <h1 className="text-4xl font-gfs">01<span className="text-emerald-500 text-4xl font-semibold">+</span></h1>
                  <p className='text-white font-thin text-sm'>Companies Work</p>
                </div>  
                 
              </div> 
            </div>
            <div className='col-span-4 bg-gray-500 w-80 rounded btnColor border-2 border-pink-400 my-auto'>
                <img src={logo1} alt="" className='w-80 rounded skew-y-6 -rotate-6 hover:translate-x-10 ease-in duration-300' />
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
