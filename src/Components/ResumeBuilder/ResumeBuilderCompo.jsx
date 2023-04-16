import React from 'react';
import Builder from './Builder/Builder';
import Preview from './Preview/Preview';
const ResumeBuilderCompo = () => {
    return (
        <div className=' grid grid-cols-12'>
            <Builder/>
            <Preview/>
        </div>
    );
};

export default ResumeBuilderCompo;