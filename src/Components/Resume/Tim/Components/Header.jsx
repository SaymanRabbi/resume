import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { data } from '../../../../App';

const Header = () => {
    const path = useLocation().pathname.split('/')[2]
    const {allData} = useContext(data)
    const personal_info = allData[path]?.personal_details
    return (
        <div className=' text-center'>
            <h2 className=' text-2xl font-bold text-[#1b3055]'>
                <span className=' user_name'>{
                personal_info?.firstName || personal_info?.lastName ?   personal_info?.firstName + ' ' + personal_info?.lastName : null
                }</span> <span className='user_tittle'>{
                    personal_info?.tittle
                }</span>
            </h2>
            <h2 className=' mt-3 address font-semibold'>
                <span className='user_address'>{
                    personal_info?.user_city
                } {
                    personal_info?.user_postal_code
                }</span> <span className='user_country'>{
                    personal_info?.user_country
                }</span> <span className='user_country'>{
                    personal_info?.user_phone
                }</span> <span className='user_email'>{
                    personal_info?.user_email
                }</span>
            </h2>
        </div>
    );
};

export default Header;