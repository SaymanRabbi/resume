import React from 'react';
import useWidth from '../../../../hooks/useWidth';

const Profile = () => {
    const width = useWidth()
    return (
        <div className={`${width>1280?'mt-[2px]':"mt-4"}`}>
            <button className={`uppercase bg-black text-white font-semibold tracking-widest ${width>1280?"px-[5px] text-[8px]":"px-3 py-1"}`}>profile</button>
            <p className={`font-[500] mt-1 profile user_profile ${width>1280?"text-[7px]":""}`}>
            As a student, I am a motivated and dedicated individual with a passion for learning and personal growth. I possess excellent organizational, time management, and problem-solving skills, which enable me to excel in academic and extracurricular activities.
            </p>
        </div>
    );
};

export default Profile;