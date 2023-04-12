import Left from "./Components/Left";
import Right from "./Components/Right";

const Westurner = () => {
    return (
        <div className=' bg-[#EFF2F9] p-12'>
        <div className='  bg-[white] rounded-md w-[990px]  mx-auto  relative '>
          <div className=" absolute  border-black w-[70%] h-[200px] border-[3px] left-[15%] flex justify-center items-center my-14">
             <div className=" text-center">
               <h2 className=" text-3xl font-bold name uppercase tracking-widest user_name">wes turner</h2>
               <h2 className="text-xl text-gray-700 font-semibold uppercase mt-3 user_tittle">sales manager</h2>
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