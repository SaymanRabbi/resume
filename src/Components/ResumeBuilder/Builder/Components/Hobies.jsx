import React from 'react';
import Titttle from './Titttle';

const Hobies = () => {
    return (
        <div className=' mt-6 '>
            <Titttle tittle='Hobbies'/>
            <p className='text-gray-400 text-sm mb-5'>
            What do you like?
            </p>
            <div className='relative group'>
            <textarea rows='3' placeholder="e.g. Skiing, Skydiving, Painting"  className=' w-[100%] outline-none border-none bg-gray-100 caret-blue-500 block rounded resize-none py-[12px] px-[16px] h-[96px]'></textarea>
            <div className=' absolute border border-blue-500 w-[100%] scale-100 opacity-0 group-hover:opacity-100'>

            </div>
            </div>
        </div>
    );
};

export default Hobies;