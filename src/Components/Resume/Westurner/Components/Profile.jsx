import React from 'react';
import useWidth from '../../../../hooks/useWidth';

const Profile = () => {
    const width = useWidth()
    return (
        <div>
            <h2 className={`font-semibold uppercase tracking-widest ${width>1280?"text-[10px]":"text-2xl "}`}>
                Profile
            </h2>
            <div className={`w-full  bg-[#000000] ${width>1280?"h-[1px] my-1 ":"h-[2px] my-3 "}`}></div>
            <p className={`font-[400] user_profile ${width>1280?"text-[7px]":""}`}>
            As a sales manager, I am a results-oriented professional with a proven track record of achieving and exceeding sales targets. With excellent leadership and communication skills, I have the ability to motivate and inspire my team to drive revenue growth.
            </p>
        </div>
    );
};

export default Profile;