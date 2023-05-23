import React, { useContext } from 'react';
import useWidth from '../../../../hooks/useWidth';
import { data } from '../../../../App';
import { useLocation } from 'react-router-dom';

const Education = ({id}) => {
    const path = useLocation().pathname.split('/')[2]
    const {allData } = useContext(data)
    const education = allData[id||path]?.education
    const width = useWidth()
    return (
        <div className={`${width>=1280 || width<=480 || width<=768?" my-1":"my-3"}`}>
            <h2 className={`font-semibold uppercase tracking-widest ${width>=1280 || width<=480 || width<=768?"text-[10px]":"text-2xl "}`}>
                Educations
            </h2>
            <div className={`w-full  bg-[#000000] ${width>=1280 || width<=480 || width<=768?"h-[1.5px] my-1 ":"h-[2px] my-3 "}`}></div>
            {
              education && education.length>0 ?  education.map((item)=><div key={item.id}>
                    <div className=' flex justify-between'>
             <h2 className={`font-bold text-[#1b3055] edu_tittle ${width>=1280 || width<=480 || width<=768?"text-[8px]":""}`}>
                 {
                        item.tittle
                 }
                </h2>
                <h2 className={`font-bold text-[#1b3055] edu_location ${width>=1280 || width<=480 || width<=768?"text-[8px]":""}`}>
                 {
                        item.location
                 }
                </h2>
             </div>
                <h2 className={`text-gray-600 font-semibold mb-3 edu_year ${width>=1280 || width<=480 || width<=768?"text-[8px]":""}`}>
                {
                        item.year
                }
                </h2>
                </div>) : null
            }
        </div>
    );
};

export default Education;