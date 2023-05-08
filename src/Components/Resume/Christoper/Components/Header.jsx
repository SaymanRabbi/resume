import React from 'react';
import useWidth from '../../../../hooks/useWidth';
const Header = ({datas}) => {
    const widht = useWidth()
    return (
        <div className={`grid grid-cols-12 ${widht>1280?"":""}`}>
             <div className='col-span-4'>
              {
                datas?.imgUrl? <img src={datas?.imgUrl} alt="" className={`user_img${widht>1280?"w-[60px] h-[70px]":" w-24 h-24"}`}/>:null
              }
               <h1 className={` mt-2 ${widht>1280?'text-[14px] font-medium':'md:text[18px] text-[14px]'} user_tittle`}>{datas?.tittle}</h1>
               <h2 className={`user_email ${widht>1280?"text-[8px]":"text-[10px] md:text-[18px]"}`}>{datas?.user_email}</h2>
               <h2 className={` user_phone ${widht>1280?'text-[8px]':"mb-2 text-[10px] md:text-[18px]"}`}>{
                     datas?.user_phone
               }</h2>
               <h2 className={` user_address ${widht>1280?'text-[8px]':"text-[10px] md:text-[18px]"}`}>
              {
                    datas?.user_address
              }
               </h2>
             </div>
             <div className=' col-span-8'>
                <div >
                    <div className={`flex flex-col  ${widht>1280?'text-[30px] tracking-wide leading-8':'md:text-[60px] md:leading-[70px] text-[30px] leading-[40px]'} font-bold text-[#1B3055]`}>
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
                    datas?.summary? <div className={`${widht>1280?'bg-gray-200 p-2 rounded-lg mt-2':'bg-[#EEEEEE] p-2 rounded-lg'}`}>
                    <h2 className={`${widht>1280?"text-[16px]":"md:text-2xl text-[20px]"} font-bold  text-[#1B3055]`}>
                        Profile
                    </h2>
                   <p className={`user_profile ${widht>1280?'text-[8px]':'md:text-[14px] text-[12px]'}`}>
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