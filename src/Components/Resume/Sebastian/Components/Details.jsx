import React from 'react';
import useWidth from '../../../../hooks/useWidth';

const Details = () => {
  const width = useWidth()
    return (
        <div className={`${width>1280?"mt-[10px]":" mt-10"}`}>
            <button className={`uppercase bg-black text-white font-semibold tracking-widest ${width>1280?"px-[5px] text-[8px]":"px-3 py-1"}`}>details</button>
            <div className={` details font-[500] ${width>1280?"text-[6px]":"mt-1 text-[18px]"}`}>
              <h2 className='user_address'>
                4220 Pallisade Avenue, Riverdale, NY 10471
              </h2>
              <h2 className=' country user_country'>
                United States
              </h2>
              <h2 className=' email user_email'>
                 hw12@yahoo.com
              </h2>
              <h2 className='phone user_phone'>
                  (917)324-1818
              </h2>
            </div>
        </div>
    );
};

export default Details;