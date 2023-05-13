import React from 'react';
import Education from './Education';
import useWidth from '../../../../hooks/useWidth';
import { useLocation } from 'react-router-dom';
import { data } from '../../../../App';
import { useContext } from 'react';

const Employment = () => {
    const width = useWidth()
   const path = useLocation().pathname.split('/')[2]
    const {allData} = useContext(data)
    const employment = allData[path]?.employment
    return (
        <div className=' col-span-8 mt-4'>
            {
                employment && employment.length>0 ?<>
                <h2 className={`text-[#003469] font-[700] ${width>=1280 || width<=480 || width<=768?"text-[14px]":"text-2xl mb-2"}`}>Employment History</h2>
            <div>
                {
                    employment.map((item) => <div key={item.id} className={` ${width>=1280 || width<=480 || width<=768?"py-1":"py-2"}`}>
                        <h2 className={` employ_tittle  font-[500] ${width>=1280 || width<=480 || width<=768?"text-[10px]":"text-xl"}`}>{item?.jobTittle}</h2>
                        <h2 className={`uppercase text-[#a2b5f0] font-[600] py-1 employ_year ${width>=1280 || width<=480 || width<=768?"text-[10px]":""}`}>{
                            item?.startDate || item.endDate ? `${item?.startDate} - ${item.endDate} `:null
                            }</h2>
                            {
                               item?.summary ? <div className=' relative ml-3'>
                               <span className={`absolute  rounded-full bg-black  ${width>=1280 || width<=480 || width<=768?"w-[3px] h-[3px] mt-[7px]":"w-[4px] h-[4px] mt-[10px]"}`}></span>
                               <h2 className={`employ_skill font-[500] ${width>=1280 || width<=480 || width<=768?"text-[8px] ml-2":"ml-3 "}`}>
                                   {item?.summary}
                               </h2>
                            </div> :null
                            }
                    </div>)
                }
            </div>
                </> :null
            }
            <Education/>
        </div>
    );
};

export default Employment;