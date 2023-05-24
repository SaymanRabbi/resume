import { faCloudUpload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Vince from '../../Resume/Vince/Vince';
import { useLocation } from 'react-router-dom';
import Christoper from '../../Resume/Christoper/Christoper';
import Sebastian from '../../Resume/Sebastian/Sebastian';
import Petrica from '../../Resume/Petrica/Petrica';
import Gregory from '../../Resume/Gregory/Gregory';
import Shophie from '../../Resume/Shophie/Shophie';
import Westurner from '../../Resume/Westurner/Westurner';
import Tim from '../../Resume/Tim/Tim';
import IsabelMaher from '../../Resume/IsabelMaher/IsabelMaher';
import Elsa from '../../Resume/Elsa/Elsa';
import Monica from '../../Resume/Monica/Monica';
import Daryal from '../../Resume/Daryal/Daryal';
import {savePDF } from '@progress/kendo-react-pdf';
 import './Preview.css'
import { useContext } from 'react';
import { data } from '../../../App';
import useSaveData from '../../../hooks/useSaveData';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../../firebase.init';
const Preview = () => {
  const [user] = useAuthState(auth)
  const customUser = JSON.parse(localStorage.getItem('user'))
  const path = useLocation().pathname.split('/')[2]
  const {allData} = useContext(data)
  const pdfRef = React.useRef(null);
  const GeneratePDF =async () => {
    savePDF(pdfRef.current, { paperSize: 'A4',fileName:`${path}` });
    const data = allData[path]
    const newData = {
      email: user?.email || customUser?.email,
      resumeId: path,
        ...data
      }
    useSaveData(newData)
  }
 
    return (
        <div className='hidden xl:flex col-span-6 bg-[#656E83] fixed top-0 bottom-0 right-0 z-10  justify-center items-center h-[100vh] w-[50%] py-3  '>
           
                <div className=' h-[100%] w-[100%] absolute top-0 right-0  bottom-0'>
                    <div className=' w-[50%] mx-auto flex py-5 justify-between'>
                     <div className=' flex gap-2 cursor-pointer'>
                        <FontAwesomeIcon icon={faCloudUpload} className=' text-white text-2xl font-[500]'/>
                     <h2 className='text-white font-[500]'>
                        Saved
                      </h2>
                     </div>
                     <div className=' text-white font-[700]'>
                        1 / 1
                     </div>
                    </div>
                <div className=' inset-0 z-30  cursor-pointer h-[80%] w-[60%] mx-auto'>
                    <div className=' w-[100%] h-[100%] bg-white rounded-[6px] p-1' ref={pdfRef} >
                     {
                      path==='tokyo'?<Vince/>:path==='toronto'?<Christoper/>:path==="madrid"?<Sebastian/>:path==='vienna'?<Petrica/>:path==='sydney'?<Gregory/>:path==="new_york"?<Shophie/>:path==="amsterdam"?<Westurner/>:path ==='london' ? <Tim/>:path==='vancouver' ?<IsabelMaher/>: path ==='milan' ? <Elsa/>:path ==='copenhagen' ? <Monica/>:path==="lisbon" ? <Daryal/>:null
                     }
                     
                   
                     </div>
            </div>
               <div className=' mt-3 flex justify-center'>
                 <button className=' px-5 py-3 bg-blue-500 text-white text-2xl font-[600] rounded'
                 onClick={GeneratePDF}
                 > Download Pdf</button>
               </div>
                </div>
            <div>
               
            </div>
        </div>
    );
};

export default Preview;