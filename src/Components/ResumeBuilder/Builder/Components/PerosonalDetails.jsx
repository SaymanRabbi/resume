import React, { useRef, useState } from 'react';
import Titttle from './Titttle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import Input from './Input';

const PerosonalDetails = () => {
    const refToInput = useRef(null);
    const [show, setShow] = useState(false);
    const openFile = () => {
        refToInput.current.click();
    }
    return (
        <div>
            <Titttle tittle='Personal Details'/>
            <div className=' mb-4'>
            </div>
            <form>
                <div className=' grid md:grid-cols-2 md:gap-10 grid-cols-1 gap-2'>
                   <Input label='Wanted Job Title' placeHolder='e.g Teacher'/>
                   <div className=' relative mt-4'>
                    <input type="file" className=' hidden absolute w-0 h-0 pointer-events-none outline-none'ref={refToInput} />
                   <div className=' w-[100%] flex gap-x-4 pt-[14px] h-[74px] items-center cursor-pointer'onClick={()=>openFile()}>
                        <div className='w-[60px] h-[60px]  rounded flex justify-center items-center bg-gray-300 cursor-pointer' >
                            <FontAwesomeIcon icon={faUser} className='text-gray-500 text-[30px]'/>
                        </div>
                        <span className=' font-[400] text-blue-500'> Upload Photo</span>
                   </div>
                   </div>
                   <div>

                   </div>
                </div>
                <div className=' grid md:grid-cols-2 md:gap-10 grid-cols-1 gap-2'>
                   <Input label='First Name' placeHolder='Sayman'/>
                     <Input label='Last Name' placeHolder='Rabbi'/>
                </div>
                <div className=' grid md:grid-cols-2 md:gap-10 grid-cols-1 gap-2'>
                   <Input label='Email' placeHolder=''/>
                     <Input label='Phone' placeHolder=''/>
                </div>
                <div className=' grid md:grid-cols-2 md:gap-10 grid-cols-1 gap-2'>
                   <Input label='Country' placeHolder=''/>
                     <Input label='City' placeHolder=''/>
                </div>
               {
                     show && <div>
                        <div className=' grid md:grid-cols-2 md:gap-10 grid-cols-1 gap-2'> 
                       <Input label='Address' placeHolder=''/>
                       <Input label='Postal Code' placeHolder=''/>
                     </div>
                     <div className=' grid md:grid-cols-2 md:gap-10 grid-cols-1 gap-2'> 
                       <Input label='Driving License' placeHolder=''/>
                       <Input label='Nationality' placeHolder=''/>
                     </div>
                     <div className=' grid md:grid-cols-2 md:gap-10 grid-cols-1 gap-2'> 
                       <Input label='Place Of Birth' placeHolder=''/>
                       <Input label='Date Of Birth' placeHolder=''/>
                     </div>
                     </div>
               }
                <div className=' mt-4 flex gap-3 items-center  font-[500] text-blue-500 cursor-pointer'>
                <h2 className='' onClick={()=>setShow(!show)}>Edit additional details</h2>
                <FontAwesomeIcon icon={faAngleDown} onClick={()=>setShow(!show)}/>
                </div>
            </form>
        </div>
    );
};

export default PerosonalDetails;