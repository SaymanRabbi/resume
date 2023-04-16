import React from 'react';
import Skills from './Skills';

const Left = () => {
    return (
        <div className=' col-span-3 pl-8 pr-4'>
            <h2 className=' font-semibold text-2xl uppercase tracking-widest mb-7 text-[#D0C2A6]'>
                Details
            </h2>
           
            <div>
                <h2 className=' uppercase font-[600] text-2xl'>
                  Address
                </h2>
                <p className=' text-[#000000] text-sm font-[500] mt-1'>
                    <span className='user_address'>
                    1234 Main Street  Bloulder CO 80301
                        </span> <br /> <span className='user_country'>
                    United States
                    </span>
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