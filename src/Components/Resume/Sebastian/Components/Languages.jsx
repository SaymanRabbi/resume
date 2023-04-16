import React from 'react';

const Languages = () => {
  const languages = [
    {
      id: 1,
      name: 'English',
       rating: '80%',
    },
    {
      id: 2,
      name: 'Dutch',
      rating: '50%',
    }
  ]
    return (
        <div className=' mt-4'>
            <button className=' px-3 py-1 uppercase bg-black text-white font-semibold tracking-widest'>Languages</button>
            <div className=' mt-1 grid grid-cols-12 gap-x-16 languages'>
              {
                    languages.map((item)=><div className=' col-span-6' key={item.id}>
                      <h2 className=' font-[500] text-xl mb-1 lan_tittle'>
                       {item.name}
                  </h2>
                  <div className='h-[6px] w-[100%] bg-gray-300'>
                    <div className={`h-[6px] bg-black w-[${item.rating}] lan_rating`}></div>
                  </div>
                      </div>)
              }
                </div>
        </div>
    );
};

export default Languages;