import React from 'react';
import './Header.css'
import img from './img/user2.jpg'
const Header = () => {
    return (
        <div className=' grid grid-cols-12'>
          <div className=' col-span-8 pl-10 py-10'>
          <h2 className=' text-[#003469] text-5xl font-bold user_name'>
           Daryal Banks 
           </h2> 
           <h2 className='text-[#003469] text-5xl font-[500] user_tittle mt-2'>
            Motion Graphices Arist
           </h2>
           <p className=' mt-2 font-[500] user_profile'>
           Skilled Motion Graphics Artist with vast experience creating
          motion graphics for television and film advertisements,
         and other electronic media. Adept in communicating and
        collaborating with directors, project managers, and other
           creative professionals to ensure the successful completion of a
          job. Experienced in technical drawing, character development,
           3D designs, and animation technologies. Ability to effectively
        manipulate visual aspects of images to create the illusion of
       motion.
           </p>
          </div>
          <div className='relative w-full h-full col-span-4'>
          <div className=' clip pl-3 relative'>
            <img src={img} alt="" className='bg-center h-full user_img bg-cover absolute top-[-5px]'/>
            </div>
          </div>
        </div>
    );
};

export default Header;