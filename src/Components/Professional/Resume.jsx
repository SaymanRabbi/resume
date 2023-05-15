import React from 'react';
import { Christoper,Elsa,Patrica, Sophie,  Vince} from './Images';
import { Link } from 'react-router-dom';
const Resume = ({refar}) => {
    const data = [
        {  id:'toronto',
            img:Christoper,
            name:'Toronto',
            dec:'A web-inspired resume template perfect for chatting up your achievements.'
        },{
            id:'vienna',
            img:Patrica,
            name:'Vienna',
            dec:'Striking modern header, professional two column template structure.'
        },{
            id:'new_york',
            img:Sophie,
            name:'New York',
            dec:'Professional and elegant resume template with a timeline structure.'
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
        }
    ]
    return (
        <div className=' grid xl:grid-cols-3  md:grid-cols-2 grid-cols-1 md:px-3' ref={refar}>
            {
                data.map((item) =>
                <div key={item.id} data-name={item.id} className='mx-auto w-[90%] md:w-[100%] px-2 md:pb-3 pb-14  cursor-pointer group relative'>
                 <div className=' lg:p-8 p-5 bg-[#EFF2F9] h-[85%] group-hover:shadow-md'>
                    <img src={item.img} alt="" className=' w-[100%] h-[100%] rounded-md
                    group-hover:shadow-xl
                    '/>
                 </div>
                  <div className='py-3'>
                  <h2 className=' text-xl font-[600] leading-7 group-hover:text-blue-700'>
                    {
                        item.name
                    }
                    <p className=' text-[16px] text-[#828ba2] leading-5 my-3'>
                        {
                            item.dec
                        }
                    </p>
                  </h2>
                  </div>
                  <Link to={`/resume_builder/${item.id}`} className='hidden group-hover:block top-[43%] font-[500] md:right-[30%] absolute right-[18%]'>
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