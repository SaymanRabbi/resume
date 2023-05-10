import React from 'react';
import { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { data } from '../../../../App';

const Info = () => {
    const path = useLocation().pathname.split('/')[2]
  const {allData} = useContext(data)
  const profile = allData[path]?.personal_details?.summary
    return (
        <div className=' py-10'>
            {
                profile ? <p className=' my-3 font-[500] user_profile'>
                {
                    profile
                }
               </p> : null
            }
            
        </div>
    );
};

export default Info;