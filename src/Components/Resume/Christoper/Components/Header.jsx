import React from 'react';
import useWidth from '../../../../hooks/useWidth';
const Header = ({datas}) => {
    const width = useWidth()
    return (
        <div className={`grid grid-cols-12 ${width>=1280 || width<=480 || width<=768?"":"items-center"}`}>
             <div className='col-span-4'>
              {
                datas?.imgUrl? <img src={datas?.imgUrl} alt="" className={`user_img${width>=1280 || width<=480 || width<=768?"w-[60px] h-[70px]":" w-24 h-24"}`}/>:null
              }
               <h1 className={` mt-2 ${width>=1280 || width<=480 || width<=768?'text-[14px] font-medium':'font-medium'} user_tittle`}>{datas?.tittle}</h1>
               <h2 className={`user_email ${width>=1280 || width<=480 || width<=768?"text-[8px]":""}`}>{datas?.user_email}</h2>
               <h2 className={` user_phone ${width>=1280 || width<=480 || width<=768?'text-[8px]':"mb-2"}`}>{
                     datas?.user_phone
               }</h2>
               <h2 className={` user_address ${width>=1280 || width<=480 || width<=768?'text-[8px]':""}`}>
              {
                    datas?.user_address
              }
               </h2>
             </div>
             <div className=' col-span-8'>
                <div >
                    <div className={`flex flex-col  ${width>=1280 || width<=480 || width<=768?'text-[30px] tracking-wide leading-8':'text-[60px] leading-[70px]'} font-bold text-[#1B3055]`}>
                    <span className='user_name'>
                    {
                        datas?.firstName
                    }
                    </span>
                    <span className={`user_name`}>
                    {
                        datas?.lastName
                    }
                    </span>
                    </div>
                   {
                    datas?.summary? <div className={`${width>=1280 || width<=480 || width<=768?'bg-gray-200 p-2 rounded-lg mt-2':'bg-[#EEEEEE] p-2 rounded-lg'}`}>
                    <h2 className={`${width>=1280 || width<=480 || width<=768?"text-[16px]":"text-2xl"} font-bold  text-[#1B3055]`}>
                        Profile
                    </h2>
                   <p className={`user_profile ${width>=1280 || width<=480 || width<=768?'text-[8px]':''}`}>
                     {
                            datas?.summary
                     }
                   </p>
                </div>:null
                   }
                </div>
             </div>
        </div>
    );
};

export default Header;