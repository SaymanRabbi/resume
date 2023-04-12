import Education from './Components/Education';
import Employment from './Components/Employment';
import Header from './Components/Header';
import Profile from './Components/Profile';
import References from './Components/References';
import Skills from './Components/Skills';

const Tim = () => {
    return (
        <div className=' bg-[#EFF2F9] p-12'>
    <div className='  bg-[white] rounded-md w-[990px]  mx-auto'>
      <div className=' px-14 py-8'>
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