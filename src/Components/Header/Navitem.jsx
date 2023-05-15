import React from 'react';
import { Link } from 'react-router-dom';
import './Navitem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown,faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
const Navitem = ({handleClick}) => {
  const [open,SetOpen] = useState(false);
    return (
        <div >
            {/* -------Navitem Left------- */}
           <div className='lg:flex items-center gap-x-20 hidden '>
           <div className='flex gap-x-10'>
              <Link to="/resume-templates" className="nav_item">Resume Templates
                <FontAwesomeIcon icon={faAngleDown} className='ml-2'/>
              </Link>
                <h2 onClick={()=>handleClick()} className="nav_item cursor-pointer">Resume Builder
                <FontAwesomeIcon icon={faAngleDown} className='ml-2'/>
                </h2>
                <Link to="/blog" className="nav_item">Blog</Link>
                <Link to="/faq" className="nav_item">FAQ</Link>
            </div>
            {/* -------Navitem Left------- */}
            {/* ---------Navitem Right---------- */}
              <div className=' flex gap-x-4 items-center'>
                <Link to="/login" className="text-blue-500 hover:text-gray-900 font-[500]">Login</Link>
                <Link to="/signup" className="text-white hover:bg-blue-600 font-[500] bg-blue-500 py-3 px-6 rounded-md">Sign Up</Link>
              </div>
            {/* ---------Navitem Right---------- */}
           </div>
           <div>
             {
              open?<FontAwesomeIcon onClick={()=>SetOpen(!open)} icon={faXmark} className='lg:hidden text-2xl text-blue-500 cursor-pointer' />:<FontAwesomeIcon onClick={()=>SetOpen(!open)} icon={faBars} className='lg:hidden text-2xl text-blue-500 cursor-pointer' />
             }
           </div>
           <div>
              {
                open?<div className=' bg-white fixed top-30  right-0 z-10  h-[60vh] w-[100%] mt-6 px-10 lg:hidden'>
                  <div className=' items-center gap-x-20 '>
           <div className='flex gap-x-10 flex-col'>
              <Link to="/resume-templates" className="nav_item text-2xl py-2">Resume Templates
               
              </Link>
                <Link to="/resume_builder/builder" className="nav_item text-2xl py-2">Resume Builder
                </Link>
                <Link to="/blog" className="nav_item text-2xl py-2">Blog</Link>
                <Link to="/faq" className="nav_item text-2xl py-2">FAQ</Link>
            </div>
            {/* -------Navitem Left------- */}
            {/* ---------Navitem Right---------- */}
              <div className=' flex gap-x-4 items-center'>
                <Link to="/login" className="text-blue-500 hover:text-gray-900 font-[500]">Login</Link>
                <Link to="/signup" className="text-white hover:bg-blue-600 font-[500] bg-blue-500 py-3 px-6 rounded-md">Sign Up</Link>
              </div>
            {/* ---------Navitem Right---------- */}
           </div>
                </div> :null
              }
           </div>
        </div>
    );
};

export default Navitem;