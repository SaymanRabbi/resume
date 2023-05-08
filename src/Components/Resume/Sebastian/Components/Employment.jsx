import React from 'react';
import useWidth from '../../../../hooks/useWidth';

const Employment = () => {
    const employment=[
          {
            id:1,
            company:'Sales Associate,Big Apple Bookstore,New York',
            year:'AUGUST2015 - JUNE 2018',
            skill:[
                {
                    id:1,
                    name:'Greeted customers and provided assistance in locating items.'
                },{
                    id:2,
                    name:'Maintained a clean and organized store.'
                },{
                    id:3,
                    name:'Assisted customers with purchases and returns.'
                },{
                    id:4,
                    name:'Answered customer questions and provided product information.'
                }
            ]
          }
    ]
    const width = useWidth()
    return (
        <div className={`${width>1280?'mt-[2px]':"mt-4"}`}>
            <button className={`uppercase bg-black text-white font-semibold tracking-widest ${width>1280?"px-[5px] text-[8px]":"px-3 py-1"}`}>employment</button>
            <div className={`${width>1280?'':"mt-1"}`}>
              {
                    employment.map((item)=>{ 
                        return(
                            <div key={item.id} className={`${width>1280?'':"mt-1"}`}>
                                <h2 className={`font-semibold employ_tittle ${width>1280?"text-[8px]":"text-xl"}`}>{item.company}</h2>
                                <h2 className={`text-gray-400 employ_year font-semibold ${width>1280?'text-[8px]':''}`}>{item.year}</h2>
                                {
                                    item.skill.map((item)=>
                                    <div className=' relative px-3' key={item.id}>
                                <span className={` absolute ${width>1280?"w-[2px] h-[2px] mt-[5px]":"w-[6px] h-[6px] mt-[9px]"} rounded-full bg-black`}></span>
                                <h2 className={`text-gray-400 employ_skill ${width>1280?'ml-2 text-[7px]':'ml-4'}`}>{item.name}</h2>
                                </div>
                                    )
                                }
                                
                            </div>
                        )
                    })
              }
           </div>
        </div>
    );
};

export default Employment;