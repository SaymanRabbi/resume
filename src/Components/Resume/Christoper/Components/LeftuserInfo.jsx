import React from 'react';
import './LeftUserInfo.css'
import useWidth from '../../../../hooks/useWidth';
import { data } from '../../../../App';
import { useContext } from 'react';
const LeftuserInfo = ({id}) => {
    const {allData } = useContext(data)
    const employment = allData?.toronto?.employment
    const educations = allData?.toronto?.education
    const width = useWidth()
    return (
        <div className=' col-span-7'>
            {
                employment?.length>0 ? 
                <><h2 className={`${width>=1280 || width<=480 || width<=768?"text-[16px]":"text-3xl  mb-3"} font-bold text-[#1B3055]`}>Employment History</h2>
              {
                    employment.map((emp,index)=><div className={`${width>=1280 || width<=480 || width<=768?'':'mt-3'}`} key={emp.id}>
                    <h2 className='text-white ' >
       <span className={`bg-[#1B3055] employ_tittle ${width>=1280 || width<=480 || width<=768?'text-[9px] font-medium':' font-medium'}`}>
       {emp?.jobTittle} at {emp?.employer}
       </span>
     </h2>
   
   <div>
       <h2 className={`${width>=1280 || width<=480 || width<=768?'text-[10px]':'text-xl'} text-gray-700 font-medium employ_year`}>
          {emp?.startDate || emp?.endDate ? 
            
               `${emp?.startDate} - ${emp?.endDate}`: null
               
          }
       </h2>
   </div>
   <div className=' font-medium text-gray-600'>
     
              
                 {
                   emp?.summary ?  <div className=' relative'>
                   <div className={`${width>=1280 || width<=480 || width<=768?'w-[3px] h-[3px] mt-[2px]':"w-2 h-2 mt-[9px]"}  bg-[#1B3055] rounded-full  absolute`}></div>
                  <p className={`employ_skill employment ${width>=1280 || width<=480 || width<=768?'ml-[8px] text-[6px]':' ml-4 '}`}  >{emp?.summary
   }</p>
                  </div> :null
                 }
              
       
   </div>
                   </div> )
              }
             
                
 
</>:null }
            {/* -----Educations---- */}
            {/* -----Educations---- */}
            {
                educations?.length>0? <div className={`${width>=1280 || width<=480 || width<=768?'':'pb-6'}`}>
                <h2 className={`${width>=1280 || width<=480 || width<=768?"text-[16px]":"text-3xl  mb-3"} font-bold text-[#1B3055]`}>
                    Educations
                </h2>
            
                             {
                                    educations.map((education,index) =><div key={index} className={`${width>=1280 || width<=480 || width<=768?'':'mt-3'}`}>
                                    <h2 className='text-white' >
                    <span className={`bg-[#1B3055] edu_tittle ${width>=1280 || width<=480 || width<=768?'text-[8px] font-medium':' font-medium'}`}>
                    {education?.school}  {education?.degree}
                    </span>
                  </h2>
                  <h2 className={`${width>=1280 || width<=480 || width<=768?'text-[10px]':'text-xl'} text-gray-700 font-bold edu_year`}>
                  {education?.startDate || education?.endDate ? 
             
             `${education?.startDate} - ${education?.endDate}`: null
             
        }
                    </h2>
                                    </div> )
                             }
          
            </div>:null
            }

        </div>
    );
};

export default LeftuserInfo;