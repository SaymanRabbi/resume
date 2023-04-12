import React from 'react';
import './Header.css'
import img from './Img/userjpg.jpg'
const Header = () => {
    return (
        <div className=' flex justify-center py-12'>
            <div className='text-center'>
                <img src={img} alt="" className='clippath h-[100px] inline-block user_img'/>
                <h2 className=' mt-3 text-[#1b3055] font-semibold text-4xl tracking-wide user_name'>
                    Isabel Maher
                </h2>
                <h2 className=' text-2xl font-[500] text-gray-500 user_tittle'>
                    Teacher
                </h2>
            </div>
        </div>
    );
};

export default Header;