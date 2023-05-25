import React from 'react';
import Logo from './Logo';
import Navitem from './Navitem';

const Header = ({handleClick}) => {
    return (
        <div className=' relative w-[100%] h-[100px]'>
<div
        className='flex justify-between px-8  items-center py-5 bg-gray-100 border-b-gray-700 lg:static fixed z-20 w-[100%]
        '>
            <Logo/>
            <Navitem handleClick={handleClick}/>
        </div>
        </div>
    );
};

export default Header;