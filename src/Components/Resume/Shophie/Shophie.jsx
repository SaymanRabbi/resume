import useWidth from "../../../hooks/useWidth";
import Details from "./Components/Details";
import DetailsRight from "./Components/DetailsRight";
import Header from "./Components/Header";


const Shophie = () => {
  const widht = useWidth()
      return (
        <div className={`bg-[#EFF2F9] ${widht>1280?"p-1":"p-12"} w-[100%] h-[100%] overflow-x-scroll overflow-y-scroll`}>
    <div className={`py-0 px-4 bg-[white] rounded-md   mx-auto ${widht>1280?"w-[100%] h-[100%]":"w-[990px]"}`}>
      <Header/>
      <div className=' grid grid-cols-12'>
           <Details/>
           <DetailsRight/>
      </div>
    </div>
 </div>
    );
};

export default Shophie;