import React, { useContext, useEffect, useRef, useState } from 'react';
import Titttle from './Titttle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import Input from './Input';
import { Editor } from '@tinymce/tinymce-react';
import { data } from '../../../../App';
import { useLocation } from 'react-router-dom';
const EmploymentHistory = () => {
  const {allData,setAllData } = useContext(data)
  const ref = useRef(null)
  const path = useLocation().pathname.split('/')[2]
  const employment = allData[path]?.employment
    const [open,SetOpen] = useState(false)
    const editorRef = useRef(null);
    const [jobTittle,setJobTittle] = useState('')
    const [employer,setEmployer] = useState('')
    const [startDate,setStartDate] = useState('')
    const [endDate,setEndDate] = useState('')
    const [city,setCity] = useState('')
    const [summary,setSummary] = useState('')

    const onSubmit = (e) => {
      e.preventDefault();
      if(e.target.name==='job_tittle'){
        setJobTittle(e.target.value)
      }
      if(e.target.name==='employer'){
        setEmployer(e.target.value)
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
      // replace space with empty string
      const value = data.replace(/<[^>]*>/g, '').replace(/&nbsp;/g, ' ');
      setSummary(value)
       
    };
    const submit = (e) => {
      e.preventDefault();
      const data = {
        jobTittle,
        employer,
        startDate,
        endDate,
        city,
        summary,
        id: Date.now() + Math.random() + jobTittle
      }
      const exits = allData[path]?.employment
      if(exits && exits.length>0){
        setAllData({...allData,
          [path]:{
            ...allData[path],
            employment:
           [
              ...allData[path]?.employment,
              data
           ]
          }
        })
      }
      else{
        setAllData({...allData,
          [path]:{
            ...allData[path],
            employment:
           [
              data
           ]
          }
        })
      }
      SetOpen(false)
      setJobTittle('')
      setEmployer('')
      setStartDate('')
      setEndDate('')
      setCity('')
      setSummary('')
    }
    const deleteItem = (index) => {
      const exits = allData[path]?.employment
      const newData = exits.filter((item,i)=> item?.id !==index)
      setAllData({...allData,
        [path]:{
          ...allData[path],
          employment:
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
        <div className='mt-6'>
            <Titttle tittle='Employment History'/>
            <p className='text-gray-400 text-sm mb-5'>
            Show your relevant experience (last 10 years). Use bullet points to note your achievements, if possible - use numbers/facts (Achieved X, measured by Y, by doing Z).
            </p>
            {
              employment && employment.length>0 ? employment.map((item,index)=>
                 <div key={item?.id} className='border p-4 mb-3 relative group'>
                <div className='flex justify-between '>
                  <h2 className='font-bold'>{`${item?.jobTittle ? item?.jobTittle:'Not specified'}`}</h2>
                  <p className='text-sm'>{`${item?.startDate ? item?.startDate:'Not specified'} - ${item?.endDate ? item?.endDate:'Not specified'}`}</p>
                  </div>
                  <FontAwesomeIcon icon={faTrash} onClick={()=>deleteItem(item?.id)} className='absolute text-[20px] right-[-4%]  top-[30%] text-red-500 cursor-pointer opacity-0 group-hover:opacity-100'/>
                  </div>) : null
            }
            {
                open ? <div className=' p-4 border'>
                <form onKeyUp={(e)=>onSubmit(e)} className=' relative' ref={ref}>
                <div className=' flex gap-x-2 w-[100%]'>
                 <Input attributename='job_tittle'  label='Job Tittle'/>
                 <Input attributename='employer' label='Employer'/>
                </div>
                <div className='grid md:grid-cols-2 grid-cols-1  md:gap-x-10 gap-3 items-center w-[100%]'>
                   <div className='flex gap-x-2 items-center'> 
                        <Input  attributename='start_date' label='Start Date ' placeHolder='MM/YYYY'/>
                        <Input attributename='end_date' label='End Date'  placeHolder='MM/YYYY'/>
                   </div>
                   <Input attributename='city' label='City'/>
                </div>
                <button onClick={(e)=>submit(e)}  className=' absolute right-0 top-0 bg-blue-500 text-white px-2 py-1 rounded font-bold cursor-pointer'>
                    Save
                </button>
                </form>
                <div className=''>
                    <h2 className='py-3'>Description</h2>
                    <Editor
                     onEditorChange={log}
           onInit={(evt, editor) => editorRef.current = editor}
           initialValue=""
           init={{
            selector: '#tinymce',
            branding: false,
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
               <p onClick={()=>SetOpen(!open)} >
               {
                  open ? 
                 
                  "Close Employment"
                 
                  : 'Add Employment'
               }
               </p>
            </div>
        </div>
    );
};

export default EmploymentHistory;