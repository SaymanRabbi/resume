import React from 'react';
import { Link } from 'react-router-dom';

const Hero = ({tittle,dec,button}) => {
    return (
        <div>
            <div className=' max-w-[670px] mx-auto mb-12 text-center'>
                <h2 className=' md:font-[700] font-[700] text-[24px] md:text-[54px] m-0 md:leading-[54px] leading-[30px] mb-[12px]'>
                    {tittle}
                </h2>
                <p className=' font-[400] text-[18px] text-[#4F4F4F]'>
                    {dec}
                </p>
                <Link to='/resume_builder/builder'>
                    <button  className=' font-[500] text-[18px] text-[#FFFFFF] bg-[#2F80ED] rounded-md py-3 px-6 mt-6'>
                    {button}

                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Hero;