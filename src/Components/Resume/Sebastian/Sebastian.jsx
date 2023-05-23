import React from 'react';
import Details from './Components/Details';
import Profile from './Components/Profile';
import Education from './Components/Education';
import Employment from './Components/Employment';
import Skills from './Components/Skills';
import Languages from './Components/Languages';
import Header from './Components/Header';
import useWidth from '../../../hooks/useWidth';

const Sebastian = ({id}) => {
  const width = useWidth()
  // w-[990px]
    return (
        <div id='madrid' className={`bg-[#EFF2F9] rounded-md ${width>=1280 || width<=480 || width<=768?'':''} w-[100%] h-[100%] overflow-x-scroll overflow-y-scroll`}>
    <div className={`bg-[white]  ${width>=1280 || width<=480 || width<=768?'w-[100%] h-[100%]':''}`}>
      <Header id={id}/>
      <div className={`${width>=1280 || width<=480 || width<=768?"pl-4":"pl-4"}`}>
       <Details id={id}/>
       <Profile id={id}/>
       <Education id={id}/>
       <Employment id={id}/>
       <Skills id={id}/>
       <Languages id={id}/>
      </div>
    </div>
 </div>
    );
};

export default Sebastian;