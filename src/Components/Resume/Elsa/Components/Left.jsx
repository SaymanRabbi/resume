import React from 'react';
import Skills from './Skills';
import { data } from '../../../../App';
import { useLocation } from 'react-router-dom';
import { useContext } from 'react';
import useWidth from '../../../../hooks/useWidth';

const Left = ({id}) => {
    const path = useLocation().pathname.split('/')[2]
    const {allData} = useContext(data)
    const profile_info =  allData[id||path]?.personal_details
    const width = useWidth()
    return (
        <div className={`col-span-3 ${width>=1280 || width<=480 || width<=768?"pl-4 pr-2":"pl-8 pr-4"}`}>
            <h2 className={`font-semibold  uppercase tracking-widest  text-[#D0C2A6] ${width>=1280 || width<=480 || width<=768?"text-[14px] mb-2":"text-2xl mb-7"}`}>
                Details
            </h2>
           
            <div>
                <p className={`text-[#000000] font-[500] ${width>=1280 || width<=480 || width<=768?" text-[8px]":" mt-1 text-sm"}`}>
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
                    <h2 className={`uppercase font-[600] ${width>=1280 || width<=480 || width<=768?"text-[14px]":"text-2xl"}`}>
                  Phone
                </h2>
                <p className={`text-[#000000] font-[500] ${width>=1280 || width<=480 || width<=768?" text-[8px]":" mt-1 text-sm"}`}>
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
                    <h2 cclassName={`uppercase font-[600] ${width>=1280 || width<=480 || width<=768?"text-[14px]":"text-2xl"}`}>
                 Email
                </h2>
                <p className={`text-[#000000] font-[500] ${width>=1280 || width<=480 || width<=768?"text-[8px]":" mt-1 text-sm"}`}>
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