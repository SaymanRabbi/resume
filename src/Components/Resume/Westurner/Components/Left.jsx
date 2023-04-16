import React from 'react';
import Skills from './Skills';

const Left = () => {
    return (
        <div className=' col-span-4 h-[1200px] bg-[#F4F4F3] pt-[300px] pl-12 pr-6'>
            <h2 className=' font-semibold text-2xl uppercase tracking-widest'>
                Details
            </h2>
            <div className=' my-3 w-full h-[2px] bg-[#000000]'></div>
            <div>
                <h2 className=' uppercase font-[600] text-2xl'>
                  Address
                </h2>
                <p className=' text-[#000000] text-sm font-[500] mt-1'>
                    <span className=' user_address'>1234 Main Street <br /> Bloulder CO 80301</span> <br /> <span className=' user_country'>United States </span>
                </p>
            </div>
            <div className=' my-3'>
                <h2 className=' uppercase font-[600] text-2xl'>
                  Phone
                </h2>
                <p className=' text-[#000000] text-sm font-[500] mt-1 user_phone'>
                    123-456-7890
                </p>
            </div>
            <div className=' my-3'>
                <h2 className=' uppercase font-[600] text-2xl'>
                 Email
                </h2>
                <p className=' text-[#000000] text-sm font-[500] mt-1 user_email'>
                    Email@gmail.com
                </p>
            </div>
            <Skills/>
        </div>
    );
};

export default Left;