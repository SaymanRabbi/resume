import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { data } from '../../../../App';
import useWidth from '../../../../hooks/useWidth';

const Profile = () => {
  const path = useLocation().pathname.split('/')[2]
  const {allData} = useContext(data)
  const personal_info = allData[path]?.personal_details
  const width = useWidth()
    return (
        <div className={` ${width>=1280 || width<=480 || width<=768?"mt-2":"mt-8"}`}>
            
           {
                personal_info?.summary? <>
                <div className={`w-full  bg-[#1B3055] ${width>=1280 || width<=480 || width<=768?"h-[.1rem] mb-1":"h-1 mb-3"}`}></div><div className='grid grid-cols-12'>
                <h2 className={`uppercase font-semibold text-[#1B3055] tracking-wider col-span-3 ${width>=1280 || width<=480 || width<=768?"text-[14px]":"text-2xl"}`}>
                  Profile
                </h2>
                <p className={`user_profile font-medium col-span-9 ${width>=1280 || width<=480 || width<=768 ?"text-[8px]" :""}`}>
                  {
                    personal_info?.summary
                  }
  
                </p>
              </div> <div className={`w-full  bg-[#1B3055] ${width>=1280 || width<=480 || width<=768?"h-[.1rem] mt-1":"h-1 mt-3"}`}></div>
                </>: null
           }
           
        </div>
    );
};

export default Profile;