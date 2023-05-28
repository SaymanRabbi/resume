import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Faq.css';
const Faq = () => {
    return (
        <div className=' relative p-0 mb-[50px]'>
           <div className=' pt-[132px] pr-[20px] pb-[170px] pl-[20px] relative faq flex justify-center items-center'>
               <div className=' max-w-[620px] w-[100%] mx-auto'>
                 <h2 className=' text-4xl font-[700] text-white'>How can we help you?</h2>
                 <form className=' w-[100%] flex mt-[12px] relative'>
                    <input type="text"  className=' text-[19px] leading-6 py-[13px] pr-[70px] pl-[20px] rounded-[4px] border-none text-[#262b33] caret-[#2196f3] w-[100%] outline-none h-[50px]'/>
                    <button className=' w-[50px] p-0 top-0 right-0 bg-[#2196f3] border-none input absolute h-[50px]'>
                        <FontAwesomeIcon icon={faMagnifyingGlass} className=' text-white text-[20px] flex justify-center items-center w-[100%]'/>
                    </button>
                 </form>
               </div>
           </div>
           <div className=' max-w-[928px] mx-auto relative px-[20px] mb-[20px] bg-[#fff] rounded-[6px] shadow'>
             <div className=' hidden'> No results Found</div>
             {/* -----Content area----- */}
                  <div className=' max-w-none w-auto mt-[-50px]   px-[50px] pt-[40px] pb-[45px]'>
                     <h2 className=' text-2xl font-[700]'>Most popular Articles</h2>
                     <hr  className=' my-[20px]'/>
                     <h2 className=' text-center'>Some Content Show Here</h2>
                  </div>
             {/* -----Content area----- */}
           </div>
           {/* -----category-list------ */}
           {/* <div className=' flex flex-wrap pb-[8px]'>
              <div className=' rounded-[6px] bg-[#fff] w-[31.33%] px-[25px] pt-[20px] pb-[35px]'>

              </div>
           </div> */}
             {/* -----category-list------ */}
        </div>
    );
};

export default Faq;