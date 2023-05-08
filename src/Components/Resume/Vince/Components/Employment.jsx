import React from 'react';
import useWidth from '../../../../hooks/useWidth';

const Employment = () => {
    const employemt =[
        {
            id:1,
            tittle:'Administrative Support Assistant, Space Corporation, Dallas',
            year:'2010 - Present',
            skill:[{
                id:1,
                name:'Served as a direct assistant to Production Supervior, suporting all aspects of production and office managesment'
            },{
                id:2,
                name:'Trusted to analyze and resolve complex issues, and to make decisions that impact the business'
            },{
                id:3,
                name:'Known for ability to work independently and as a team member, and for ability to manage multiple projects simultaneously'
            },{
                id:4,
                name:'Responsible for maintaining and updating all production records, including production schedules, production reports, and production logs'
            },{
                id:5,
                name:'Worked closely with the Production Supervisor to ensure that all production goals were met'
            }
        
        ]
        }, 
        {
            id:1,
            tittle:'Administrative Assistant, A&C Corporation, Austin',
            year:'2007 - 2010',
            skill:[{
                id:1,
                name:'Reported directly to the Production Manager, and supported all aspects of production and office management'
            },{
                id:2,
                name:'Performed a wide range of administrative and clerical tasks, including answering phones, filing, and data entry'
            },{
                id:3,
                name:'Implemented and maintained an efficient filing system, and ensured that all files were kept up-to-date'
            },{
                id:4,
                name:'Directed all incoming calls to the appropriate staff member, and took messages when necessary'
            },{
                id:5,
                name:'Supported the Production Manager in all aspects of production, including scheduling, production reports, and production logs'
            }
        
        ]
        }, {
            id:1,
            tittle:'Office Assistant, B&D Corporation, Austin',
            year:'2005 - 2007',
            skill:[{
                id:1,
                name:'Served as a direct assistant to the Production Manager, supporting all aspects of production and office management'  
            }
        
        ]
        }
    ]
    const width = useWidth()
    return (
        <div className='pb-6'>
        <h2 className={`italic ${width>1280?"text-[14px]":"text-2xl"} font-bold`}>Employment History</h2>
        {
            employemt.map((item)=>(
                <div key={item.id} className={`${width>1280?"mt-1":"mt-3"}`}>
                    <h3 className={`${width>1280?"text-[8px] mt-1":"text-xl mt-2"} font-[500]  employ_tittle`}>{item.tittle}</h3>
                    <p className={`text-gray-400 employ_year ${width>1280?"text-[6px]":"text-[18px]"}`}>{item.year}</p>
                    {
                        item.skill.map((item)=>(
                            <div key={item.id} className=' relative ml-3'>
                                <span className={` absolute ${width>1280?"w-[4px] h-[4px] mt-[4px]":"w-[7px] h-[7px] mt-2"} bg-black rounded-full `}></span>
                                <p className={`font-[400] employ_skill ${width>1280?'text-[7px] ml-2':"text-[14px] ml-4"}`}>{item.name}</p>
                            </div>
                        ))
                    }
                </div>
            ))
        }
    </div>
    );
};

export default Employment;