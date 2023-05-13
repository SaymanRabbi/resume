import React from 'react';
import useWidth from '../../../../hooks/useWidth';
import { useLocation } from 'react-router-dom';
import { data } from '../../../../App';
import { useContext } from 'react';

const Profile = () => {
    const width = useWidth()
    const path = useLocation().pathname.split('/')[2]
    const {allData} = useContext(data)
  const personal_info = allData[path]?.personal_details?.summary
    return (
        <div>
            {
                personal_info? <>
                 <h2 className={`font-semibold uppercase tracking-widest ${width>=1280 || width<=480 || width<=768?"text-[10px]":"text-2xl "}`}>
                Profile
            </h2>
            <div className={`w-full  bg-[#000000] ${width>=1280 || width<=480 || width<=768?"h-[1px] my-1 ":"h-[2px] my-3 "}`}></div>
            <p className={`font-[400] user_profile ${width>=1280 || width<=480 || width<=768?"text-[7px]":""}`}>
            {
                personal_info
            }
            </p>
                </> : null
            }
           
        </div>
    );
};

export default Profile;