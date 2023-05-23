import React from 'react';
import useWidth from '../../../../hooks/useWidth';
import { useLocation } from 'react-router-dom';
import { data } from '../../../../App';
import { useContext } from 'react';

const Employment = ({id}) => {
    const width = useWidth()
    const path = useLocation().pathname.split('/')[2]
    const {allData} = useContext(data)
    const employmets = allData[id||path]?.employment
    return (
        <div className={` pb-12 ${width>=1280 || width<=480 || width<=768?"px-10":"px-20"}`}>
          {
                employmets && employmets.length>0 ?<>
                   <h2 className={`text-[#1B3055] font-[700] ${width>=1280 || width<=480 || width<=768?"py-5 text-[14px]":"py-10 text-2xl"}`}>Employment History</h2>
             <div>
                {
                    employmets.map(employment => (
                        <div className={`grid grid-cols-12 ${width>=1280 || width<=480 || width<=768?"":"mb-8"}`} key={employment.id}>

                            <div className='col-span-5'>
                                <h3 className={`text-[#1B3055] font-[700] employ_tittle ${width>=1280 || width<=480 || width<=768?"text-[10px]":"text-xl"}`}>{employment?.jobTittle}</h3>
                                <p className={`text-[#1B3055] font-[500] employ_year ${width>=1280 || width<=480 || width<=768?"text-[10px]":""}`}>{employment?.startDate || employment.endDate ? `${employment?.startDate} - ${employment.endDate} `:null}</p>
                                </div>
                                <div className='col-span-7'>
                                  {
                                    employment?.summary ? 
                                    <div className=' relative'>
                                <span className={` bg-[#1B3055] absolute  rounded-full ${width>=1280 || width<=480 || width<=768?"w-[3px] h-[3px] mt-[5px]":"w-[6px] h-[6px] mt-2"}`}></span>
                               <h2 className={` employment employ_skill ${width>=1280 || width<=480 || width<=768?"text-[8px] ml-2":"ml-4"}`}>
                               {
                                    employment?.summary
                                }
                               </h2>
                            </div> :null
                                  }
                                        
                                    
                                    </div>
                        </div>
                    ))
                }
             </div></> :null
          }
        </div>
    );
};

export default Employment;