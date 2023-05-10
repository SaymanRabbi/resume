import React from 'react';
import { data } from '../../../../App';
import { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import useWidth from '../../../../hooks/useWidth';

const Profile = () => {
    const path = useLocation().pathname.split('/')[2]
    const {allData} = useContext(data)
    const profile =  allData[path]?.personal_details?.summary
    const width = useWidth()
    return (
        <div>
            {
                profile ? <> <h2 className={`font-semibold  uppercase tracking-widest text-[#D0C2A6]  ${width>1280?"text-[14px] mb-2":"text-2xl mb-8"}`}>
                Profile
            </h2>
            
            <p className={`font-[500] user_profile ${width>1280?"text-[8px]":""}`}>
           {
                profile
           }
            </p></> : null
            }
        </div>
    );
};

export default Profile;