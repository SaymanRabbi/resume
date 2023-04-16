import React from 'react';

const Education = () => {
    const education=[
        {
            id:1,
            tittle:'Bachelor of Marketing, Colorado State University',
            year:'aug 2005 - may 2009',
            location:'Colorado Springs',
        }
    ]
    return (
        <div className=' mt-3 education'>
            <h2 className=' font-semibold text-2xl uppercase tracking-widest'>
                Educations
            </h2>
            <div className=' my-3 w-full h-[3px] bg-[#000000]'></div>
            {
                education.map((item)=><div key={item.id}>
                    <div className=' flex justify-between'>
             <h2 className='font-bold text-[#1b3055] edu_tittle'>
                 {
                        item.tittle
                 }
                </h2>
                <h2 className='font-bold text-[#1b3055] edu_location'>
                 {
                        item.location
                 }
                </h2>
             </div>
                <h2 className=' text-gray-600 font-semibold mb-3 edu_year'>
                {
                        item.year
                }
                </h2>
                </div>)
            }
        </div>
    );
};

export default Education;