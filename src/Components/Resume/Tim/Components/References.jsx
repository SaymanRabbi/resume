import React from 'react';
import { useLocation } from 'react-router-dom';
import { data } from '../../../../App';
import { useContext } from 'react';

const References = () => {
   
    const path = useLocation().pathname.split('/')[2]
    const {allData} = useContext(data)
    const references = allData[path]?.references
    console.log(references)
    return (
        <div className=' mt-3'>
           {
                references && references?.length>0 ?  <div className='grid grid-cols-12'>
                <div className=' col-span-3'>
                <h2 className=' uppercase text-2xl font-semibold text-[#1B3055] tracking-wider'>
                  References
                </h2>
                </div>
                <div className=' col-span-9'>
                 {
                       references.map((item) => 
                       <div key={item?._id} className=' mb-3 references'>
                          <h2 className=' text-xl font-semibold '><span className='ref_tittle'>{item?.name}</span>-<span className='ref_uni'>{item?.institute}</span></h2>
                          <h2 className=' mt-3 font-semibold'><span className='ref_id'>{item?.id}</span></h2>
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