import { faCloudUpload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Preview = () => {
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
                <div className=' inset-0 z-30 rounded-[6px] flex items-center justify-center cursor-pointer h-[80%] w-[60%] bg-white mx-auto'>
                  <h2 className=' text-red-400 text-xl font-[500]'>here Show the Live Privew Resume</h2>
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