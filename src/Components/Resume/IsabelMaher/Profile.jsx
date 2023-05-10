import React from 'react';
import { data } from '../../../App';
import { useContext } from 'react';
import { useLocation } from 'react-router-dom';

const Profile = () => {
    const path = useLocation().pathname.split('/')[2]
  const {allData} = useContext(data)
  const profile =  allData[path]?.personal_details?.summary
    return (
        <div className=' grid grid-cols-12 py-14'>
             {
               profile ? <>
               <h1 className=' text-2xl font-semibold uppercase text-[#1b3055] col-span-4 w-full'> 01 Profile</h1>
             <p className=' col-span-8 font-[400] leading-relaxed user_profile'>
             {
                    profile
             }
             </p></>: null
             }
        </div>
    );
};

export default Profile;