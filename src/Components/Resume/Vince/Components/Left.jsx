import React from 'react';
import Profile from './Profile';
import Employment from './Employment';
import useWidth from '../../../../hooks/useWidth';

const Left = ({id}) => {
    const width = useWidth()
    return (
        <div className={`${width>=1280 || width<=480 || width<=768?'col-span-8':'col-span-9'}`}>
            <Profile id={id}/>
            <Employment id={id}/>
        </div>
    );
};

export default Left;