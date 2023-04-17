import React, { useRef, useState } from 'react';
import Titttle from './Titttle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Input from './Input';
import { Editor } from '@tinymce/tinymce-react';
const EmploymentHistory = () => {
    const [open,SetOpen] = useState(false)
    const editorRef = useRef(null);
    const log = () => {
      if (editorRef.current) {
        console.log(editorRef.current.getContent());
      }
    };
    return (
        <div className='mt-6'>
            <Titttle tittle='Employment History'/>
            <p className='text-gray-400 text-sm mb-5'>
            Show your relevant experience (last 10 years). Use bullet points to note your achievements, if possible - use numbers/facts (Achieved X, measured by Y, by doing Z).
            </p>
          
            {
                open ? <div className=' p-4 border'>
                <div className=' flex gap-x-2 w-[100%]'>
                 <Input  label='Job Tittle'/>
                 <Input label='Employer'/>
                </div>
                <div className='grid md:grid-cols-2 grid-cols-1  md:gap-x-10 gap-3 items-center w-[100%]'>
                   <div className='flex gap-x-2 items-center'> 
                        <Input label='Start & End Date' placeHolder='MM/YYYY'/>
                        <Input label='?'  placeHolder='MM/YYYY'/>
                   </div>
                   <Input label='City'/>
                </div>
                <div className=''>
                    <h2 className='py-3'>Description</h2>
                    <Editor
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
               <p onClick={()=>SetOpen(!open)}>
                 {
                      open ? 'Add One More Employment' : 'Add Employment'
                 }
               </p>
            </div>
        </div>
    );
};

export default EmploymentHistory;