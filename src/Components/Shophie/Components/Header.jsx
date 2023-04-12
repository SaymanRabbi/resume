import React from 'react';
import user from './Img/user1.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationPin,faPhone} from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <div className='py-3'>
            <div className=' flex justify-center '>
                <img src={user} alt="" className=' w-24 h-24 user_img' />
            </div>
            <h2 className=' text-center mt-3 font-bold text-[#1b3055] tracking-wider text-3xl user_name'>SOPHIE WRIGHT</h2>
            <div className=' text-center justify-center gap-3 flex'>
                <h2 className=' uppercase font-bold user_tittle'>
                    Manager
                </h2>
                <h2 className=' font-bold'>
                    <FontAwesomeIcon icon={faLocationPin} className='text-[#1b3055]' />  <span className='user_address'>
                    1234 Street Name, City Name,</span> <span className='user_country'>United States</span>
                </h2>
                <h2 className=' font-bold'>
                   
                    <FontAwesomeIcon icon={faPhone} className='text-[#1b3055] user_phone' />  (123) 456-7890
                    
                </h2>
            </div>
        </div>
    );
};

export default Header;