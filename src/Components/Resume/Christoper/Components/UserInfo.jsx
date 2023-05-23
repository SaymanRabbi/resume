import React from 'react';
import LeftuserInfo from './LeftuserInfo';
import RightUserInfo from './RightUserInfo';

const UserInfo = ({id}) => {
    return (
        <div className=' grid grid-cols-12 gap-5'>
            <LeftuserInfo id={id}/>
            <RightUserInfo id={id}/>
        </div>
    );
};

export default UserInfo;