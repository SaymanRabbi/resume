import React from 'react';
import Titttle from './Titttle';
import { Editor } from 'react-live';
import { useState } from 'react';
import { useRef } from 'react';
import Input from './Input';
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { data } from '../../../../App';
import { useEffect } from 'react';

const References = () => {
    const [open,SetOpen] = useState(false)
    const [name,setname] = useState('')
    const [institute,setinstitute] = useState('')
    const [id,setId] = useState('')
    const [city,setCity] = useState('')
    const path = useLocation().pathname.split('/')[2]
    const {allData,setAllData } = useContext(data)
    const raferences = allData[path]?.references
    const onSubmit = (e) => {
        e.preventDefault();
        if(e.target.name==='name'){
            setname(e.target.value)
        }
        if(e.target.name==='institute'){
          setinstitute(e.target.value)
        }
        if(e.target.name==='id'){
          setId(e.target.value)
        }
        if(e.target.name==='city'){
          setCity(e.target.value)
        }
      }
    const submit = (e) => {
        e.preventDefault();
        const data = {
            name,
            institute,
          id,
          city,
          _id: Date.now() + Math.random() + name
        }
        const exits = allData[path]?.references
        if(exits && exits.length>0){
          setAllData({...allData,
            [path]:{
              ...allData[path],
              references:
             [
                ...allData[path]?.references,
                data
             ]
            }
          })
        }
        else{
          setAllData({...allData,
            [path]:{
              ...allData[path],
              references:
             [
                data
             ]
            }
          })
        }
        SetOpen(false)
        setname('')
        setinstitute('')
        setId('')
        setCity('')
      }
      const deleteItem = (id) => {
        const data = allData[path]?.references
        const newData = data.filter(item=>item._id!==id)
        setAllData({...allData,
          [path]:{
            ...allData[path],
            references:
           [
              ...newData
           ]
          }
        })
      }
      useEffect(()=>{
        localStorage.setItem('data',JSON.stringify(allData))
      },[allData])
    return (
        <div className=' mt-6'>
            <Titttle tittle='References'/>
            <p className='text-gray-400 text-sm mb-5'>
                List people who have agreed to speak on your behalf. Include their name, title, employer, address, phone number, and email address.{' '}
            </p>
            {
              raferences && raferences.length>0 ? raferences.map((item)=>
                 <div key={item?._id} className='border p-4 mb-3 relative group'>
                <div className='flex justify-between '>
                  <h2 className='font-bold'>{`${item?.name ? item?.name:'Not specified'}`}</h2>
                  <p className='text-sm'>{`${item?.institute ? item?.institute:'Not specified'}`}</p>
                  </div>
                  <FontAwesomeIcon icon={faTrash} onClick={()=>deleteItem(item?._id)} className='absolute text-[20px] right-[-4%]  top-[30%] text-red-500 cursor-pointer opacity-0 group-hover:opacity-100'/>
                  </div>) : null
            }
            {
                open ? <div className=' p-4 border'>
                <form onChange={(e)=>onSubmit(e)} className='relative'>
                <div className=' flex gap-x-2 w-[100%]'>
                 <Input  label='Person Name' attributename='name'/>
                 <Input label='Institute' attributename='institute'/>
                </div>
                <div className='grid md:grid-cols-2 md:gap-x-10 grid-cols-1 gap-3 items-center w-[100%]'>
                    
                        <Input label='id'  placeHolder='ID' attributename='id'/>
                  
                   <Input label='City' attributename='city'/>
                </div>
                <button onClick={(e)=>submit(e)}  className=' absolute right-0 top-0 bg-blue-500 text-white px-2 py-1 rounded font-bold cursor-pointer'>
                    Save
                </button>
                </form>
                <div >
                </div>
                </div>:null
            }
              <div className=' ml-5 flex gap-3 py-3 font-[600] text-blue-500 items-center cursor-pointer'>
               <FontAwesomeIcon icon={faPlus} onClick={()=>SetOpen(!open)}/>
               <p onClick={()=>SetOpen(!open)}>
                {
                    open ? ' close References':'Add References'
                }
               </p>
            </div>
        </div>
    );
};

export default References;