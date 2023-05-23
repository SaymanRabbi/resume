import React from 'react';
import useWidth from '../../../../hooks/useWidth';
import { useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { data } from '../../../../App';

const Profile = ({id}) => {
    const width = useWidth()
    const path = useLocation().pathname.split('/')[2]
    const {allData} = useContext(data)
    const profile =  allData[id||path]?.personal_details?.summary
    return (
        <div className={`${width>=1280 || width<=480 || width<=768?'py-1':'py-6'}`}>
            {
                profile ? <>
                <h2 className={`italic ${width>=1280 || width<=480 || width<=768?"text-[14px]":"text-2xl"} font-bold`}>Profile</h2>
            <p  className={` font-[500] ${width>=1280 || width<=480 || width<=768?"text-[9px]":"text-xl mt-2"} user_profile`}>
                
              {
                    profile
              }
            </p>
                </> : null
            }
        </div>
    );
};

export default Profile;