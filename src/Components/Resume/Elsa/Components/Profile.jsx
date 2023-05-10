import React from 'react';
import { data } from '../../../../App';
import { useContext } from 'react';
import { useLocation } from 'react-router-dom';

const Profile = () => {
    const path = useLocation().pathname.split('/')[2]
    const {allData} = useContext(data)
    const profile =  allData[path]?.personal_details?.summary
    return (
        <div>
            {
                profile ? <> <h2 className=' font-semibold text-2xl uppercase tracking-widest text-[#D0C2A6] mb-8'>
                Profile
            </h2>
            
            <p className=' font-[500] user_profile'>
           {
                profile
           }
            </p></> : null
            }
        </div>
    );
};

export default Profile;