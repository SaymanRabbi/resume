import React from 'react';
import Logo from './Logo';
import Navitem from './Navitem';

const Header = ({handleClick}) => {
    return (
        <div
        className='flex justify-between px-8  items-center py-8'>
            <Logo/>
            <Navitem handleClick={handleClick}/>
        </div>
    );
};

export default Header;