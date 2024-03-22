"use client";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { ImCross } from "react-icons/im";
const Navbar = () => {
   const [isRotationOpen, setIsRotationOpen] = useState(false);
   const [isLocationOpen, setIsLocationOpen] = useState(false);
   const [isBarOpen, setIsBarOpen] = useState(false);

   const handleClickRotation = (e) => {
      e.stopPropagation();
      setIsRotationOpen((prev) => !prev);
      setIsLocationOpen(false);
   };
   const handleClickLocation = (e) => {
      e.stopPropagation();
      setIsLocationOpen((prev) => !prev);
      setIsRotationOpen(false);
   };
   const handleClickBar = () => {
      setIsBarOpen((prev) => !prev);
   };
   return (
      <>
         <div className='flex justify-between items-center relative '>
            <div>
               <h1 className='uppercase text-2xl font-semibold tracking-wide'>Navbar</h1>
            </div>
            <div className='text-xl font-normal tracking-tight relative '>
               <ul className='Nav-items md:flex justify-center items-center space-x-8 cursor-pointer hidden '>
                  <li>Home</li>
                  <li onClick={handleClickRotation} className='flex items-center justify-center space-x-2 '>
                     Rotations
                     {!isRotationOpen ? <MdKeyboardArrowDown size={25} /> : <MdKeyboardArrowUp size={25} />}
                  </li>
                  {isRotationOpen && (
                     <div className='absolute top-8 left-4 rounded-sm bg-white text-black px-4 py-4 transition  ease-in-out duration-700 '>
                        <ul className=' space-y-4 font-medium text-xl  '>
                           <li>Morning Rotation</li>
                           <li>Afternoon Rotation</li>
                           <li>Evening Rotation</li>
                           <li>Night Rotation</li>
                        </ul>
                     </div>
                  )}
                  <li onClick={handleClickLocation} className='flex items-center justify-center space-x-2'>
                     Locations
                     {!isLocationOpen ? <MdKeyboardArrowDown size={25} /> : <MdKeyboardArrowUp size={25} />}
                     {isLocationOpen && (
                        <div className='absolute top-8 left- rounded-sm bg-white text-black px-4 py-4 transition  ease-in-out duration-700 '>
                           <ul className='space-y-4 font-medium text-xl'>
                              <li>Bengaluru</li>
                              <li>Mumbai</li>
                              <li>Chennai</li>
                              <li>Hyderabad</li>
                              <li>Noida</li>
                           </ul>
                        </div>
                     )}
                  </li>
                  <li>Contact</li>
                  <li>Sign Up</li>
               </ul>
            </div>
            <div onClick={handleClickBar} className='FaBars md:hidden flex'>
               {!isBarOpen ? <FaBars size={30} /> : <ImCross size={30} />}
               {isBarOpen && (
                  <div className='  '>
                     <div className=' absolute left-10 top-20 '>
                        <ul className='space-y-8'>
                           <li>Home</li>
                           <li onClick={handleClickRotation} className='flex items-center justify-center space-x-2'>
                              Rotation
                              {!isRotationOpen ? <MdKeyboardArrowRight size={30} /> : <MdOutlineKeyboardArrowLeft size={30} />}
                              {isRotationOpen && (
                                 <div className='absolute top-24 left-40 rounded-sm bg-white text-black  flex flex-col p-4 items-start '>
                                    <ul className=' space-y-4 font-medium text-xl w-96  '>
                                       <li>Morning Rotation</li>
                                       <li>Afternoon Rotation</li>
                                       <li>Evening Rotation</li>
                                       <li>Night Rotation</li>
                                    </ul>
                                 </div>
                              )}
                           </li>
                           <li onClick={handleClickLocation} className='flex items-center justify-center space-x-2'>
                              Location
                              {!isLocationOpen ? <MdKeyboardArrowRight size={30} /> : <MdOutlineKeyboardArrowLeft size={30} />}
                              {isLocationOpen && (
                                 <div className='absolute top-44 left-40 rounded-sm bg-white text-black  flex flex-col p-4 items-start '>
                                    <ul className=' space-y-4 font-medium text-xl w-96  '>
                                       <li>Bengaluru</li>
                                       <li>Mumbai</li>
                                       <li>Chennai</li>
                                       <li>Hyderabad</li>
                                    </ul>
                                 </div>
                              )}
                           </li>

                           <li>Contact</li>
                           <li>Sign Up</li>
                        </ul>
                     </div>
                  </div>
               )}
            </div>
         </div>
      </>
   );
};

export default Navbar;
