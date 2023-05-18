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
        <div className={`${width>=1280 || width<=480 || width<=768?'h-[80px]':'h-[200px]'}`}>
           {
               datas ? <div className=' h-[100%] flex w-[100%] gap-x-1'>
               <img src={datas?.imgUrl} alt="" className={` h-[100%] user_img ${width>=1280 || width<=480 || width<=768?'w-[25%]':'w-[20%]'}`}/>
                <div className={` rounded-tr-md bg-[#FEE14B] ${width>=1280 || width<=480 || width<=768?' p-3 w-[75%]':' p-12 w-[80%]'}`}>
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
               </div>: null
           }
        </div>
    );
};

export default Header;