import React from 'react';
import useWidth from '../../../../hooks/useWidth';

const Profile = () => {
    const width = useWidth()
    return (
        <div className={`${width>1280?'py-1':'py-6'}`}>
            <h2 className={`italic ${width>1280?"text-[14px]":"text-2xl"} font-bold`}>Profile</h2>
            <p  className={` font-[500] ${width>1280?"text-[9px]":"text-xl mt-2"} user_profile`}>
                
As an administrative assistant, I am a highly organized and detail-oriented professional with strong communication and interpersonal skills. I possess excellent time management and multitasking abilities, which enable me to prioritize tasks and meet deadlines efficiently.
            </p>
        </div>
    );
};

export default Profile;