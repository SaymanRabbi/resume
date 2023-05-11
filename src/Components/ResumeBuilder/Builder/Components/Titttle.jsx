import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
const Titttle = ({tittle,position,setResumeTittle}) => {
    const titilText = tittle.trim()
    const refToInput = useRef(null);
    const refToDiv = useRef(null);
    return (
        <div>
             {/* ---header----- */}
             <div className={`flex ${position} items-center`}>
                <div className='relative text-[24px] font-[500] group]'>
                    {
                        setResumeTittle ? <input type="text" autoComplete='off' className='absolute top-0 w-[100%] h-[100%] m-0 border-none  caret-[#1A91F0] outline-none placeholder:text-black text-start'   placeholder={titilText}
                        ref={refToInput}
                        onChange={(e)=>setResumeTittle(e.target.value)}
                        /> : <input type="text" autoComplete='off' className=' absolute top-0 w-[100%] h-[100%] m-0 border-none  caret-[#1A91F0] p-0 outline-none placeholder:text-black' placeholder={tittle}
                        ref={refToInput}
                        /> 
                    }
                    <div className=' absolute bottom-0 left-0 h-[2px] bg-[#1A91F0] pointer-events-none opacity-0 group-hover:opacity-100'
                    ref={refToDiv}
                    ></div>
                    <div className='max-w-[100%] min-w-[3.2em] inline-block pointer-events-none text-black'
                    
                    >
                   {tittle}
                    </div>
                    <FontAwesomeIcon icon={faPen} className='absolute top-3 right-[-23px]  font-[500] text-[18px] cursor-pointer group-hover:opacity-100 opacity-0 text-gray-300 hover:text-blue-500' />
                </div>
            </div>
            {/* ---header----- */}
        </div>
    );
};

export default Titttle;