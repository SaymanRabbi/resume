import React, { useState } from 'react';
import Builder from './Builder/Builder';
import Preview from './Preview/Preview';
import SmallPreview from './SmallPreview';
import './style.css'
const ResumeBuilderCompo = () => {
    const [showprev,setShowprev] = useState(false);
    return (
        <div className=' grid grid-cols-12 relative'>
            <Builder setShow={setShowprev}/>
            <Preview />
            <div className='block xl:hidden'>
            {
                showprev ? <SmallPreview setShowprev={setShowprev}/> :null
           }
            </div>
           
        </div>
    );
};

export default ResumeBuilderCompo;