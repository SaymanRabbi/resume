import React from 'react';
import Profile from './Profile';
import Employment from './Employment';

const Left = () => {
    return (
        <div className=' col-span-9'>
            <Profile/>
            <Employment/>
        </div>
    );
};

export default Left;