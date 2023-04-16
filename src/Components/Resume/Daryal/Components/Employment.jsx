import React from 'react';
import Education from './Education';

const Employment = () => {
    const employment = [{
        id: 1,
        tittle: 'Motion Graphics Artist at Century Graphics, Culver City',
        year:'AUGUST 2016 MAY 2020',
        skill:[{
            id:1,
            name:'Consulted with clients to gain an in-depth understanding of their needs prior to project initiation'
        },{
            id:2,
            name:'Collaborated with directors and creative professionals to outline and achieve'
        },{
            id:3,
            name:'Utilized complex computer software and programs to create designs'
        },{
            id:4,
            name:'Effectively utilized powerful typography in motion designs Carefully applied story directions in the creation of motion graphics'
        },{
            id:5,
            name:'Manipulated visual images to convey motion'
        }]
    },{
        id: 2,
        tittle: 'Graphics Design Assistant at Silver Elephant, Los Angeles',
        year:'FEBRUARY 2013 JUNE 2016',
        skill:[{
            id:1,
            name:'Assisted designers with all department tasks.'
        },{
            id:2,
            name:'Provided support during still and motion graphics projects.'
        },{
            id:3,
            name:'Utilized 2D motion and still graphics during projects.'
        }]
    }]
    return (
        <div className=' col-span-8'>
            <h2 className='text-[#003469] font-[700] text-2xl mb-2'>Employment History</h2>
            <div>
                {
                    employment.map((item) => <div key={item.id} className=' py-2'>
                        <h2 className=' employ_tittle text-xl font-[500]'>{item.tittle}</h2>
                        <h2 className=' uppercase text-[#a2b5f0] font-[600] py-1 employ_year'>{
                            item.year
                            }</h2>
                            {
                                item.skill.map((item)=> <div className=' relative ml-3'>
                                <span className=' absolute w-[4px] h-[4px] rounded-full bg-black mt-[10px]'></span>
                                <h2 className=' employ_skill font-[500] ml-3'>
                                    {item.name}
                                </h2>
                             </div>)
                            }
                    </div>)
                }
            </div>
            <Education/>
        </div>
    );
};

export default Employment;