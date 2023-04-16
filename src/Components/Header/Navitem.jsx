import React from 'react';
import { Link } from 'react-router-dom';
import './Navitem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown,faBars } from '@fortawesome/free-solid-svg-icons';
const Navitem = () => {
    return (
        <div >
            {/* -------Navitem Left------- */}
           <div className='lg:flex items-center gap-x-20 hidden '>
           <div className='flex gap-x-10'>
              <Link to="/resume-templates" className="nav_item">Resume Templates
                <FontAwesomeIcon icon={faAngleDown} className='ml-2'/>
              </Link>
                <Link to="/resume-builder" className="nav_item">Resume Builder
                <FontAwesomeIcon icon={faAngleDown} className='ml-2'/>
                </Link>
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
             <FontAwesomeIcon icon={faBars} className='lg:hidden text-2xl text-blue-500 cursor-pointer' />
           </div>
        </div>
    );
};

export default Navitem;