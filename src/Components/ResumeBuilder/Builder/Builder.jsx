import React, { useContext, useEffect, useState } from 'react';
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
import AddNewSection from './Components/AddNewSection';
import References from './Components/References';
import Languages from './Components/Languages';
import { useLocation } from 'react-router-dom';
import { data } from '../../../App';

const Builder = ({setShow}) => {
    const [text,setText] = useState('')
    const path = useLocation().pathname.split('/')[2]
    const {allData,setAllData} = useContext(data)
    const [resumeTittle,setResumeTittle] = useState(allData[path]?.tittle || 'Untitled'
        )
    useEffect(()=>{
     setAllData({...setAllData,
        [path]:{
            ...allData[path],
            tittle:resumeTittle
          }
    })
    localStorage.setItem('data',JSON.stringify(allData))
    },[resumeTittle])
    return (
        <div className='col-span-12 xl:col-span-6 p-12 relative'>
           <Titttle tittle={`
           ${resumeTittle ? resumeTittle :'Untitled'}
           `} position='justify-center' setResumeTittle={setResumeTittle}/>
            {/* -----score--- */}
            <ResumeScore/>
            {/* -----score--- */}
            {/* ------Personal Details-------  */}
            <PerosonalDetails />
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
            <References/>
            {/* ------website-------- */}
            {/* <Websites/> */}
            {/* ------website-------- */}
            {/* -------Skills-=---- */}
            <Skills/>
            {/* -------Skills-=---- */}
            <Languages/>
            {/* -------Hobbies------- */}
            <Hobies/>
            {/* -------Hobbies------- */}
            {/* -------Custom Section---- */}
            <AddNewSection tittle={text}/>
            <NewSection setText={setText}/>
            {/* -------Custom Section---- */}
            {/* ------Preview And Download------- */}
            <div className=' absolute bottom-5 right-2 block xl:hidden'>
                      <div className=' h-[60px] w-[60px] px-5 bg-blue-500 flex justify-center items-center gap-3 text-white font-[600] cursor-pointer rounded-full' onClick={()=>setShow(true)}>
                            <FontAwesomeIcon icon={faNoteSticky} className=' text-white text-3xl font-[500]'/>
                      </div>
            </div>
            {/* ------Preview And Download------- */}
        </div>
    );
};

export default Builder;