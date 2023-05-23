import { useLocation } from "react-router-dom";
import useWidth from "../../../hooks/useWidth";
import Left from "./Components/Left";
import Right from "./Components/Right";
import { data } from "../../../App";
import { useContext } from "react";

const Westurner = ({id}) => {
  const width = useWidth()
  const path = useLocation().pathname.split('/')[2]
  const {allData} = useContext(data)
  const personal_info = allData[id||path]?.personal_details
//   w-[990px]
    return (
        <div id='amsterdam' className={`bg-[#EFF2F9] w-[100%] h-[100%]  ${width>=1280 || width<=480 || width<=768?"":"p-12"} overflow-x-scroll overflow-y-scroll`}>
        <div className={` bg-[white] rounded-md  mx-auto  relative ${width>=1280 || width<=480 || width<=768?"w-[100%] h-[100%]":""}`}>
          <div className={`absolute  border-black rounded-md  flex justify-center items-center ${width>=1280 || width<=480 || width<=768?"w-[60%] h-[100px] left-[20%]  border-[1px]  my-8 ":"w-[70%] h-[200px] left-[15%]  border-[3px]  my-14 "}`}>
             <div className=" text-center">
               <h2 className={` font-bold name uppercase tracking-widest user_name ${width>=1280 || width<=480 || width<=768?"text-[14px]":"text-3xl"}`}>{
                  personal_info?.firstName
               } {
                  personal_info?.lastName
               }</h2>
               <h2 className={`text-gray-700 font-semibold uppercase  user_tittle ${width>=1280 || width<=480 || width<=768?"text-[10px] mt-1":"text-xl mt-3"}`}>{
                  personal_info?.tittle
}</h2>
             </div>
          </div>
          <div className=' grid grid-cols-12 '>
            <Left id={id}/>
            <Right id={id}/>
          </div>
        </div>
     </div>
    );
};

export default Westurner;