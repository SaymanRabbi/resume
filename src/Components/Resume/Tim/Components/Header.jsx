import React from 'react';

const Header = () => {
    return (
        <div className=' text-center'>
            <h2 className=' text-2xl font-bold text-[#1b3055]'>
                <span className=' user_name'>Tim Stewart,</span> <span className='user_tittle'>Accountant</span>
            </h2>
            <h2 className=' mt-3 address font-semibold'>
                <span className='user_address'>8 0Gold Street, New York, NY 10038,</span> <span className='user_country'>United States,</span> <span className='user_country'>(917) 444-4444,</span> <span className='user_email'>timstewart@gmail.com</span>
            </h2>
        </div>
    );
};

export default Header;