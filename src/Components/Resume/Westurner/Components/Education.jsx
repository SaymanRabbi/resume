import React from 'react';
import useWidth from '../../../../hooks/useWidth';

const Education = () => {
    const education=[
        {
            id:1,
            tittle:'Bachelor of Marketing, Colorado State University',
            year:'aug 2005 - may 2009',
            location:'Colorado Springs',
        }
    ]
    const width = useWidth()
    return (
        <div className={`${width>1280?" my-1":"my-3"}`}>
            <h2 className={`font-semibold uppercase tracking-widest ${width>1280?"text-[10px]":"text-2xl "}`}>
                Educations
            </h2>
            <div className={`w-full  bg-[#000000] ${width>1280?"h-[1.5px] my-1 ":"h-[2px] my-3 "}`}></div>
            {
                education.map((item)=><div key={item.id}>
                    <div className=' flex justify-between'>
             <h2 className={`font-bold text-[#1b3055] edu_tittle ${width>1280?"text-[8px]":""}`}>
                 {
                        item.tittle
                 }
                </h2>
                <h2 className={`font-bold text-[#1b3055] edu_location ${width>1280?"text-[8px]":""}`}>
                 {
                        item.location
                 }
                </h2>
             </div>
                <h2 className={`text-gray-600 font-semibold mb-3 edu_year ${width>1280?"text-[8px]":""}`}>
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