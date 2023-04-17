import React, { useRef } from 'react';
import Titttle from './Components/Titttle';
import ResumeScore from './Components/ResumeScore';
import PerosonalDetails from './Components/PerosonalDetails';
import Summary from './Components/Summary';
import EmploymentHistory from './Components/EmploymentHistory';
import Education from './Components/Education';
import Skills from './Components/Skills';
import Hobies from './Components/Hobies';
import NewSection from './Components/NewSection';
import Websites from './Components/Websites ';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNoteSticky } from '@fortawesome/free-solid-svg-icons';

const Builder = ({setShow}) => {

    return (
        <div className='col-span-12 xl:col-span-6 p-12 relative'>
           <Titttle tittle='Untitled' position='justify-center'/>
            {/* -----score--- */}
            <ResumeScore/>
            {/* -----score--- */}
            {/* ------Personal Details-------  */}
            <PerosonalDetails/>
            {/* ------Personal Details-------  */}
            {/* ------Summary------ */}
            <Summary/>
            {/* ------Summary------ */}
            {/* ------Employment------- */}
            <EmploymentHistory/>
            {/* ------Employment------- */}
            {/* --------Education------- */}
            <Education/>
            {/* --------Education------- */}
            {/* ------website-------- */}
            <Websites/>
            {/* ------website-------- */}
            {/* -------Skills-=---- */}
            <Skills/>
            {/* -------Skills-=---- */}
            {/* -------Hobbies------- */}
            <Hobies/>
            {/* -------Hobbies------- */}
            {/* -------Custom Section---- */}
            <NewSection/>
            {/* -------Custom Section---- */}
            {/* ------Preview And Download------- */}
            <div className=' absolute bottom-5 right-2 block xl:hidden'>
                      <div className=' py-5 px-5 rounded-md bg-blue-500 flex justify-center items-center gap-3 text-white font-[600] cursor-pointer text-2xl' onClick={()=>setShow(true)}>
                           <p>Preview & Download</p>
                            <FontAwesomeIcon icon={faNoteSticky} className=' text-white text-2xl font-[500]'/>
                      </div>
            </div>
            {/* ------Preview And Download------- */}
        </div>
    );
};

export default Builder;