import React from 'react';

const Education = () => {
    const education = [{
        id:1,
        tittle:'Bachelor of Graphic Design at Hunter College',
        location:'New York',
        year:'september 2004 - may 2008'
    },{
        id:2,
        tittle:'High School Diploma at Rye High School',
        location:'Rye, NY',
        year:'september 2000 - may 2004'
    }]
    return (
        <div className=' my-4'>
            <h2 className='text-[#003469] font-[700] text-2xl mb-2'>Educations</h2>
            <div>
                {
                    education.map((item) => <div key={item.id} className=' py-1'>
                        <h2 className=' edu_tittle text-xl font-[600]'>{item.tittle}<span className=' edu_location'>
                        {item.location}
                            </span></h2>

                        <h2 className=' uppercase text-[#a2b5f0] font-[600] py-1 edu-year'>{
                            item.year
                            }</h2>
                            
                    </div>)
                }
            </div>
        </div>
    );
};

export default Education;