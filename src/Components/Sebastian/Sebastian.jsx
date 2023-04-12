import React from 'react';
import Details from './Components/Details';
import Profile from './Components/Profile';
import Education from './Components/Education';
import Employment from './Components/Employment';
import Skills from './Components/Skills';
import Languages from './Components/Languages';
import Header from './Components/Header';

const Sebastian = () => {
    return (
        <div className=' bg-[#EFF2F9] p-12'>
    <div className='  bg-[white] rounded-md w-[990px]  mx-auto  '>
      <Header/>
      <div className=' px-14 pb-8'>
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