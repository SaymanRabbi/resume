import React from 'react';
import user from './img/user.jpg';
import { useLocation } from 'react-router-dom';
import { data } from '../../../../App';
import { useContext } from 'react';
const Header = () => {
    const path = useLocation().pathname.split('/')[2]
    const {allData} = useContext(data)
    const profile_info =  allData[path]?.personal_details
    return (
        <div className=' grid grid-cols-12  pl-6 py-6'>
            <div className='col-span-3 flex w-full'>
                <img src={profile_info?.imgUrl} alt="" className=' w-24 h-24 rounded-full user_img'/>
            </div>
            <div className='col-span-9'>
                <h2 className=' font-[500] text-[#1b3055] text-4xl user_name'>
                    {
                        profile_info?.firstName
                    } {
                        profile_info?.lastName
                    }
                </h2>
                <p className=' text-gray-600 text-xl font-[500] mt-2 user_tittle'>
                    {
                        profile_info?.tittle
                    }
                </p>
            </div>
        </div>
    );
};

export default Header;