import React from 'react';
import Profile from './Profile';
import Employment from './Employment';
import Education from './Education';
import useWidth from '../../../../hooks/useWidth';

const Right = () => {
    const width = useWidth()
    return (
        <div className={` col-span-8 ${width>=1280 || width<=480 || width<=768?"pt-[150px]":"pt-[300px]"} px-8`}>
            <Profile/>
            <Employment/>
            <Education/>
        </div>
    );
};

export default Right;