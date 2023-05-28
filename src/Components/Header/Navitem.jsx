import { faAngleDown, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase.init';
import './Navitem.css';
const Navitem = ({handleClick}) => {
  const navigate = useNavigate()
  const [open,SetOpen] = useState(false);
  const [show,SetShow] = useState(false);
  const [user] = useAuthState(auth);
  const customUser = JSON.parse(localStorage.getItem('user'))
   const path = useLocation().pathname;
   const [signOut] = useSignOut(auth);
   const navigateToHome = () =>{
      navigate('/')
   }
   const toggle = () =>{
    setTimeout(() => {
       SetShow(!show)
    }, 500);
   }
   const LogOut =async () =>{
     await signOut();
     localStorage.removeItem('user')
     toast.success('Log Out Successfully')
     setTimeout(() => {
     navigate('/login')
     SetShow(false)
     }, 100);
   }
    return (
        <div >
            {/* -------Navitem Left------- */}
          {
            path !== '/login' && path !== '/signup' && path !== '/app/profile' ?  <>
            <div className='lg:flex items-center gap-x-20 hidden relative'>
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
                 {
                  !user && !customUser ? <>
                  <Link to="/login" className="text-blue-500 hover:text-gray-900 font-[500]">Login</Link>
                 <Link to="/signup" className="text-white hover:bg-blue-600 font-[500] bg-blue-500 py-3 px-6 rounded-md">Sign Up</Link>
                  </> :  <div className=' flex gap-x-3 items-center'> 
                  <h2 className='nav_item'>
                    {user?.displayName || customUser?.displayName}
                  </h2>
                    <img className=' w-[35px] h-[35px] rounded-full cursor-pointer' src={
                      user?.photoURL || customUser?.photoURL
                    } alt=""  onClick={toggle}/>

                  </div>
                 }
               </div>
             {/* ---------Navitem Right---------- */}
            </div>
           {
            show ?  <div className=' absolute  w-auto right-8 top-16 rounded-[8px] shadow-xl bg-gray-50 transition duration-500  ease-in  z-20'>

            <div className=' py-[12px] px-6 text-gray-600 font-[600] text-[17px]'>
               <Link to='/app/profile' className=' cursor-pointer'>My Profile</Link>
               <p className=' py-2 cursor-pointer'>
                 FAQ
               </p>
               <p onClick={LogOut} className=' cursor-pointer'>
                Log Out
               </p>
            </div>

          </div>: null
           }
            <div>
              {
              path !=='/app/profile' ?  open ?<FontAwesomeIcon onClick={()=>SetOpen(!open)} icon={faXmark} className='lg:hidden text-2xl text-blue-500 cursor-pointer' />:<FontAwesomeIcon onClick={()=>SetOpen(!open)} icon={faBars} className='lg:hidden text-2xl text-blue-500 cursor-pointer' /> : null
              }
            </div>
            <div>
               {
                 open?<div className=' bg-white fixed top-30  right-0 z-10  h-[60vh] w-[100%] mt-6 px-10 lg:hidden'>
                   <div className=' items-center gap-x-20 relative'>
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
                 {
                  !user && !customUser ? <>
                  <Link to="/login" className="text-blue-500 hover:text-gray-900 font-[500]">Login</Link>
                 <Link to="/signup" className="text-white hover:bg-blue-600 font-[500] bg-blue-500 py-3 px-6 rounded-md">Sign Up</Link>
                  </> :   <div className=' flex gap-x-3 items-center'> 
                  <h2 className='nav_item'>
                    {user?.displayName || customUser?.displayName}
                  </h2>
                    <img className=' w-[35px] h-[35px] rounded-full cursor-pointer' src={
                      user?.photoURL || customUser?.photoURL
                    } alt="" onClick={toggle}/>

                  </div>
                 }
               </div>
             {/* ---------Navitem Right---------- */}
            </div>
                 {
                  show ?  <div className=' absolute  w-auto rounded-[8px] shadow-xl bg-gray-50 transition duration-500  ease-in  z-20'>
                  <div className=' py-[12px] px-6 text-gray-600 font-[600] text-[17px]'>
                    <Link to='/app/profile' className=' cursor-pointer'>My Profile</Link>
                    <p className=' py-2 cursor-pointer'>
                      FAQ
                    </p>
                    <p onClick={LogOut} className=' cursor-pointer'>
                      Log Out
                    </p>
                  </div>
                  </div> : null
                 }
                 </div> :null
               }
            </div>
            </>:  path === '/app/profile' ? <>
            <div className=' flex gap-x-3 items-center relative'> 
                  <h2 className='nav_item'>
                    {user?.displayName || customUser?.displayName}
                  </h2>
                    <img className=' w-[35px] h-[35px] rounded-full cursor-pointer' src={
                      user?.photoURL || customUser?.photoURL
                    } alt="" onClick={toggle}/>

                  </div>
                  {
                  show ?  <div className=' absolute top-16  w-auto rounded-[8px] shadow-xl bg-gray-50 transition duration-500  ease-in'>
                  <div className=' py-[12px] px-6 text-gray-600 font-[600] text-[17px]'>
                    <Link to='/app/profile' className=' cursor-pointer'>My Profile</Link>
                    <p className=' py-2 cursor-pointer'>
                      FAQ
                    </p>
                    <p onClick={LogOut} className=' cursor-pointer'>
                      Log Out
                    </p>
                  </div>
                  </div> : null
                 }
            </> : <span className=' text-2xl font-[350] text-gray-500 cursor-pointer hover:text-blue-500'
             onClick={()=>navigateToHome()}
            >
              X
            </span>
           }
        </div>
    );
};

export default Navitem;