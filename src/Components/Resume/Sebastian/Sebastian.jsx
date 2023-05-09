import React from 'react';
import Details from './Components/Details';
import Profile from './Components/Profile';
import Education from './Components/Education';
import Employment from './Components/Employment';
import Skills from './Components/Skills';
import Languages from './Components/Languages';
import Header from './Components/Header';
import useWidth from '../../../hooks/useWidth';

const Sebastian = () => {
  const widht = useWidth()
    return (
        <div className={`bg-[#EFF2F9] rounded-md ${widht>1280?'':''} w-[100%] h-[100%] overflow-x-scroll overflow-y-scroll`}>
    <div className={`bg-[white]  ${widht>1280?'w-[100%] h-[100%]':'w-[990px]'}`}>
      <Header/>
      <div className={`${widht>1280?"pl-4":"pl-4"}`}>
       <Details/>
       <Profile/>
       <Education/>
       <Employment/>
       <Skills/>
       <Languages/>
      </div>
    </div>
 </div>
    );
};

export default Sebastian;