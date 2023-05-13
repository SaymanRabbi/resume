import useWidth from "../../../hooks/useWidth";
import Details from "./Components/Details";
import DetailsRight from "./Components/DetailsRight";
import Header from "./Components/Header";


const Shophie = () => {
  const width = useWidth()
  // w-[990px]
      return (
        <div id='new_york' className={`bg-[#EFF2F9] ${width>=1280 || width<=480 || width<=768?"p-1":"p-12"} w-[100%] h-[100%] overflow-x-scroll overflow-y-scroll`}>
    <div className={`py-0 px-4 bg-[white] rounded-md   mx-auto ${width>=1280 || width<=480 || width<=768?"w-[100%] h-[100%]":""}`}>
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