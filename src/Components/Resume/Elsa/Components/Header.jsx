import React from 'react';
import user from './img/user.jpg';
import { useLocation } from 'react-router-dom';
import { data } from '../../../../App';
import { useContext } from 'react';
import useWidth from '../../../../hooks/useWidth';
const Header = () => {
    const path = useLocation().pathname.split('/')[2]
    const {allData} = useContext(data)
    const profile_info =  allData[path]?.personal_details
    const width = useWidth()
    return (
        <div className={`grid grid-cols-12 ${width>=1280 || width<=480 || width<=768?"pl-4 py-2":"pl-6 py-6"}`}>
            <div className='col-span-3 flex w-full'>
                <img src={profile_info?.imgUrl} alt="" className={` rounded-full user_img ${width>=1280 || width<=480 || width<=768?"w-[50px] h-[50px]":"w-24 h-24"}`}/>
            </div>
            <div className='col-span-9'>
                <h2 className={`font-[500] text-[#1b3055]  user_name ${width>=1280 || width<=480 || width<=768?"text-[14px]":"text-4xl"}`}>
                    {
                        profile_info?.firstName
                    } {
                        profile_info?.lastName
                    }
                </h2>
                <p className={`text-gray-600  font-[500] user_tittle ${width>=1280 || width<=480 || width<=768?"text-[10px] mt-1":"text-xl  mt-2"}`}>
                    {
                        profile_info?.tittle
                    }
                </p>
            </div>
        </div>
    );
};

export default Header;