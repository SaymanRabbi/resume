import React from 'react';

const Employment = () => {
    const employment = [
       {
              id:1,
              tittle:'Staff Accountant,Dubone Partnership',
                year:'Nov 2013 - Sep 2019', 
                location:'USA',
                skill:[ { id:1,
                    text:'Managed accounts by analyzing and reconciling'},{
                           id:2,
                           name:'Managed accounts by analyzing and reconciling'
                    },{
                           id:3,
                           name:'Developed and maintained financial records'
                    },{
                           id:4,
                           name:'Work closely with the management team to ensure'
                    },{
                           id:5,
                           name:'Managed accounts by analyzing and reconciling'
                    },{
                           id:6,
                           name:'Organized and maintained financial records'
                    }]
       },{
                id:2,
                tittle:'Staff Accountant,Dubone Partnership',
                year:'Nov 2013 - Sep 2019',
                location:'New Work',
                skill:[  { id:1,
                    text:'Oversaw the management of all company accounts'},
                    {
                        id:2,
                        name:'Processed staff payroll and other main aspects of the business'
                    },{
                        id:3,
                        name:'Managed accounts teams and ensured that all accounts were up to date'
                    },{
                        id:4,
                        name:'Worked closely with the management team to ensure that all accounts were up to date'
                    },{
                        id:5,
                        name:'Remainded professional at all times and ensured that all accounts were up to date'
                    }]
       }
    ]
    
    return (
        <div className=' mt-3'>
             <h2 className=' uppercase text-2xl font-semibold text-[#1B3055] tracking-wider '>
                Employment History
              </h2>
              {
                    employment.map((item,i) => <div className='grid grid-cols-12 mt-3  gap-8' key={i}>
                    <div className=' col-span-3'>
                     <h2 className='font-semibold text-xl employ_year'>{item.year}</h2>
                    </div>
                    <div className=' col-span-7 w-full'>
                      <h2 className=' font-semibold text-xl employ_tittle'>{
                            item.tittle
                      }</h2>
                      <div className='my-3 '>
                         {
                              item.skill.map((item) => {
                                  return(
                                      <div key={item.id} className=' relative ml-8'>
                                          <span className=' absolute mt-[10px] w-[7px] h-[7px] rounded-full bg-[#1B3055]'></span>
                                          <p className='font-medium employment ml-5 mt-1 employ_skill'>{item.name}</p>
                                      </div>
                                  )
                              })
                         }
                      </div>
                    </div>
                    <div className='col-span-2'>
                    <h2 className='font-semibold text-xl employ_location'>{
                        item.location
                    }</h2>
                    </div>
                </div>)
              }
              
             
              
        </div>
    );
};

export default Employment;