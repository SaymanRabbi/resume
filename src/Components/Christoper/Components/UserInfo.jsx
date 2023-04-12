import React from 'react';
import LeftuserInfo from './LeftuserInfo';
import RightUserInfo from './RightUserInfo';

const UserInfo = () => {
    return (
        <div className=' grid grid-cols-12 gap-5'>
            <LeftuserInfo/>
            <RightUserInfo/>
        </div>
    );
};

export default UserInfo;