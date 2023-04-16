import React, { useState } from 'react';
import Titttle from './Titttle';
import Input from './Input';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Websites  = () => {
    const [open,SetOpen] = useState(false);
    return (
        <div className=' mt-6'>
            <Titttle tittle='Websites & Social Links'/>
            <p className=' text-gray-400 text-sm mb-5'>
            You can add links to websites you want hiring managers to see! Perhaps It will be  a link to your portfolio, LinkedIn profile, or personal website
            </p>
            {
open?<div className=' p-4 border'>
     <div className=' flex gap-3 w-[100%]'>
      <Input label='Label' />
      <Input label='Link' />
     </div>
</div>:null
            }
            <div className=' ml-5 flex gap-3 py-3 font-[600] text-blue-500 items-center cursor-pointer'>
               <FontAwesomeIcon icon={faPlus} onClick={()=>SetOpen(!open)}/>
               <p onClick={()=>SetOpen(!open)}>
                Add Link
               </p>
            </div>
        </div>
    );
};

export default Websites ;