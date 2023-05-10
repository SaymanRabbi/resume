import React, { useContext } from 'react';
import './Header.css'
import img from './Img/userjpg.jpg'
import { useLocation } from 'react-router-dom';
import { data } from '../../../../App';
const Header = () => {
    const path = useLocation().pathname.split('/')[2]
    const {allData} = useContext(data)
    const personal_info =  allData[path]?.personal_details
    return (
        <div className=' flex justify-center py-12'>
            <div className='text-center'>
                <img src={personal_info?.imgUrl} alt="" className='clippath h-[100px] inline-block user_img'/>
                <h2 className=' mt-3 text-[#1b3055] font-semibold text-4xl tracking-wide user_name'>
                    {
                        personal_info?.firstName || personal_info?.lastName ? personal_info?.firstName + ' ' + personal_info?.lastName : null
                    }
                </h2>
                <h2 className=' text-2xl font-[500] text-gray-500 user_tittle'>
                    {
                        personal_info?.tittle
                    }
                </h2>
            </div>
        </div>
    );
};

export default Header;