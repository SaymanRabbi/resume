import React, { useContext } from 'react';
import './Header.css'
import useWidth from '../../../../hooks/useWidth';
import { useLocation } from 'react-router-dom';
import { data } from '../../../../App';
const Header = ({id}) => {
  const width = useWidth()
  const path = useLocation().pathname.split('/')[2]
  const {allData} = useContext(data)
  const personal_info = allData[id||path]?.personal_details
    return (
        <div className={` grid grid-cols-12 ${width>=1280 || width<=480 || width<=768?"h-[165px]":"h-[250px]"}`}>
          <div className={`col-span-8  ${width>=1280 || width<=480 || width<=768?"pl-4 pt-5":"pl-4 py-5"}`}>
          <h2 className={`text-[#003469]  font-bold user_name ${width>=1280 || width<=480 || width<=768?"text-[14px]":"text-5xl"}`}>
           {
              personal_info?.firstName ? personal_info?.firstName : null
           } {
            personal_info?.lastName ? personal_info?.lastName : null
           }
           </h2> 
           <h2 className={`text-[#003469]  font-[500] user_tittle mt-2 ${width>=1280 || width<=480 || width<=768?"text-[14px]":"text-5xl"}`}>
            {
              personal_info?.tittle
            }
           </h2>
           <p className={`mt-2 font-[500] user_profile ${width>=1280 || width<=480 || width<=768?"text-[8px]":""}`}>
           {
              personal_info?.summary
           }
           </p>
          </div>
          <div className='relative w-full col-span-4 h-[100%]'>
          <div className={` relative ${width>=1280 || width<=480 || width<=768?"h-[100%] clip w-[180px]":"clip  pl-3 w-[300px]"}`}>
            <img src={personal_info?.imgUrl} alt="" className={`bg-center h-[100%] w-[100%] user_img bg-cover absolute  ${width>=1280 || width<=480 || width<=768?"":""}`}/>
            </div>
          </div>
        </div>
    );
};

export default Header;