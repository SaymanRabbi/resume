import React from 'react';
import user from './Img/user1.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationPin,faPhone} from '@fortawesome/free-solid-svg-icons';
import useWidth from '../../../../hooks/useWidth';
import { useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { data } from '../../../../App';

const Header = () => {
    const width = useWidth()
    const path = useLocation().pathname.split('/')[2]
    const {allData} = useContext(data)
    const personal_info = allData[path]?.personal_details
    return (
        <div className={`py-3 ${width>=1280 || width<=480 || width<=768?"h-[23%]":""}`}>
            <div className=' flex justify-center '>
                <img src={personal_info?.imgUrl} alt="" className={` ${width>=1280 || width<=480 || width<=768?"w-[50px] h-[50px]":"w-24 h-24"} user_img`} />
            </div>
            <h2 className={` text-center mt-3 font-bold text-[#1b3055] tracking-wider user_name ${width>=1280 || width<=480 || width<=768?"text-[14px]":"text-3xl"}`}>{
                personal_info?.firstName
            } {
                    personal_info?.lastName
            }</h2>
            <div className={`text-center justify-center gap-3 flex ${width>=1280 || width<=480 || width<=768?"text-[8px]":" font-bold"}`}>
                <h2 className=' uppercase user_tittle'>
                   {
                    personal_info?.tittle
                   }
                </h2>
                <h2 >
                     {
                        personal_info?.user_postal_code || personal_info?.user_city ? <>
                        <FontAwesomeIcon icon={faLocationPin} className='text-[#1b3055]' />  <span className='user_address'>
                        {personal_info?.user_postal_code} {personal_info?.user_city
    }</span>
    </> : null
                     }
                        
                    
                <span className='user_country'>{personal_info?.user_country
}</span>
                </h2>
                <h2>
                    {
                         personal_info?.user_phone ? <><FontAwesomeIcon icon={faPhone} className='text-[#1b3055] user_phone' />  {
                            personal_info?.user_phone
                        } </>: null
                    }
                   
                    
                    
                </h2>
            </div>
        </div>
    );
};

export default Header;