import React from 'react';
import Profile from './Profile';
import Employment from './Employment';
import Education from './Education';

const Right = () => {
    return (
        <div className=' col-span-9  px-8'>
            <Profile/>
            <Employment/>
            <Education/>
        </div>
    );
};

export default Right;