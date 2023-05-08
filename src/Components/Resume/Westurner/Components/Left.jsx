import React from 'react';
import Skills from './Skills';
import useWidth from '../../../../hooks/useWidth';

const Left = () => {
    const width = useWidth()
    return (
        <div className={`col-span-4 bg-[#F4F4F3] ${width>1280?" pt-[150px] pl-8 pr-3 ":"h-[1200px]  pt-[300px] pl-12 pr-6 "}`}>
            <h2 className={`font-semibold uppercase tracking-widest ${width>1280?"text-[10px]":"text-2xl"}`}>
                Details
            </h2>
            <div className={`w-full  bg-[#000000] ${width>1280?"h-[1px] my-1 ":"h-[2px] my-3 "}`}></div>
            <div>
                <h2 className={` tracking-widest font-[600] ${width>1280?"text-[10px]":"text-2xl"}`}>
                  Address
                </h2>
                <p className={`text-[#000000]  font-[500] mt-1 ${width>1280?"text-[8px]":"text-sm"}`}>
                    <span className=' user_address'>1234 Main Street <br /> Bloulder CO 80301</span> <br /> <span className=' user_country'>United States </span>
                </p>
            </div>
            <div className={` ${width>1280?"my-1":"my-3"}`}>
                <h2 className={`uppercase font-[600] ${width>1280?"text-[10px]":"text-2xl"}`}>
                  Phone
                </h2>
                <p className={`text-[#000000] font-[500]  user_phone ${width>1280?"text-[8px]":"mt-1 text-sm"}`}>
                    123-456-7890
                </p>
            </div>
            <div className={` ${width>1280?"my-1":"my-3"}`}>
                <h2 className={`uppercase font-[600] ${width>1280?"text-[10px]":"text-2xl"}`}>
                 Email
                </h2>
                <p className={`text-[#000000] font-[500]  user_email ${width>1280?"text-[8px]":"mt-1 text-sm"}`}>
                    Email@gmail.com
                </p>
            </div>
            <Skills/>
        </div>
    );
};

export default Left;