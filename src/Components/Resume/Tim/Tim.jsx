import useWidth from '../../../hooks/useWidth';
import Education from './Components/Education';
import Employment from './Components/Employment';
import Header from './Components/Header';
import Profile from './Components/Profile';
import References from './Components/References';
import Skills from './Components/Skills';

const Tim = ({id}) => {
  const width = useWidth()
  // w-[990px]
    return (
        <div id='london' className=' bg-[#EFF2F9] p-8 overflow-x-scroll overflow-y-scroll h-[100%]'>
    <div className={`bg-[white] rounded-md   mx-auto h-[100%] ${width>=1280 || width<=480 || width<=768 ?" w-[100%]":""}`}>
      <div className=''>
        <Header id={id}/>
        <Profile id={id}/>
        <Employment id={id}/>
        <Education id={id}/>
        <Skills id={id}/>
        <References id={id}/>
      </div>
    </div>
 </div>
    );
};

export default Tim;