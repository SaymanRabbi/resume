import React from 'react';
import Skills from './Skills';
import useWidth from '../../../../hooks/useWidth';
import { useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { data } from '../../../../App';

const Left = () => {
    const width = useWidth()
    const path = useLocation().pathname.split('/')[2]
  const {allData} = useContext(data)
  const personal_info = allData[path]?.personal_details
    return (
        <div className={`col-span-4 bg-[#F4F4F3] ${width>=1280 || width<=480 || width<=768?" pt-[150px] pl-8 pr-3 ":"h-[1200px]  pt-[300px] pl-12 pr-6 "}`}>
            <h2 className={`font-semibold uppercase tracking-widest ${width>=1280 || width<=480 || width<=768?"text-[10px]":"text-2xl"}`}>
                Details
            </h2>
            <div className={`w-full  bg-[#000000] ${width>=1280 || width<=480 || width<=768?"h-[1px] my-1 ":"h-[2px] my-3 "}`}></div>
            <div>
                <p className={`text-[#000000]  font-[500] mt-1 ${width>=1280 || width<=480 || width<=768?"text-[8px]":"text-sm"}`}>
                    <span className=' user_address'>{
                        personal_info?.user_city
                    } <br /> {
                        personal_info?.user_postal_code
                    }</span> <br /> <span className=' user_country'>{
                        personal_info?.user_country
                    } </span>
                </p>
            </div>
            <div className={` ${width>=1280 || width<=480 || width<=768?"my-1":"my-3"}`}>
               {
                     personal_info?.user_phone?<>
                      <h2 className={`uppercase font-[600] ${width>=1280 || width<=480 || width<=768?"text-[10px]":"text-2xl"}`}>
                  Phone
                </h2>
                <p className={`text-[#000000] font-[500]  user_phone ${width>=1280 || width<=480 || width<=768?"text-[8px]":"mt-1 text-sm"}`}>
                    {
                        personal_info?.user_phone
                    }
                </p></> :null
               }
            </div>
            <div className={` ${width>=1280 || width<=480 || width<=768?"my-1":"my-3"}`}>
                {
                    personal_info?.user_email?<>  
                    <h2 className={`uppercase font-[600] ${width>=1280 || width<=480 || width<=768?"text-[10px]":"text-2xl"}`}>
                 Email
                </h2>
                <p className={`text-[#000000] font-[500]  user_email ${width>=1280 || width<=480 || width<=768?"text-[8px]":"mt-1 text-sm"}`}>
                   {
                          personal_info?.user_email
                   }
                </p>
                      </> : null
                }
            </div>
            <Skills/>
        </div>
    );
};

export default Left;