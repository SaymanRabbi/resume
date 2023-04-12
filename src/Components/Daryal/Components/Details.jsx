import React from 'react';
import Skills from './Skills';
import References from './References';

const Details = () => {
    return (
        <div className=' col-span-4 pr-8 '>
            <h2 className='text-[#003469] font-[700] text-2xl mb-2'>Details</h2>
            <div className=' font-[500]'>
            <h2 className=' mt-2 user_address'>7110 Summertime Lane,
              Culver City, CA 90230,<span className=' user_country'>United
              States</span></h2>
              <h2 className='user_phone'>(310) 784-9043</h2>
              <h2 className='user_email'>darr7anksart@gmail.com</h2>
            </div>
            <Skills/>
            <References/>
        </div>
    );
};

export default Details;