import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus,faPen, faArrowDown,faTrashCan} from '@fortawesome/free-solid-svg-icons';

import Christoper from '../../Components/Resume/Christoper/Christoper';
import { Link } from 'react-router-dom';
const Profile = () => {
    return (
        <div className=' max-w-[1100px] mx-auto'>
            <h2 className=' text-3xl text-black font-[600]'>Your All Resumes</h2>
            <div className=' relative flex  w-full  border-b border-gray-200 py-2 justify-between'>
                <h2 className=' font-[500]'>
                Resumes
                </h2>
                <Link to='/resume-templates' className=' absolute right-0 top-[-20px] bg-blue-500 text-white px-2 py-2 rounded-md font-[500] flex gap-x-2 items-center'>
                    <FontAwesomeIcon icon={faPlus} />
                    Create New
                </Link>
                <div className=' w-[65px] bg-blue-500 h-[2px] absolute bottom-0'></div>
            </div>
            <div className=' py-5 grid grid-cols-12 gap-x-6 lg:gap-y-5 gap-y-0'>
               <div className=' flex gap-x-10 lg:col-span-6 col-span-12'>
                <div className=' h-[300px] w-[210px] rounded-md border border-gray-200 '>
                    <Christoper/>
                </div>
                <div className=''>
                    <h2 className=' text-2xl text-gray-500'>
                    Untitled
                    </h2>
                    <div className=' py-5'>
                       <div className=' flex gap-x-3 items-center text-[18px] font-[400]'>
                            <FontAwesomeIcon icon={faPen} className=' text-blue-500'/>
                            <span className='text-gray-500'>Edit</span>
                       </div>
                       <div className=' flex gap-x-4 items-center text-[18px] font-[400] py-3'>
                            <FontAwesomeIcon icon={faArrowDown} className=' text-blue-500'/>
                            <span className='text-gray-500'>Download PDF</span>
                       </div>
                       <div className=' flex gap-x-4 items-center text-[18px] font-[400]'>
                            <FontAwesomeIcon icon={faTrashCan} className=' text-blue-500'/>
                            <span className='text-gray-500'>Delete</span>
                       </div>
                    </div>
                </div>
               </div>

               <Link to='/resume-templates' className='flex gap-x-10 lg:col-span-6 col-span-12 cursor-pointer group lg:my-0 my-10'>
               <div>
               <div className=' w-[210px] h-[300px] rounded-md border border-gray-200 flex justify-center items-center  '>
                     <div className=' w-[60px] h-[60px] rounded-full bg-gray-100 flex justify-center items-center  text-2xl text-gray-300 group-hover:text-white group-hover:bg-blue-500'>
                        <FontAwesomeIcon icon={faPlus} />
                     </div>
                </div>
               </div>
                     <div className=''>
                     <h2 className=' text-2xl font-[400] text-gray-500'>
                     New Resume
                     </h2>
                     <p className=' text-gray-500 text-[14px]'>
                     Create a tailored resume for each job application. Double your chances of getting hired!
                     </p>
                     </div>
               </Link>
            </div>
        </div>
    );
};

export default Profile;