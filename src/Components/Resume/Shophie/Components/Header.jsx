import React from 'react';
import user from './Img/user1.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationPin,faPhone} from '@fortawesome/free-solid-svg-icons';
import useWidth from '../../../../hooks/useWidth';

const Header = () => {
    const width = useWidth()
    return (
        <div className={`py-3 ${width>1280?"h-[23%]":""}`}>
            <div className=' flex justify-center '>
                <img src={user} alt="" className={` ${width>1280?"w-[50px] h-[50px]":"w-24 h-24"} user_img`} />
            </div>
            <h2 className={` text-center mt-3 font-bold text-[#1b3055] tracking-wider user_name ${width>1280?"text-[14px]":"text-3xl"}`}>SOPHIE WRIGHT</h2>
            <div className={`text-center justify-center gap-3 flex ${width>1280?"text-[8px]":" font-bold"}`}>
                <h2 className=' uppercase user_tittle'>
                    Manager
                </h2>
                <h2 >
                    <FontAwesomeIcon icon={faLocationPin} className='text-[#1b3055]' />  <span className='user_address'>
                    1234 Street Name, City Name,</span> <span className='user_country'>United States</span>
                </h2>
                <h2>
                   
                    <FontAwesomeIcon icon={faPhone} className='text-[#1b3055] user_phone' />  (123) 456-7890
                    
                </h2>
            </div>
        </div>
    );
};

export default Header;