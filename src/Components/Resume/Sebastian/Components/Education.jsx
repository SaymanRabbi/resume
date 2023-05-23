import React from 'react';
import useWidth from '../../../../hooks/useWidth';
import { data } from '../../../../App';
import { useContext } from 'react';
import { useLocation } from 'react-router-dom';

const Education = ({id}) => {
    const path = useLocation().pathname.split('/')[2]
    const {allData} = useContext(data)
   const datas = allData?.[id||path]?.education
    const width = useWidth()
    return (
        <>
        {
            datas && datas.length>0?  <div className={`${width>=1280 || width<=480 || width<=768?'mt-[2px]':"mt-4"}`}>
            <button className={`uppercase bg-black text-white font-semibold tracking-widest ${width>=1280 || width<=480 || width<=768?"px-[5px] text-[8px]":"px-3 py-1"}`}>education</button>
               <div className={`${width>=1280 || width<=480 || width<=768?'':"mt-1"}`}>
                  {
                        datas.map((item)=>{ 
                            return(
                                <div key={item.id} className={`${width>=1280 || width<=480 || width<=768?'':"mt-1"}`}>
                                    <h2 className={`font-semibold edu_tittle ${width>=1280 || width<=480 || width<=768?'text-[8px]':'text-xl'}`}>{item?.school}</h2>
                                    <h2 className={`font-semibold text-gray-400 edu_year ${width>=1280 || width<=480 || width<=768?'text-[8px]':''}`}>{`${
                                        item?.startDate 
                                    } - ${item?.endDate}`}</h2>
                                    {
                                        item?.skill?<div className=' relative px-3'>
                                        <span className={` absolute ${width>=1280 || width<=480 || width<=768?"w-[2px] h-[2px] mt-[4px]":"w-[6px] h-[6px] mt-[9px]"} rounded-full bg-black`}></span>
                                    <h2 className={`text-gray-400 edu_skill ${width>=1280 || width<=480 || width<=768?'ml-2 text-[7px]':'ml-4'}`}>{item?.summary}</h2>
                                    
                                    </div>:null
                                    }
                                </div>
                            )
                        })
                  }
               </div>
            </div>:null
        }
        </>
       
    );
};

export default Education;