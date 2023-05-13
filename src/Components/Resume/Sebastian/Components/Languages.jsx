import React, { useContext } from 'react';
import useWidth from '../../../../hooks/useWidth';
import { useLocation } from 'react-router-dom';
import { data } from '../../../../App';

const Languages = () => {
  const path = useLocation().pathname.split('/')[2]
  const {allData} = useContext(data)
  const language = allData[path]?.languages
  const width = useWidth()
    return (
        <div className={`${width>=1280 || width<=480 || width<=768?'mt-[2px]':"mt-4"}`}>
           {
            language && language.length>0 ?<>
            <button className={`uppercase bg-black text-white font-semibold tracking-widest ${width>=1280 || width<=480 || width<=768?"px-[5px] text-[8px]":"px-3 py-1"}`}>Languages</button>
             <div className={`${width>=1280 || width<=480 || width<=768?"gap-x-7":"mt-1 gap-x-16"} grid grid-cols-12 `}>
               {
                 language && language.length>0 ? language.map((lan) => 
                   <div className=' col-span-6' key={lan._id}>
                     <h2 className={`${width>=1280 || width<=480 || width<=768?"text-[8px] mb-1":"text-xl mb-2"} font-[400] lan_tittle`}>
                      {lan.lan}
                      {
                       console.log(parseInt(lan?.rating * 20))
                      }
                 </h2>
                 <div className={`bg-gray-300 ${width>=1280 || width<=480 || width<=768?"h-[2px]":"h-2"} w-[100%] rounded-full`}>
                   <div className={`${width>=1280 || width<=480 || width<=768?"h-[2px]":"h-[6px]"} bg-black w-[${parseInt(lan?.rating * 20)}%] lan_rating`}></div>
                 </div>
                     </div>
             ):null
               }
                 </div>
            </>:null
           }
        </div>
    );
};

export default Languages;