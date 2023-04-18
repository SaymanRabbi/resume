import React from 'react';
import { Christoper,Daryal,Elsa,Isa,John,Monica,Patrica,Sebastian, Sophie, Tim, Vince, Wes } from './Images';
import { Link } from 'react-router-dom';
const Resume = () => {
    const data = [
        {  id:'toronto',
            img:Christoper,
            name:'Toronto',
            dec:'A web-inspired resume template perfect for chatting up your achievements.'
        },{
            id:'madrid',
            img:Sebastian,
            name:'Madrid',
            dec:'Powerful modern resume template with bold section highlights.'
        },{
            id:'vienna',
            img:Patrica,
            name:'Vienna',
            dec:'Striking modern header, professional two column template structure.'
        },{
            id:'sydney',
            img:John,
            name:'Sydney',
            dec:'Modern and eye-catching resume template. Beautiful contrasting structure.'
        },{
            id:'new_york',
            img:Sophie,
            name:'New York',
            dec:'Professional and elegant resume template with a timeline structure.'
        },{
            id:'amsterdam',
            img:Wes,
            name:'Amsterdam',
            dec:'Modern minimalist resume template structure with graceful clarity.'
        },{
            id:'london',
            img:Tim,
            name:'London',
            dec:'Classically structured resume template, for a robust career history.'
        },{
            id:'vancouver',
            img:Isa,
            name:'Vancouver',
            dec:'Creative, light-hearted resume template with color and flair.'
        },{
            id:'tokyo',
            img:Vince,
            name:'Tokyo',
            dec:'Tech-inspired design, minimalist page, skill-point visuals.'
        },{
            id:'milan',
            img:Elsa,
            name:'Milan',
            dec:'Streamlined professional resume template with a human touch.'
        },{
            id:'copenhagen',
            img:Monica,
            name:'Copenhagen',
            dec:'Emphasizing your personal story above all else, this template blends a traditional style with attention-grabbing design.'
        },{
            id:'lisbon',
            img:Daryal,
            name:'Lisbon',
            dec:'A beautiful way to showcase your expertise, this creative resume template stands out with artistic touches.'
        }
    ]
    return (
        <div className=' grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  px-3'>
            {
                data.map((item) =>
                <div key={item.id} data-name={item.id} className=' w-[100%] px-2 pb-8 h-[709px] cursor-pointer group relative'>
                 <div className=' p-8 bg-[#EFF2F9] h-[90%] group-hover:shadow-md'>
                    <img src={item.img} alt="" className=' w-[100%] h-[100%] rounded-md
                    group-hover:shadow-xl
                    '/>
                 </div>
                  <div className=' mt-3'>
                  <h2 className=' text-xl font-[600] leading-7 group-hover:text-blue-700'>
                    {
                        item.name
                    }
                    <p className=' text-[16px] text-[#828ba2] leading-5'>
                        {
                            item.dec
                        }
                    </p>
                  </h2>
                  </div>
                  
                  <Link to={`/resume_builder/${item.id}`} className='hidden group-hover:block top-[43%] font-[500] right-[30%] absolute'>
                    <button className=' px-4 py-2 bg-blue-500 rounded-md text-white shadow-md'>
                        Use This Template
                    </button>
                  </Link>
                </div>
                )
            }
        </div>
    );
};

export default Resume;