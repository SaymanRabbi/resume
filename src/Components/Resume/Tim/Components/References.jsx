import React from 'react';
import { useLocation } from 'react-router-dom';
import { data } from '../../../../App';
import { useContext } from 'react';
import useWidth from '../../../../hooks/useWidth';

const References = () => {
   
    const path = useLocation().pathname.split('/')[2]
    const {allData} = useContext(data)
    const references = allData[path]?.references
    const width = useWidth()
    return (
        <div className=' mt-3'>
           {
                references && references?.length>0 ?  <div className='grid grid-cols-12'>
                <div className=' col-span-3'>
                <h2 className={`uppercase  font-semibold text-[#1B3055] tracking-wider ${width>=1280 || width<=480 || width<=768?"text-[14px]":"text-2xl"}`}>
                  References
                </h2>
                </div>
                <div className=' col-span-9'>
                 {
                       references.map((item) => 
                       <div key={item?._id} className={` references ${width>=1280 || width<=480 || width<=768?"":"mb-3"}`}>
                          <h2 className={`font-semibold ${width>=1280 || width<=480 || width<=768 ? "text-[8px]":"text-xl"}`}><span className='ref_tittle'>{item?.name}</span>-<span className='ref_uni'>{item?.institute}</span></h2>
                          <h2 className={` font-semibold ${width>=1280 || width<=480 || width<=768 ?"text-[8px]":"mt-3"}`}><span className='ref_id'>{item?.id}</span></h2>
                       </div>
  
                       )
                 }
                </div>
                </div> :null
           }
        </div>
    );
};

export default References;