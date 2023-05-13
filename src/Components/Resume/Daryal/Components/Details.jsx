import React from 'react';
import Skills from './Skills';
import References from './References';
import useWidth from '../../../../hooks/useWidth';
import { useLocation } from 'react-router-dom';
import { data } from '../../../../App';
import { useContext } from 'react';

const Details = () => {
    const width = useWidth()
    const path = useLocation().pathname.split('/')[2]
    const {allData} = useContext(data)
    const personal_info = allData[path]?.personal_details
    return (
        <div className=' col-span-4 pr-8 mt-5'>
            {
                personal_info ? <h2 className={`text-[#003469] font-[700]  ${width>=1280 || width<=480 || width<=768?"text-[14px] mb-1":"text-2xl mb-2"}`}>Details</h2> : null
            }
            <div className={`font-[500] ${width>=1280 || width<=480 || width<=768?"text-[8px]":"mt-2"}`}>
            <h2 className='user_address'>{
                personal_info?.user_city ? personal_info?.user_city:null + ', ' + personal_info?.user_postal_code ? personal_info?.user_postal_code : null
            }<span className=' user_country'>{
                personal_info?.user_country
            }</span></h2>
              <h2 className='user_phone'>{
                    personal_info?.user_phone
              }</h2>
              <h2 className='user_email'>{
                    personal_info?.user_email
              }</h2>
            </div>
            <Skills/>
            <References/>
        </div>
    );
};

export default Details;