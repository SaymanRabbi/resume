import React, { useState } from 'react';

const Input = ({label,placeHolder,setNewSkill,attributename}) => {
  const [input, setInput] = useState('');
  const data = [
    attributename,
    input
  ]
    return (    
        
             <div className='group h-[74px] flex-grow-0 flex-shrink-0 flex-[50%] mt-3'>
                   <label htmlFor="" className='text-gray-500 font-[500] mb-2 inline-block'>{label}</label>
                  {
                    label==='Skill'?<input type="text" className=' w-[100%] px-4 h-[50px] bg-gray-100 rounded border-none outline-none caret-blue-500 border border-transparent
                    ' placeholder={placeHolder} onChange={(e)=>setNewSkill(e.target.value)}/>: <input name={attributename}  value={input} onInput={e => setInput(e.target.value)}  type="text" className=' w-[100%] px-4 h-[50px] bg-gray-100 rounded border-none outline-none caret-blue-500 border border-transparent
                    ' placeholder={placeHolder}
                     datas={data}
                    />
                  }
                    <div className=' bottom-0 border transition-all border-blue-500 w-full group-hover:opacity-100 opacity-0' ></div>
                   </div>
      
    );
};

export default Input;