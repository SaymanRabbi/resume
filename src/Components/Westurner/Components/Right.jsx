import React from 'react';
import Profile from './Profile';
import Employment from './Employment';
import Education from './Education';

const Right = () => {
    return (
        <div className=' col-span-8 pt-[300px] px-8'>
            <Profile/>
            <Employment/>
            <Education/>
        </div>
    );
};

export default Right;