import React from 'react';
import useWidth from '../../../../hooks/useWidth';

const Education = () => {
    const education=[
        {
            id:1,
            college:'Bechelor of Comminucation,New York University,New York',
            year:'AUGUST2016 - PRESENT',
            skill:[{
                id:1,
                name:'working towards a Comminucation degree'
            }],
        },{
            id:2,
            college:'High School Diploma,New York University,New York',
            year:'AUGUST2012 - 2016',
            skill:[{
                id:1,
                name:'Graduated with High Honors'
            }],
        }
    ]
    const width = useWidth()
    return (
        <div className={`${width>1280?'mt-[2px]':"mt-4"}`}>
        <button className={`uppercase bg-black text-white font-semibold tracking-widest ${width>1280?"px-[5px] text-[8px]":"px-3 py-1"}`}>education</button>
           <div className={`${width>1280?'':"mt-1"}`}>
              {
                    education.map((item)=>{ 
                        return(
                            <div key={item.id} className={`${width>1280?'':"mt-1"}`}>
                                <h2 className={`font-semibold edu_tittle ${width>1280?'text-[8px]':'text-xl'}`}>{item.college}</h2>
                                <h2 className={`font-semibold text-gray-400 edu_year ${width>1280?'text-[8px]':''}`}>{item.year}</h2>
                                <div className=' relative px-3'>
                                    <span className={` absolute ${width>1280?"w-[2px] h-[2px] mt-[4px]":"w-[6px] h-[6px] mt-[9px]"} rounded-full bg-black`}></span>
                                {
                                    item.skill.map((item)=><h2 className={`text-gray-400 edu_skill ${width>1280?'ml-2 text-[7px]':'ml-4'}`}>{item.name}</h2>)
                                }
                                </div>
                            </div>
                        )
                    })
              }
           </div>
        </div>
    );
};

export default Education;