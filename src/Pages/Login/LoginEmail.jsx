import React from 'react';

const LoginEmail = ({setShow}) => {
    return (
        <form action="" className=' w-[400px]' >
            <label htmlFor="" className=' text-gray-400 pb-2'>Email</label>
            <input type="email" className='border-2 border-gray-300 rounded-md p-2 w-full outline-none focus:border-b-blue-500 py-[10px]'/>
            <label htmlFor="" className=' text-gray-400 pb-2'>Password</label>
            <input type="password" className='border-2 border-gray-300 rounded-md p-2 w-full outline-none focus:border-b-blue-500 py-[10px]'/>
            <div className=' mt-[40px] flex justify-between'>
               <button className=' px-5 py-3 rounded-md font-bold border' onClick={()=>setShow(1)}>Back</button>
               <button className=' px-5 py-3 rounded-md font-bold border bg-blue-500 text-white'>Continue</button>
            </div>
        </form>
    );
};

export default LoginEmail;