import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const SkillsButton = ({tittle}) => {
    return (
        <div className=' flex items-center bg-gray-200 text-black hover:bg-blue-200 hover:text-blue-500 text-[16px] whitespace-nowrap cursor-pointer py-[6px] pl-[10px] pr-[10px]  rounded-[4px] mb-[12px] mr-[12px]'>
            <h2>{tittle}</h2>
            <FontAwesomeIcon icon={faPlus} className='ml-[4px]' />
        </div>
    );
};

export default SkillsButton;