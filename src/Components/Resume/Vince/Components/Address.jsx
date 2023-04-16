import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope,faLocationDot,faPhone } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

const Address = () => {
    return (
        <div className=' flex gap-x-20 py-4'>
            <div className=' flex gap-x-2 items-center'>
                 
                <FontAwesomeIcon icon={faEnvelope} className=' text-[#B02124] text-xl'/>
                <h2 className=' font-[500] user_email'>Test@gmail.com</h2>
            </div>
            <div className=' flex gap-x-2 items-center'>
            <FontAwesomeIcon icon={faLocationDot} className=' text-[#B02124] text-xl'/>
                <h2 className=' font-[500]'>
                   <span className=' user_address'>
                   2400 President Ave, Harbor City, CA 90710,
                    </span><span className=' user_country'>
                   United States
                   </span>
                </h2>
            </div>
            <div className=' flex gap-x-2 items-center'>
            <FontAwesomeIcon icon={faPhone} className=' text-[#B02124] text-xl'/>
                <h2 className=' font-[500] user_phone'>
                   (310) 326-0000
                </h2>
            </div>
        </div>
    );
};

export default Address;