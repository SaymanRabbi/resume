import React from 'react';
import useWidth from '../../../../hooks/useWidth';

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
  const width = useWidth()
    return (
        <div className={`${width>1280?'mt-[2px]':"mt-4"}`}>
            <button className={`uppercase bg-black text-white font-semibold tracking-widest ${width>1280?"px-[5px] text-[8px]":"px-3 py-1"}`}>Languages</button>
            <div className={`${width>1280?"gap-x-7":"mt-1 gap-x-16"} grid grid-cols-12 `}>
              {
                    languages.map((item)=><div className=' col-span-6' key={item.id}>
                      <h2 className={`${width>1280?"text-[8px] mb-1":"text-xl mb-2"} font-[400] lan_tittle`}>
                       {item.name}
                  </h2>
                  <div className={`bg-gray-300 ${width>1280?"h-[2px]":"h-2"} w-[100%] rounded-full`}>
                    <div className={`${width>1280?"h-[2px]":"h-[6px]"} bg-black w-[${item.rating}] lan_rating`}></div>
                  </div>
                      </div>)
              }
                </div>
        </div>
    );
};

export default Languages;