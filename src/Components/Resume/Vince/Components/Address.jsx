import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope,faLocationDot,faPhone } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import useWidth from '../../../../hooks/useWidth';

const Address = () => {
    const width = useWidth()
    return (
        <div className={`flex gap-x-10 justify-between ${width>1280?'py-2':'py-4'} w-[100%] h-[5%]`}>
            <div className=' flex md:gap-x-2 gap-x-1 items-center'>
                 
                <FontAwesomeIcon icon={faEnvelope} className={`text-[#B02124] ${width>1280?'text-[6px]':'text-[18px]'}`}/>
                <h2 className={`md:font-[500] sm:font-[300] user_email ${width>1280?'text-[6px]':'text-[18px]'}`}>Test@gmail.com</h2>
            </div>
            <div className=' flex gap-x-2 items-center'>
            <FontAwesomeIcon icon={faLocationDot} className={ `text-[#B02124] ${width>1280?'text-[6px]':'text-[18px]'}`}/>
                <h2 className={ `font-[500] ${width>1280?'text-[6px]':'text-[18px]'}`}>
                   <span className=' user_address'>
                   2400 President Ave, Harbor City, CA 90710,
                    </span><span className=' user_country'>
                   United States
                   </span>
                </h2>
            </div>
            <div className=' flex gap-x-2 items-center'>
            <FontAwesomeIcon icon={faPhone} className={` text-[#B02124] ${width>1280?'text-[6px]':'text-[18px]'}`}/>
                <h2 className={` font-[500] user_phone ${width>1280?'text-[6px]':'text-[18px]'}`}>
                   (310) 326-0000
                </h2>
            </div>
        </div>
    );
};

export default Address;