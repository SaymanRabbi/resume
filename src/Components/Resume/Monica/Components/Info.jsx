import React from 'react';
import { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { data } from '../../../../App';
import useWidth from '../../../../hooks/useWidth';

const Info = () => {
    const path = useLocation().pathname.split('/')[2]
  const {allData} = useContext(data)
  const profile = allData[path]?.personal_details?.summary
  const width = useWidth()
    return (
        <div className={` ${width>1280?" py-1":" py-10"}`}>
            {
                profile ? <p className={` font-[500] user_profile ${width>1280?"text-[10px]":" my-3"}`}>
                {
                    profile
                }
               </p> : null
            }
            
        </div>
    );
};

export default Info;