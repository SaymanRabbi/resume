import React from 'react';
import Hero from '../../Components/Hero/Hero';
import TemplatesFilter from '../../Components/ResumeTemplates/TemplatesFilter';
import { Outlet } from 'react-router-dom';

const ResumeTemplate = ({handleClick}) => {
  
    return (
        <div>
          <Hero tittle='Job-winning resume templates' dec='Each resume template is expertly designed and follows the exact “resume rules” hiring managers look for. Stand out and get hired faster with field-tested resume templates.' button='Create My Resume' handleClick={handleClick} />
          <TemplatesFilter/>
          <Outlet/>
        </div>
    );
};

export default ResumeTemplate;