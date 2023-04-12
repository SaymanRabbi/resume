import React from 'react';

const RightUserInfo = () => {
    const skills = [
        {
            id: 1,
            name: 'Neurogical Assessment',
            rating: 5
        },{
            id: 2,
            name: 'Cogntive Behavioral Therapy',
            rating: 5
        },
            {
                id: 3,
                name: 'Advanced Research Skills',
                rating: 5
            },{
                id: 4,
                name: 'Knowledge of Psychopha',
                rating: 5
            }
        
    ]
    const referances = [
        {
            id: 1,
            text:'Dr. Gene Reandopal from The UniverCity of New York, USA',
            university:'grand university',
            regino:'0122121212121'
        },
        {
            id: 2,
            text:'Dr. Gene Reandopal from The UniverCity of New York, USA',
            university:'grand university',
            regino:'0122121212121'


        },{
            id:3,
            text:'Dr. Gene Reandopal from The UniverCity of New York, USA',
            university:'grand university',
            regino:'0122121212121'


        }
    ]
    return (
        <div className=' col-span-5'>
             <div className='bg-[#ECEDEC] rounded-lg p-2'>
             <h2 className='text-2xl font-bold text-[#1B3055]'>
                            Skills
                        </h2>
                        {
                            skills.map(skill => <div className='flex justify-between items-center gap-3 text-gray-700'>
                            <h2 className=' font-bold skill_tittle'  key={skill.id}>{skill.name}</h2>
                             <div className=' border w-auto border-gray-700 h-0 flex-grow'></div>
                             <h2 className=' font-medium skill_rating'>{skill.rating}/5</h2>
                            </div>)
                        }

                       
             </div>
             <div>
             <div className='bg-[#ECEDEC] rounded-lg p-2 mt-3'>
                            <h2 className='text-2xl font-bold text-[#1B3055]'>
                               References
                            </h2>
{
    referances.map(referance => <div key={referance.id} className='my-2 text-gray-700 References'>
    <h2 className=' font-bold ref_tittle'>{referance.text}</h2>
    <h2 className=' font-medium ref_uni'>{referance.university}</h2>
    <h2  className=' font-medium ref_id'>{referance.regino}</h2>
    </div>)
}
                        </div>
             </div>
        </div>
    );
};

export default RightUserInfo;