import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope,faLocationDot,faPhone } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import useWidth from '../../../../hooks/useWidth';
import { useContext } from 'react';
import { data } from '../../../../App';
import { useLocation } from 'react-router-dom';

const Address = () => {
    const width = useWidth()
    const path = useLocation().pathname.split('/')[2]
    const {allData} = useContext(data)
    const profile_info =  allData[path]?.personal_details
    return (
        <div className={`flex gap-x-10 justify-between ${width>1280?'py-2':'py-4'} w-[100%] h-[5%]`}>
            <div className=' flex md:gap-x-2 gap-x-1 items-center'>
                 
                {
                    profile_info?.user_email ? <><FontAwesomeIcon icon={faEnvelope} className={`text-[#B02124] ${width>1280?'text-[6px]':'text-[18px]'}`}/>
                    <h2 className={`md:font-[500] sm:font-[300] user_email ${width>1280?'text-[6px]':'text-[18px]'}`}>{
                        profile_info?.user_email
                    }</h2></> : null
                }
            </div>
            <div className=' flex gap-x-2 items-center'>
             {
                profile_info ? <><FontAwesomeIcon icon={faLocationDot} className={ `text-[#B02124] ${width>1280?'text-[6px]':'text-[18px]'}`}/>
                <h2 className={ `font-[500] ${width>1280?'text-[6px]':'text-[18px]'}`}>
                   <span className=' user_address'>
                   {
                          profile_info?.user_city
                   } {
                          profile_info?.user_postal_code
                   }
                    </span><span className=' user_country'>
                   {
                            profile_info?.user_country  
                   }
                   </span>
                </h2></> : null
             }
            </div>
            <div className=' flex gap-x-2 items-center'>
           {
             profile_info?.user_phone ? <>
              <FontAwesomeIcon icon={faPhone} className={` text-[#B02124] ${width>1280?'text-[6px]':'text-[18px]'}`}/>
                <h2 className={` font-[500] user_phone ${width>1280?'text-[6px]':'text-[18px]'}`}>
                   {
                            profile_info?.user_phone
                   }
                </h2>
             </> :null
           }
            </div>
        </div>
    );
};

export default Address;