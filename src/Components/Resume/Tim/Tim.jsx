import useWidth from '../../../hooks/useWidth';
import Education from './Components/Education';
import Employment from './Components/Employment';
import Header from './Components/Header';
import Profile from './Components/Profile';
import References from './Components/References';
import Skills from './Components/Skills';

const Tim = () => {
  const width = useWidth()
    return (
        <div className=' bg-[#EFF2F9] p-8 overflow-x-scroll overflow-y-scroll h-[100%]'>
    <div className={`bg-[white] rounded-md   mx-auto h-[100%] ${width>1280 ?" w-[100%]":"w-[990px]"}`}>
      <div className=''>
        <Header/>
        <Profile/>
        <Employment/>
        <Education/>
        <Skills/>
        <References/>
      </div>
    </div>
 </div>
    );
};

export default Tim;