import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import Input from './Input';
import { Editor } from '@tinymce/tinymce-react';
import Titttle from './Titttle';
import { useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { data } from '../../../../App';

const Education = () => {
  const {allData,setAllData } = useContext(data)
    const [open,SetOpen] = useState(false)
    const editorRef = useRef(null);
    const [school,setSchool] = useState('')
    const [degree,setDegree] = useState('')
    const [startDate,setStartDate] = useState('')
    const [endDate,setEndDate] = useState('')
    const [city,setCity] = useState('')
    const [summary,setSummary] = useState('')
    const path = useLocation().pathname.split('/')[2]
    const education = allData[path]?.education
    const onSubmit = (e) => {
      e.preventDefault();
      if(e.target.name==='school'){
        setSchool(e.target.value)
      }
      if(e.target.name==='degree'){
        setDegree(e.target.value)
      }
      if(e.target.name==='start_date'){
        setStartDate(e.target.value)
      }
      if(e.target.name==='end_date'){
        setEndDate(e.target.value)
      }
      if(e.target.name==='city'){
        setCity(e.target.value)
      }
     
    }
    const log = () => {
      const data =editorRef.current.getContent();
      const value = data.replace(/<[^>]*>/g, '').replace(/&nbsp;/g, ' ');
      setSummary(value)
    };
    const save = (e) => {
      e.preventDefault();
      const data = {
        school,
        degree,
        startDate,
        endDate,
        city,
        summary,
        id: Date.now() + Math.random() + school
      }
      const exists = allData[path]?.education
      if(exists && exists.length>0){
        setAllData({...allData,
          [path]:{
            ...allData[path],
            education:[
              ...allData[path]?.education,
              data
            ]
          }
        })
      }
      else{
        setAllData({...allData,
          [path]:{
            ...allData[path],
            education:[
              data
            ]
          }
        })
      }
      SetOpen(false)
      setSchool('')
      setDegree('')
      setStartDate('')
      setEndDate('')
      setCity('')
      setSummary('')
    }
    const deleteItem = (id) => {
      const exists = allData[path]?.education
      if(exists && exists.length>0){
        const data = exists.filter(item=>item.id!==id)
        setAllData({...allData,
          [path]:{
            ...allData[path],
            education:[
              ...data
            ]
          }
        })
      }
    }
    useEffect(()=>{
      localStorage.setItem('data',JSON.stringify(allData))
    },[allData])
    console.log(process.env.REACT_APP_TINY_API_KEY)
    return (
        <div className=' mt-6'>
            <Titttle tittle='Education'/>
            <p className='text-gray-400 text-sm mb-5'>
            A varied education on your resume sums up the value that your learnings and background will bring to job.
            </p>
            {
              education && education.length>0 ? education.map((item,index)=>
                 <div key={item?.id} className='border p-4 mb-3 relative group'>
                <div className='flex justify-between '>
                  <h2 className='font-bold'>{`${item?.school ? item?.school:'Not specified'}`}</h2>
                  <p className='text-sm'>{`${item?.startDate ? item?.startDate:'Not specified'} - ${item?.endDate ? item?.endDate:'Not specified'}`}</p>
                  </div>
                  <FontAwesomeIcon icon={faTrash} onClick={()=>deleteItem(item?.id)} className='absolute text-[20px] right-[-4%]  top-[30%] text-red-500 cursor-pointer opacity-0 group-hover:opacity-100'/>
                  </div>) : null
            }
            {
                open ? <div className=' p-4 border'>
                <form onChange={(e)=>onSubmit(e)} className='relative'>
                <div className=' flex gap-x-2 w-[100%]'>
                 <Input  label='School' attributename='school'/>
                 <Input label='Degree' attributename='degree'/>
                </div>
                <div className='grid md:grid-cols-2 md:gap-x-10 grid-cols-1 gap-3 items-center w-[100%]'>
                   <div className='flex gap-x-2 items-center'> 
                        <Input label='Start & End Date' placeHolder='MM/YYYY' attributename='start_date'/>
                        <Input label='?'  placeHolder='MM/YYYY' attributename='end_date'/>
                   </div>
                   <Input label='City' attributename='city'/>
                </div>
                <button onClick={(e)=>save(e)}  className=' absolute right-0 top-0 bg-blue-500 text-white px-2 py-1 rounded font-bold cursor-pointer'>
                    Save
                </button>
                </form>
                <div >
                    <h2 className=' py-3'>Description</h2>
                    <Editor 
                    apiKey= {process.env.REACT_APP_TINY_API_KEY}
           onInit={(evt, editor) => editorRef.current = editor}
           initialValue=""
           onEditorChange={log}
           init={{
            branding: false,
            selector: 'textarea',
             height: 200,
             resize: false,
             menubar: false,
             plugins: [
               'advlist autolink lists link image charmap print preview anchor',
               'searchreplace visualblocks code fullscreen',
               'insertdatetime media table paste code help wordcount'
             ],
             toolbar: 'undo redo | formatselect | ' +
             'bold italic backcolor | alignleft aligncenter ' +
             'alignright alignjustify | bullist numlist outdent indent | ' +
             'removeformat | help',
             content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
           }}
           />
                </div>
                </div>:null
            }
              <div className=' ml-5 flex gap-3 py-3 font-[600] text-blue-500 items-center cursor-pointer'>
               <FontAwesomeIcon icon={faPlus} onClick={()=>SetOpen(!open)}/>
               <p onClick={()=>SetOpen(!open)}>
                {
                    open ? 'Close Education':'Add Education'
                }
               </p>
            </div>
        </div>
    );
};

export default Education;