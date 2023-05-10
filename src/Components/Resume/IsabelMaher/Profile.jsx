import React from 'react';
import { data } from '../../../App';
import { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import useWidth from '../../../hooks/useWidth';

const Profile = () => {
    const path = useLocation().pathname.split('/')[2]
  const {allData} = useContext(data)
  const profile =  allData[path]?.personal_details?.summary
   const width = useWidth()
    return (
        <div className={ `grid grid-cols-12  ${width>1280 ?"py-4":"py-14"}`}>
             {
               profile ? <>
               <h1 className={ ` font-semibold uppercase text-[#1b3055] col-span-4 w-full ${width>1280?"text-[14px]":"text-2xl"}`}> 01 Profile</h1>
             <p className={`col-span-8 font-[400] leading-relaxed user_profile ${width>1280?"text-[8px]":""}`}>
             {
                    profile
             }
             </p></>: null
             }
        </div>
    );
};

export default Profile;