import React from 'react';

const ResumeScore = () => {
    return (
        <div className=' pt-[20px] pb-[16px] sticky top-0 bg-white z-20'>
            <div className='flex gap-x-4'>
              <p className='px-1 rounded-md bg-[#FE7D8B] text-white font-[500]'>14%</p>
              <h2 className=' text-gray-500 font-[500]'>
                Resume Score
              </h2>
            </div>
            <div className='relative h-[3px] bg-gray-300 mt-2'>
                <div className='absolute top-0 w-[14%] left-0 h-[3px] bg-[#FE7D8B]' ></div>
            </div>
        </div>
    );
};

export default ResumeScore;