import useWidth from "../../../hooks/useWidth";
import Left from "./Components/Left";
import Right from "./Components/Right";

const Westurner = () => {
  const width = useWidth()
    return (
        <div className={`bg-[#EFF2F9] w-[100%] h-[100%]  ${width>1280?"":"p-12"}`}>
        <div className={` bg-[white] rounded-md  mx-auto  relative ${width>1280?"w-[100%] h-[100%]":"w-[990px]"}`}>
          <div className={`absolute  border-black rounded-md  flex justify-center items-center ${width>1280?"w-[60%] h-[100px] left-[20%]  border-[1px]  my-8 ":"w-[70%] h-[200px] left-[15%]  border-[3px]  my-14 "}`}>
             <div className=" text-center">
               <h2 className={` font-bold name uppercase tracking-widest user_name ${width>1280?"text-[14px]":"text-3xl"}`}>wes turner</h2>
               <h2 className={`text-gray-700 font-semibold uppercase  user_tittle ${width>1280?"text-[10px] mt-1":"text-xl mt-3"}`}>sales manager</h2>
             </div>
          </div>
          <div className=' grid grid-cols-12 '>
            <Left/>
            <Right/>
          </div>
        </div>
     </div>
    );
};

export default Westurner;