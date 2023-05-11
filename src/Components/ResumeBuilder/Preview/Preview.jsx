import { faCloudUpload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Vince from '../../Resume/Vince/Vince';
import { useState } from 'react';
import { createPortal } from 'react-dom';
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
function IFrame({ children }) {
  const [ref, setRef] = useState();
  const container = ref?.contentWindow?.document?.body;

  return (
    <iframe ref={setRef} className=' w-[100%] h-[100%]'>
      {container && createPortal(children, container)}
    </iframe>
  );
}
const Preview = () => {
  const path = useLocation().pathname.split('/')[2]
    return (
        <div className='hidden xl:flex col-span-6 bg-[#656E83] fixed top-0 bottom-0 right-0 z-10  justify-center items-center h-[100vh] w-[50%]'>
           
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
                <div className=' inset-0 z-30 rounded-[6px] cursor-pointer h-[80%] w-[60%] bg-white mx-auto'>
                     {
                      path==='tokyo'?<Vince/>:path==='toronto'?<Christoper/>:path==="madrid"?<Sebastian/>:path==='vienna'?<Petrica/>:path==='sydney'?<Gregory/>:path==="new_york"?<Shophie/>:path==="amsterdam"?<Westurner/>:path ==='london' ? <Tim/>:path==='vancouver' ?<IsabelMaher/>: path ==='milan' ? <Elsa/>:path ==='copenhagen' ? <Monica/>:path==="lisbon" ? <Daryal/>:null
                     }
            </div>
               <div className=' mt-5 flex justify-center'>
                 <button className=' px-5 py-3 bg-blue-500 text-white text-2xl font-[600] rounded'> Download Pdf</button>
               </div>
                </div>
            <div>
               
            </div>
        </div>
    );
};

export default Preview;