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


const Builder = () => {

    return (
        <div className='col-span-12 lg:col-span-6 p-12'>
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
        </div>
    );
};

export default Builder;