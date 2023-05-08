import React, { useState } from 'react';
import Titttle from './Titttle';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Input from './Input';

const AddNewSection = ({tittle}) => {
    const [open,SetOpen] = useState(false);
    return (
      <>
        {
            tittle ? <div className='mt-6'>
            <Titttle tittle={tittle}/>
            <div className=' ml-5 flex gap-3 py-3 font-[600] text-blue-500 items-center cursor-pointer'>
               <FontAwesomeIcon icon={faPlus} onClick={()=>SetOpen(!open)}/>
               <p onClick={()=>SetOpen(!open)}>
                {
                    open?'Add One More Skill':`Add ${tittle}`
                }
               </p>
            </div>
        </div> : null
        }
      </>
    );
};

export default AddNewSection;