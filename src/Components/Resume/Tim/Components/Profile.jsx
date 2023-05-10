import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { data } from '../../../../App';

const Profile = () => {
  const path = useLocation().pathname.split('/')[2]
  const {allData} = useContext(data)
  const personal_info = allData[path]?.personal_details
    return (
        <div className=' mt-8'>
            
           {
                personal_info?.summary? <>
                <div className=' w-full h-1 bg-[#1B3055] mb-3'></div><div className='grid grid-cols-12'>
                <h2 className=' uppercase text-2xl font-semibold text-[#1B3055] tracking-wider col-span-3'>
                  Profile
                </h2>
                <p className='user_profile font-medium col-span-9'>
                  {
                    personal_info?.summary
                  }
  
                </p>
              </div> <div className=' w-full h-1 bg-[#1B3055] mt-3'></div>
                </>: null
           }
           
        </div>
    );
};

export default Profile;