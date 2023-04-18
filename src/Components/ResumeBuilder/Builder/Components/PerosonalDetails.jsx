import React, { useRef, useState } from 'react';
import Titttle from './Titttle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faAngleDown,faAngleUp } from '@fortawesome/free-solid-svg-icons';
import Input from './Input';

const PerosonalDetails = ({setPersonalInfo}) => {
    const refToInput = useRef(null);
    const [show, setShow] = useState(false);
    const openFile = () => {
        refToInput.current.click();
    }
    const PersonalDetailsSave = (e) => {
      e.preventDefault();
      console.log(e);
        const tittle = e.target?.tittle?.value;
        const first_name = e.target?.first_name?.value;
        const last_name = e.target?.last_name?.value;
        const email = e.target?.email?.value;
        const phone = e.target?.phone?.value;
        const address = e.target?.address?.value;
        const city = e.target?.city?.value;
        const postal_code = e.target?.postal_code?.value;
        const country = e.target?.country?.value;
        const driving = e.target?.driving?.value;
        const nationality = e.target?.nationality?.value;
        const place_of_birth = e.target?.place_of_birth?.value;
        const date_of_birth = e.target?.date_of_birth?.value;
        const data = {
          user_name: first_name + ' ' + last_name,
          tittle,
          user_email: email,
          user_phone: phone,
          user_address: address + ' ' + city + ' ' + postal_code,
          user_country: country,
        }
        // console.log(data);
    }
    return (
        <div>
            <Titttle tittle='Personal Details'/>
            <div className=' mb-4'>
            </div>
            <form onChange={(e)=>PersonalDetailsSave(e)}>
                <div className=' grid md:grid-cols-2 md:gap-10 grid-cols-1 gap-2'>
                   <Input label='Wanted Job Title' placeHolder='e.g Teacher' attributename='tittle'/>
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
                   <Input attributename='first_name' label='First Name' placeHolder='Sayman'/>
                     <Input attributename='last_name' label='Last Name' placeHolder='Rabbi'/>
                </div>
                <div className=' grid md:grid-cols-2 md:gap-10 grid-cols-1 gap-2'>
                   <Input attributename='email' label='Email' placeHolder=''/>
                     <Input label='Phone' attributename='phone' placeHolder=''/>
                </div>
                <div className=' grid md:grid-cols-2 md:gap-10 grid-cols-1 gap-2'>
                   <Input label='Country' attributename='country' placeHolder=''/>
                     <Input label='City' attributename='city' placeHolder=''/>
                </div>
               {
                     show && <div>
                        <div className=' grid md:grid-cols-2 md:gap-10 grid-cols-1 gap-2'> 
                       <Input attributename='address' label='Address' placeHolder=''/>
                       <Input label='Postal Code' attributename='postal_code' placeHolder=''/>
                     </div>
                     <div className=' grid md:grid-cols-2 md:gap-10 grid-cols-1 gap-2'> 
                       <Input label='Driving License' attributename='driving' placeHolder=''/>
                       <Input label='Nationality' placeHolder='' attributename='nationality'/>
                     </div>
                     <div className=' grid md:grid-cols-2 md:gap-10 grid-cols-1 gap-2'> 
                       <Input label='Place Of Birth' placeHolder='' attributename='place_of_birth'/>
                       <Input label='Date Of Birth' placeHolder='' attributename='date_of_birth'/>
                     </div>
                     </div>
               }
                <div className=' mt-4 flex gap-3 items-center  font-[500] text-blue-500 cursor-pointer'>
                <h2 className='' onClick={()=>setShow(!show)}>
                  
                   {show ? 'Hide' : 'Show'} More Details
                </h2>
                <FontAwesomeIcon icon={show?faAngleUp:faAngleDown } onClick={()=>setShow(!show)}/>
                </div>
            </form>
        </div>
    );
};

export default PerosonalDetails;