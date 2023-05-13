import React from 'react';
import useWidth from '../../../../hooks/useWidth';
import { useLocation } from 'react-router-dom';
import { data } from '../../../../App';
import { useContext } from 'react';

const Details = () => {
  const width = useWidth()
  const path = useLocation().pathname.split('/')[2]
  const {allData} = useContext(data)
 const datas = allData?.[path]?.personal_details
    return (
      <>
      {
       datas ? <div className={`${width>=1280 || width<=480 || width<=768?"mt-[10px]":" mt-10"}`}>
       <button className={`uppercase bg-black text-white font-semibold tracking-widest ${width>=1280 || width<=480 || width<=768?"px-[5px] text-[8px]":"px-3 py-1"}`}>details</button>
       <div className={` details font-[500] ${width>=1280 || width<=480 || width<=768?"text-[6px]":"mt-1 text-[18px]"}`}>
         <h2 className='user_address'>
           {
              datas?.user_address
           }
         </h2>
         <h2 className=' country user_country'>
           {
              datas?.user_country
           }
         </h2>
         <h2 className=' email user_email'>
            {
              datas?.user_email
            }
         </h2>
         <h2 className='phone user_phone'>
             {
                datas?.user_phone
             }
         </h2>
       </div>
   </div>:null
      }
      </>
        
    );
};

export default Details;