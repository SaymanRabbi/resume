import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
const Titttle = ({tittle,position}) => {
    const refToInput = useRef(null);
    const refToDiv = useRef(null);
    return (
        <div>
             {/* ---header----- */}
             <div className={`flex ${position} items-center`}>
                <div className='relative text-[24px] font-[500] group'>
                    <input type="text" autoComplete='off' className=' absolute top-0 w-[100%] h-[100%] left-0 m-0 border-none  caret-[#1A91F0] p-0 outline-none placeholder:text-black'  placeholder={tittle}
                    ref={refToInput}
                    
                    />
                    {/* <div>
                        <button className='absolute top-0 right-0 h-[100%] w-[100%] bg-[#1A91F0] text-black font-[500] text-[16px] cursor-pointer' onClick={() => refToInput.current.focus()}>
                            Edit
                        </button>
                    </div> */}
                    <div>

                    </div>
                    <div className=' absolute bottom-0 left-0 right-0 h-[2px] bg-[#1A91F0] pointer-events-none opacity-0 group-hover:opacity-100'
                    ref={refToDiv}
                    ></div>
                    <div className=' max-w-[100%] min-w-[3.2em] inline-block text-center pointer-events-none text-black'
                    
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