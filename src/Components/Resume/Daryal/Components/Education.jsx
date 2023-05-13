import React from 'react';
import useWidth from '../../../../hooks/useWidth';
import { useLocation } from 'react-router-dom';
import { data } from '../../../../App';
import { useContext } from 'react';

const Education = () => {
    const width = useWidth()
    const path = useLocation().pathname.split('/')[2]
    const {allData} = useContext(data)
    const education = allData[path]?.education
    return (
        <div className={`  ${width>=1280 || width<=480 || width<=768?"my-1":"my-4"}`}>
            {
                education && education.length>0 ?<>
                <h2 className={`text-[#003469] font-[700]  ${width>=1280 || width<=480 || width<=768?"text-[14px] mb-1":"text-2xl mb-2"}`}>Educations</h2>
            <div>
                {
                    education.map((item) => <div key={item.id} className=' py-1'>
                        <h2 className={`edu_tittle  font-[600] ${width>=1280 || width<=480 || width<=768?"text-[10px]":"text-xl"}`}>{item?.jobTittle}<span className=' edu_location'>
                        {item?.city}
                            </span></h2>

                        <h2 className={` uppercase text-[#a2b5f0] font-[600] py-1 edu-year ${width>=1280 || width<=480 || width<=768?"text-[8px]":""}`}>{
                            item?.startDate || item.endDate ? `${item?.startDate} - ${item.endDate} `:null
                            }</h2>
                            
                    </div>)
                }
            </div>
                </> :null
            }
        </div>
    );
};

export default Education;