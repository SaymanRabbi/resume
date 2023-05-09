import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDochub } from '@fortawesome/free-brands-svg-icons';
import { faFileText } from '@fortawesome/free-solid-svg-icons';
import { useLocation } from 'react-router-dom';
import Vince from '../Resume/Vince/Vince';
import Christoper from '../Resume/Christoper/Christoper';
import Sebastian from '../Resume/Sebastian/Sebastian';
import Petrica from '../Resume/Petrica/Petrica';
import Gregory from '../Resume/Gregory/Gregory';
import Shophie from '../Resume/Shophie/Shophie';
import Westurner from '../Resume/Westurner/Westurner';
const SmallPreview = ({setShowprev}) => {
    const [show, setShow] = React.useState(false);
    const path = useLocation().pathname.split('/')[2]
    return (
        <div className='fixed w-[100%] min-h-[100vh] bg-black z-50 top-0 left-0 bottom-0 right-0 inset-0  flex flex-col'>
            <div className=' relative h-[100vh]'>
                {/* ------header------- */}
                 <div className=' h-16 w-full bg-black flex justify-between px-16 items-center'>
                    <div className=' flex gap-3'>
                      
                       <button className='px-4 py-2 text-xl rounded-md bg-blue-500 text-white font-[600]'>Download PDF</button>
                       <button className='px-4  text-xl rounded-md bg-blue-500 text-white font-[600] flex items-center'
                       onClick={() => setShow(!show)}
                       >...</button>
                    </div>
                    <div className=' text-3xl font-[600] text-white hover:text-blue-500 cursor-pointer' onClick={()=>setShowprev(false)}>
                        X
                    </div>
                 </div>
                {/* ------header------- */}
                {/* ------body------- */}
                <div className=' flex-grow flex-shrink-0   px-[20px] h-[calc(100%-64px)]'>
                        <div className=' relative my-[20px] mx-auto w-full bg-white h-[100%] rounded-[6px] overflow-x-scroll'>  
                       {
                      path==='tokyo'?<Vince/>:path==='toronto'?<Christoper small='small'/>:path==="madrid"?<Sebastian/>:path==='vienna'?<Petrica/>:path==='sydney'?<Gregory/>:path==="new_york"?<Shophie/>:path==="amsterdam"?<Westurner/>:null
                     }
                      
                        </div>
                </div>
                {/* ------body------- */}
                {/* ------export------ */}
               {
                     show ?  <div className='bg-black bg-opacity-50  flex overflow-hidden flex-col py-8 px-5 z-[10000] justify-end fixed inset-0'>
                      
                     <div className=' bg-white rounded-md p-8 max-w-[767px]'>
                           <div className=' py-[6px] px-[10px] flex gap-4 w-full group cursor-pointer items-center'>
                               <FontAwesomeIcon icon={faDochub} className=' text-[#0E76A8] text-2xl font-[500]'/>
                                <h2 className=' group-hover:text-blue-500 text-xl'>Export To DOCX</h2>
                           </div>
                           <hr />
                           <div className=' py-[6px] px-[10px] flex gap-4 w-full group cursor-pointer items-center'>
                               <FontAwesomeIcon icon={faFileText} className=' text-[#0E76A8] text-2xl font-[500]'/>
                                <h2 className=' group-hover:text-blue-500 text-xl'>Export To TXT</h2>
                           </div>
                           <hr />
                         
                     </div>
                     <div className=' mt-5 bg-white rounded-md px-8 py-3 max-w-[767px]'>
                          <button className=' w-full font-[700] text-center flex justify-center text-xl text-blue-500'
                          onClick={() => setShow(!show)}
                          >
                           Cancel
                          </button>
                     </div>
                
           </div>: null
               }
                {/* ------export------ */}
            </div>
        </div>
    );
};

export default SmallPreview;