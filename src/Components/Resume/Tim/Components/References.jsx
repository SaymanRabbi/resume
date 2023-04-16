import React from 'react';

const References = () => {
    const references = [
        {
            id:1,
            name:'LeAnne Gains',
            uni:"The University of Pennsylvania",
            email:'lgains@dbp.gmail.com',
             ref_id: '123456789',
        },
        {
            id:2,
            name:'LeAnne Gains',
            uni:'The University of Pennsylvania',
            email:'lgains@dbp.gmail.com',
             ref_id: '123456789',
        }
    ]
    return (
        <div className=' mt-3'>
            <div className='grid grid-cols-12'>
              <div className=' col-span-3'>
              <h2 className=' uppercase text-2xl font-semibold text-[#1B3055] tracking-wider'>
                References
              </h2>
              </div>
              <div className=' col-span-9'>
               {
                     references.map((item) => 
                     <div key={item.id} className=' mb-3 references'>
                        <h2 className=' text-xl font-semibold '><span className='ref_tittle'>{item.name}</span>-<span className='ref_uni'>{item.uni}</span></h2>
                        <h2 className=' mt-3 font-semibold'><span className=''>{item.email}</span>-<span className='ref_id'>{item.ref_id}</span></h2>
                     </div>

                     )
               }
              </div>
              </div>
        </div>
    );
};

export default References;