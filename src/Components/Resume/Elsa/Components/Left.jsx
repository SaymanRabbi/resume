import React from 'react';
import Skills from './Skills';
import { data } from '../../../../App';
import { useLocation } from 'react-router-dom';
import { useContext } from 'react';

const Left = () => {
    const path = useLocation().pathname.split('/')[2]
    const {allData} = useContext(data)
    const profile_info =  allData[path]?.personal_details
    return (
        <div className=' col-span-3 pl-8 pr-4'>
            <h2 className=' font-semibold text-2xl uppercase tracking-widest mb-7 text-[#D0C2A6]'>
                Details
            </h2>
           
            <div>
                <p className=' text-[#000000] text-sm font-[500] mt-1'>
                    <span className='user_address'>
                    {
                        profile_info?.user_postal_code  
                    } {
                        profile_info?.user_city
                    }
                        </span> <br /> <span className='user_country'>
                    {
                        profile_info?.user_country
                    }
                    </span>
                </p>
            </div>
            <div className=' my-3'>
                {
                    profile_info?.user_phone  ? <>
                    <h2 className=' uppercase font-[600] text-2xl'>
                  Phone
                </h2>
                <p className=' text-[#000000] text-sm font-[500] mt-1 user_phone'>
                    {
                        profile_info?.user_phone
                    }
                </p>
                    </> : null
                }
            </div>
            <div className=' my-3'>
                {
                    profile_info?.user_email  ? <>
                    <h2 className=' uppercase font-[600] text-2xl'>
                 Email
                </h2>
                <p className=' text-[#000000] text-sm font-[500] mt-1 user_email'>
                    {
                        profile_info?.user_email
                    }
                </p>
                     </> : null
                }
            </div>
            <Skills/>
        </div>
    );
};

export default Left;