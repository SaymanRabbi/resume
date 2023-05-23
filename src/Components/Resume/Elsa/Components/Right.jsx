import React from 'react';
import Profile from './Profile';
import Employment from './Employment';
import Education from './Education';

const Right = ({id}) => {
    return (
        <div className=' col-span-9  px-8'>
            <Profile id={id}/>
            <Employment id={id}/>
            <Education id={id}/>
        </div>
    );
};

export default Right;