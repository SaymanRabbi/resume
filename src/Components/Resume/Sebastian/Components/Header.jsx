import React, { useContext } from 'react';
import user from './img/user.jpg'
import useWidth from '../../../../hooks/useWidth';
import { useLocation } from 'react-router-dom';
import { data } from '../../../../App';
const Header = () => {
  const width = useWidth()
  const path = useLocation().pathname.split('/')[2]
  const {allData} = useContext(data)
 const datas = allData?.[path]?.personal_details
    return (
        <div className={`${width>=1280 || width<=480 || width<=768?'h-[15%] gap-1':'h-[200px] gap-2'} w-full flex `}>
           {
               datas ? <>
               <img src={datas?.imgUrl} alt="" className={`h-full bg-cover flex-grow ${width>=1280 || width<=480 || width<=768?'w-[200px]':'w-[200px]'} user_img`}/>
                <div className={`rounded-t-md bg-[#FEE14B] w-[100%] ${width>=1280 || width<=480 || width<=768?' p-3':' p-12'}`}>
                  <h2 className='name'>
                    <span className={`font-bold uppercase tracking-widest user_name ${width>=1280 || width<=480 || width<=768?"text-[16px] ":"text-4xl"}`}>
                       {
                          datas?.firstName
                       } <br /> {datas?.lastName}
                    </span>
                  </h2>
                    <p className={` tracking-widest font-bold user_tittle ${width>=1280 || width<=480 || width<=768?"text-[12px]":"mt-1"}`}>
                       {
                          datas?.tittle
                       }
                    </p>
                </div>
               </>: null
           }
        </div>
    );
};

export default Header;