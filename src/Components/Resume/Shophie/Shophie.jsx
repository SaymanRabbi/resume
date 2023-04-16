import Details from "./Components/Details";
import DetailsRight from "./Components/DetailsRight";
import Header from "./Components/Header";


const Shophie = () => {
    return (
        <div className=' bg-[#EFF2F9] p-12'>
    <div className=' py-0 px-4 bg-[white] rounded-md w-[990px]  mx-auto'>
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