import React from 'react';
import useWidth from '../../../../hooks/useWidth';
import { data } from '../../../../App';
import { useLocation } from 'react-router-dom';
import { useContext } from 'react';

const Profile = () => {
    const width = useWidth()
    const path = useLocation().pathname.split('/')[2]
    const {allData} = useContext(data)
   const datas = allData?.[path]?.personal_details?.summary
    return (
        <>
        {
            datas?<div className={`${width>1280?'mt-[2px]':"mt-4"}`}>
            <button className={`uppercase bg-black text-white font-semibold tracking-widest ${width>1280?"px-[5px] text-[8px]":"px-3 py-1"}`}>profile</button>
            <p className={`font-[500] mt-1 profile user_profile ${width>1280?"text-[7px]":""}`}>
            {
                datas
            }
            </p>
        </div>:null
        }
        </>
    );
};

export default Profile;