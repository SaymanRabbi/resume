import React from 'react';

const Hero = ({tittle,dec,button}) => {
    return (
        <div>
            <div className=' max-w-[670px] mx-auto mb-12 text-center'>
                <h2 className=' md:font-[700] font-[700] text-[24px] md:text-[54px] m-0 leading-[54px] mb-[12px]'>
                    {tittle}
                </h2>
                <p className=' font-[400] text-[18px] text-[#4F4F4F]'>
                    {dec}
                </p>
                <button className=' font-[500] text-[18px] text-[#FFFFFF] bg-[#2F80ED] rounded-md py-3 px-6 mt-6'>
                    {button}
                </button>
            </div>
        </div>
    );
};

export default Hero;