import React from 'react';

const Details = () => {
    return (
        <div className=' mt-10'>
            <button className=' px-3 py-1 uppercase bg-black text-white font-semibold tracking-widest'>details</button>
            <div className=' details font-[500] mt-1 text-[18px]'>
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