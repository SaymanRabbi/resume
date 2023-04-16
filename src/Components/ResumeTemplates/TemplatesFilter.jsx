import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy,faChessQueen,faBriefcase } from '@fortawesome/free-solid-svg-icons';
import './TemplatesFilter.css'
const TemplatesFilter = () => {
    const path  = useLocation().pathname;
    console.log(path);
    return (
        <div className=' flex justify-center border-b mb-8'>
            <div className='flex md:gap-x-16 gap-x-8'>
               <NavLink
  to="/resume-templates"
  className={({ isActive }) => (isActive ? `${path==='/resume-templates'?'active flex':'deactive group flex'} 
}`: 'deactive group')}
> 
<FontAwesomeIcon icon={faCopy} className='mr-3  text-2xl group-hover:text-blue-500 hidden md:block'/>
<span className='text-gray-500 group-hover:text-black'>All templates</span>
</NavLink>
<NavLink
  to="/resume-templates/creative"
  className={({ isActive }) => (isActive ? `active flex
}`: 'deactive group flex')}
> 
<FontAwesomeIcon icon={faChessQueen} className='mr-3  text-2xl group-hover:text-blue-500 hidden md:block'/>
<span className='text-gray-500 group-hover:text-black'>Creative</span>
</NavLink>
<NavLink
  to="/resume-templates/professional"
  className={({ isActive }) => (isActive ? `active flex
}`: 'deactive group flex')}
> 
<FontAwesomeIcon icon={faBriefcase} className='mr-3  text-2xl group-hover:text-blue-500 hidden md:block'/>
<span className='text-gray-500 group-hover:text-black'>Professional</span>
</NavLink>
            </div>
        </div>
    );
};

export default TemplatesFilter;