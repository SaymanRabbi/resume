import React, { useContext } from 'react';
import './Header.css'
import { useLocation } from 'react-router-dom';
import { data } from '../../../../App';
import useWidth from '../../../../hooks/useWidth';
const Header = () => {
    const path = useLocation().pathname.split('/')[2]
    const {allData} = useContext(data)
    const personal_info =  allData[path]?.personal_details
    const width = useWidth()
    return (
        <div className={`flex justify-center  ${width>=1280 || width<=480 || width<=768 ?"py-6":"py-12"}`}>
            <div className='text-center'>
                <img src={personal_info?.imgUrl} alt="" className={`clippath inline-block user_img ${width>=1280 || width<=480 || width<=768?"h-[60px] w-[70px]":"h-[80px] w-[70px]"}`}/>
                <h2 className={` text-[#1b3055] font-semibold tracking-wide user_name ${width>=1280 || width<=480 || width<=768?"text-[14px] mt-1":"text-4xl mt-3"}`}>
                    {
                        personal_info?.firstName || personal_info?.lastName ? personal_info?.firstName + ' ' + personal_info?.lastName : null
                    }
                </h2>
                <h2 className={` font-[500] text-gray-500 user_tittle ${width>=1280 || width<=480 || width<=768?"text-[8px]":"text-2xl"}`}>
                    {
                        personal_info?.tittle
                    }
                </h2>
            </div>
        </div>
    );
};

export default Header;