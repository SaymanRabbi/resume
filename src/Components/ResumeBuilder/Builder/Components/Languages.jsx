import React, { useContext, useEffect, useState } from 'react';
import Input from './Input';
import Titttle from './Titttle';
import { useLocation } from 'react-router-dom';
import { data } from '../../../../App';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Languages = () => {
    const path = useLocation().pathname.split('/')[2]
    const {allData,setAllData} = useContext(data)
    const language = allData[path]?.languages
    const options = [
        {value: 'expert', text: 'Expert'},
        {value: 'intermediate', text: 'Intermediate'},
        {value: 'beginner', text: 'Beginner'},
      ];
      const [selected,setSelected] = useState('expert')
      const [text,setText] = useState('')
      const [rating,setRating] = useState(5)
      const handleChange =(event) => {
        setSelected(event.target.value);
        if(event.target.value==='expert' || event.target.value===''){
            setRating(5)
        }
        else if(event.target.value==='intermediate'){
            setRating(4)
        }
        else if(event.target.value==='beginner'){
            setRating(3)
        }
      };
      const lan = (e) =>{
        e.preventDefault()
        if(e.target.value===''){
            setText('not specified')
        }
        else{
            setText(e.target.value)
        }
      }
      const submit = (e)=>{
        e.preventDefault()
        const exits = allData[path]?.languages
        if(exits && exits.length>0){
            setAllData({...allData,
                [path]:{
                  ...allData[path],
                  languages:[
                    ...allData[path].languages,
                    {
                        lan:text,
                        level:selected,
                        rating,
                        _id: Date.now() + Math.random() + text
                    }
                  ]
                }
              })
        }
        else{
            setAllData({...allData,
                [path]:{
                  ...allData[path],
                  languages:[
                    {
                        lan:text,
                        level:selected,
                        rating,
                        _id: Date.now() + Math.random() + lan
                    }
                  ]
                }
              })
        }
      }
      const deleteItem = (id) => {
        const data = allData[path]?.languages
        const newData = data.filter(item=>item._id!==id)
        setAllData({...allData,
          [path]:{
            ...allData[path],
            languages:
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
        <>
        <Titttle tittle='Languages'/>
        {
            
              language && language.length>0 ? language.map((item)=>
                 <div key={item?._id} className='border p-4 mb-3 relative group'>
                <div className='flex justify-between '>
                  <h2 className='font-bold'>{`${item?.lan ? item?.lan:'Not specified'}`}</h2>
                  <p className='text-sm'>{`${item?.level ? item?.level:'Not specified'}`}</p>
                  </div>
                  <FontAwesomeIcon icon={faTrash} onClick={()=>deleteItem(item?._id)} className='absolute text-[20px] right-[-4%]  top-[30%] text-red-500 cursor-pointer opacity-0 group-hover:opacity-100'/>
                  </div>) : null
            
        }
        <div className=' p-4 border mt-3'>
        <div className=' flex gap-3 w-[100%] items-center relative'>
           <form onChange={(e)=>lan(e)}>
           <Input label='Languages' attributename='lan' />
           </form>
            <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5 outline-none mt-12" onChange={(e)=>handleChange(e)}>
            {options.map(option => (
              <option key={option.value} value={option.value}>
                 {option.text}
               </option>
                ))}
                </select>
                <div className=' absolute top-0 right-0 bg-blue-500 text-white px-3 py-1 rounded-md font-[500] cursor-pointer' 
                onClick={(e)=>submit(e)}
                >Add</div>
        </div>
</div>
        </>
       
    );
};

export default Languages;